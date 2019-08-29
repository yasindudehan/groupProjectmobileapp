import React, { Component } from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,ImageBackground} from 'react-native';


export default class LoginScreen extends Component {
  constructor(props){
     super(props);
     this.state={userId:'',password:''}
  }
  render() {
    return (
         <View style={styles.container}>
         <ImageBackground source={require('./Image/a.png')}
         style={styles.backgroundimage}
        />
           <TextInput
              onChangeText={(userId)=>this.setState({userId})}
              value={this.state.userId}
              style={styles.input}
             placeholder="USER ID"
           
           />
           
           <TextInput
           onChangeText={(password)=>this.setState({password})}
            value={this.state.password}
              secureTextEntry={true}
            style={styles.input}
            placeholder="PASSWORD"
           />
           <TouchableOpacity style={styles.button}
             
           onPress={this.onSign}
           ><Text style={styles.buttonText}>LOGIN</Text></TouchableOpacity>
          
         
         </View>  
    ) 
  }
  onSign=async()=>{
    alert("login");
  }
}

const styles=StyleSheet.cretate=({
    container:{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
    },
    input:{
        width:250,
        height:50,
        borderWidth:1,
        borderColor:'#717e85',
        margin:10,
    },
    button:{
        margin:10,
        backgroundColor:'#353738',
        width:260,
        height:50,
    },
    buttonText:{
       textAlign:'center',
       padding:10,
       color:'#cdd0d1',
       fontSize:20,
    },
    backgroundimage:{
      width:150,
      height:150,
      justifyContent:'center',
    }
  
  
  });