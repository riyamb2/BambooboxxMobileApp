
import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import Logo from './logo'
import react , { useState } from 'react'
import { Button } from "@react-native-material/core";
import CreateSignIn from './CreateSignIn';

const login = (props) => {
    // const [email, setEmail] = useState('')
    const [openCreateScreen,SetOPenCreateScreen] = useState(false)

    const openCreateAccount = ()=>{
      SetOPenCreateScreen(!openCreateScreen)
      console.log("hlll..",openCreateScreen)
    }
    // if(openCreateAccount === true) {return )}
    const signInButton = ()=>{
      props.setIsLogin(true)
    }
  return (
    <>
    {openCreateScreen? <CreateSignIn openCreateScreen={SetOPenCreateScreen}/>:
    <View style={styles.container}>
      <View style={styles.logoPlacement}>
        <Logo/>
      </View>
      <View style={styles.inputView}>
        
  <TextInput
    style={styles.TextInput}
    placeholder="Email"
    placeholderTextColor="#003f5c"
    onChangeText={(email) => props.setEmail(email)}
  />
</View>
 
<View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Password."
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(password) => props.setPassword(password)}
  />
</View>
<Button color='#21DA8C'  title="Sign In" onPress={()=>signInButton()} />
<Button variant='text'color='#21DA8C' onPress={()=>openCreateAccount()} title="Don't have an account? Sign up here" />
{/* <CreateSignIn/> */}
    </View>
}
    </>

  )
}

export default login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        
    },
    logoPlacement:{
        alignContent:"center",
        alignItems:"center",
        marginTop:"15%",
        marginBottom:"15%",
        

    },
    inputView: {
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        borderRadius:6,
        // backgroundColor: "#21DA8C",

        borderColor: '#21DA8C',
        // border:"1px solid black",
        width: 200,
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      }
})