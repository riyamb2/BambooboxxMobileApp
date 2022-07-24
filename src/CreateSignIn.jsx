// import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import Logo from './logo'
import { Button } from "@react-native-material/core";
import SelectList from 'react-native-dropdown-select-list'
const CreateSignIn = (props) => {
    const data = [{key:'1',value:'Inside Sale Executive'},{key:'2',value:'Field Sale Executive'}];
    const [selectItem,setSelectItem]= useState("");
    const createButtonClick =()=>{
      props.openCreateScreen(false)
    }
  return (
    <View style={styles.container}>
         <View style={styles.logoPlacement}>
        <Logo/>
      </View>
        <View style={styles.inputView}>
        
        <TextInput
          style={styles.TextInput}
          placeholder="Full Name"
          placeholderTextColor="#003f5c"
        />
</View>

<View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
        />
        </View>
        <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
        />
        
        </View>
        <View >

            <SelectList
          data={data}
            setSelected={setSelectItem}
            placeholder={"Select Department"}
            />
            </View>
            
        <Button color='#21DA8C' style={styles.button} title="Create new Account" onPress={()=>createButtonClick()} />
    </View>
  )
}

export default CreateSignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
  
    button:{
        marginTop:100,
        position:"relative",
        width:'172%'
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
        width: 200,
        borderColor: '#21DA8C',

        flex: 1,
        borderWidth:1,
        borderRadius:6,
        padding: 10,
        
      }
})