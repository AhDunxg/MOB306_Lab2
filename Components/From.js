import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import React, { Component } from 'react'

export default class From extends Component {
  render() {
    return (
        <View>
      <View style={{padding:20}}>
      <Text style={{textAlign:"center",padding:10,backgroundColor:"#CCFFFF",borderRadius:20}}>MÁY TÍNH ĐIỆN TỬ</Text>
    
      <TextInput style={{textAlign:"center",backgroundColor:"#FF9933",width:"50%",borderWidth: 1,marginLeft:75}}>Kết quả...</TextInput>
      <Text style={{textAlign:"center",padding:10,}}>Số Học</Text>
         <View style={styles.from}>
         <View style={styles.fromControl}>
        <TextInput style={styles.input}>Nhập số thứ nhất</TextInput>
      </View>
    
      </View>
      <View style={styles.from}>
         <View style={styles.fromControl}>
        <TextInput style={styles.input}>Nhập số thứ nhất</TextInput>
      </View>
    
      </View>
      <View style={styles.button}>
      <View style={{width:"100%",backgroundColor:"#FFFF00",borderRadius:25,}}>
      <Button title='+' onPress={() =>{}} ></Button>
      </View>
      <View style={{width:"100%",backgroundColor:"#FFFF00",borderRadius:25}}>
      <Button title='-' onPress={() =>{}} ></Button>
      </View>
      <View style={{width:"100%",backgroundColor:"#FFFF00",borderRadius:25}}>
      <Button title='*' onPress={() =>{}} ></Button>
      </View>
      <View style={{width:"100%",backgroundColor:"#FFFF00",borderRadius:25}}>
      <Button title='/' onPress={() =>{}} ></Button>
      </View>
 
      </View>
      </View>
      <View style={{padding:20}}>

      <Text style={{textAlign:"center",padding:10,}}>Giải phương trình</Text>
         <View style={styles.from}>
         <View style={styles.fromControl}>
        <TextInput style={styles.input}>Nhập số thứ nhất</TextInput>
      </View>
    
      </View>
      <View style={styles.from}>
         <View style={styles.fromControl}>
        <TextInput style={styles.input}>Nhập số thứ nhất</TextInput>
      </View>
    
      </View>
      <View style={styles.button2}>
      <View style={{width:"100%",backgroundColor:"#FFFF00",borderRadius:25,}}>
      <Button title='Giải' onPress={() =>{}} ></Button>
    
      </View>
 
      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    // card:{
    //      backgroundColor:'white',
    //      padding: 20,
    //      shadowColor: 'black',
    //      shadowOpacity:0.26,
    //      shadowOffset:{width :0, height:2},
    //      shadowRadius:8,
    //      elevation:5,
    //      borderRadius:10,
    //  },
    //  fromControl:{width :"100%"},
     input:{
        height: 45,
       paddingVertical:10,
        margin: 15,
        borderWidth: 2,
        padding: 20,
        borderRadius:20,
    },
    button:{
        width:"25%",
        display:'flex',
        flexDirection: 'row',
        paddingTop:30,
       
        
    },
    button2:{
        justifyContent:"center",
    },
   
});