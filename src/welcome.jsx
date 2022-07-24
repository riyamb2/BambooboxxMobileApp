import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View style = {styles.welcome}>
      <Text  style = {styles.welcomeText}>WELCOME TO BAMBOOBOX MOBILE EXPERIENCE</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    welcome:{
        fontSize:24,
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        color:"#FFFFFF",
        backgroundColor:"#21DA8C"
    },
    welcomeText:{
        fontFamily:"sans-serif",
        fontSize:24,
        textAlign:"center",
        color:"#FFFFFF",
        fontWeight:"300",
        lineHeight:50
        
        
    }
})