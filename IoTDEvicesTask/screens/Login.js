import React, { useEffect, useState }  from 'react';
import {View, Text, StyleSheet,TextInput, ImageBackground,TouchableOpacity,AsyncStorage } from 'react-native';

import HomePage from './HomePage';


const Login = props => {

  const {navigation} = props;
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState([]);



loginfunciton=() => {
    fetch('http://ems.lande.com.tr/api/userlogin', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({email:email,password:password})
})
.then((response) => response.json())
.then((json) => setData(json))
.catch((error) => console.error(error))
.finally(() => setLoading(false));
const token=data.app_token;

const id=data.userid;
   navigation.navigate('HomePage', {
  tokenkey: token,
  idkey: id,
  });
  };

return (
  <View style={styles.container}> 
  <View style={styles.inputView} >
    <TextInput style={{marginTop:"10%"}} 
      style={styles.inputText}
      placeholder="Email..." 
      placeholderTextColor="#003f5c"
      onChangeText={email => setemail(email)}
      defaultValue={email}/>
  </View>
  <View style={styles.inputView} >
    <TextInput  
      secureTextEntry={true}
      style={styles.inputText}
      placeholder="Password..." 
      placeholderTextColor="#003f5c"
      onChangeText={password => setpassword(password)}
        defaultValue={password}/>
  </View>
  
  

  <View style={styles.butonlar}>
  <TouchableOpacity  style={styles.loginBtn} onPress={()=>loginfunciton()}>
        <Text style={styles.loginText}>GİRİŞ</Text>
  </TouchableOpacity>
  </View>
</View>
);
}
const styles = StyleSheet.create({
  container:{
    flex: 1, 
    marginTop:"85%",
  
    
  },

  inputView:{
    width:"90%",
    backgroundColor:"#80A1BB",
    borderRadius:15,
    height: "8%",
    marginBottom:"5%",
    justifyContent:"center",
    padding:"7%",
    alignSelf: 'center',
  },
  inputText:{
    height:50,
    color:"white"
  },

  loginText:{
    marginTop: 15,
    color:"#80A1BB",
    alignItems:"center",
    textAlign:'center',
    fontSize:20,
    fontWeight:"bold",
  },
  loginBtn:{
    maxWidth:"100%",
    backgroundColor:"#FFFFFF",
    borderColor:"#191834",
    borderRadius:14,
    height:"40%",
    alignSelf:"center",
    marginTop:"7%",
    marginBottom:"5%",
    marginRight:'4%',
    paddingHorizontal:"10%"
    
  },
});


export default Login;