import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'


export default class Exchange extends React.Component{
 constructor(){
        super();
        this.state={
            item:"",
            description:"",
        }
    }

    addItem = ()=>{
        db.collection("requests").add({
            item : this.state.item,
            description : this.state.description 
        });
        return(alert("item added"));
    }

    render(){
        return(
            <View style={{flex:1}}>
                <KeyboardAvoidingView style={styles.keyBoardStyle} behavior="padding">
   
             <MyHeader title="Exchanges"/>

                <TextInput style={styles.formTextInput}
                    placeholder="Item name"
                    onChangeText={(text)=>{
                        this.setState({
                            item : text
                        })
                    }}
                    value={this.state.item}
                />
                <TextInput style={[styles.formTextInput,{height:300}]}
                    placeholder="Item description"
                    numberOfLines={8}
                    multiline
                    onChangeText={(text)=>{
                        this.setState({
                            description : text
                        })
                    }}
                    value={this.state.description}
                />
                <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        this.addItem();
                        this.setState({
                            item : "",
                            description : "",
                        })
                    }}
                >
                    <Text>Add Item</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"50%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"15%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )