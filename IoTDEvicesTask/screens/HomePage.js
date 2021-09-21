import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,StyleSheet,TouchableOpacity } from 'react-native';




const HomePage = ({route,navigation}) =>{
  
  const token =route.params.tokenkey;
  const id =route.params.idkey;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  const [datalist, setDatalist] = useState([]);
  useEffect(() => {
    fetch('http://ems.lande.com.tr/api/userdeviceslist', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
     body: JSON.stringify({app_token:token,userid:id,cihaz_no:[100000291]})
    })
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
    

    fetch('http://ems.lande.com.tr/api/userdevicesloglist', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
     body: JSON.stringify({app_token:token,userid:id,limit:1,cihaz_no:[100000291]})
    })
    .then((response) => response.json())
    .then((json) => setDatalist(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
    




  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.renderlist}>
    <Text >ad_soyad:</Text>
    <><Text style={styles.text}>{item.ad_soyad}</Text>
    <Text >cihaz_no:</Text>
    <Text style={styles.text}>{item.cihaz_no}</Text>
    <Text >konum:</Text>
    <Text style={styles.text}>{item.konum}</Text>
    <Text >son_haberlesme:</Text>
    <Text style={styles.text}>{item.son_haberlesme}</Text></>
    <TouchableOpacity  style={styles.loginBtn} onPress={() => navigation.navigate('LogListPage', {datalog:datalist})}>
        <Text style={styles.loginText}>Cihaz Log List</Text>
    </TouchableOpacity>
    </View>

  );


    return (
      <View style={styles.container}>
          <FlatList style={styles.flatlist}
         data={data.cihaz_no}
        renderItem={renderItem}
        keyExtractor={item => item.ad_soyad}
      />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: { 
        flex: 1,
    },
    flatlist: { 
      paddingVertical:"8%",
        paddingLeft: "4%",
        paddingRight:"8%",
        marginTop:"20%",
        fontWeight:"700"
    },
    renderlist: { 
      flex:2,
      borderRadius:5,
      backgroundColor:"#80A1BB"
  },
  text:{
    fontSize:20,
  },
  loginText:{
    marginTop: "4%",
    color:"#FFFFFF",
    alignItems:"center",
    textAlign:'center',
    fontSize:20,
    fontWeight:"bold",
  },
  loginBtn:{
    backgroundColor:"#80A1BB",
    borderColor:"#191834",
    borderRadius:10,
    
  },
  });
  
export default HomePage;