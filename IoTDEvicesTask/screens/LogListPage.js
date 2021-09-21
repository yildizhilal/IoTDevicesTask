import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,StyleSheet,TouchableOpacity } from 'react-native';


const LogListPage = ({route,navigation}) =>{
  
  const dataL =route.params.datalog;


const renderItem = ({ item }) => (
    <View style={styles.renderlist}>
<Text>{item.max}</Text>
    </View>
  );
    return (
      <View style={styles.container}>
       <FlatList style={styles.flatlist}
         data={dataL.cihaz_tur}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: { 
        flex: 1,
        alignContent:'center',
        justifyContent:"center",
        marginTop:"50%"
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
  });
  
export default LogListPage;