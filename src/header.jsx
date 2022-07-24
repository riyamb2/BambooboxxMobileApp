import { StyleSheet, Text, View,SafeAreaView,ScrollView  } from 'react-native'
import React,{useState,useEffect} from 'react'
import Logo from './logo'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import FunnelScreen from './funnelScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Cards from './cards';
import Popover from 'react-native-popover-view';
import { TouchableOpacity } from 'react-native-web';
import { Popable } from 'react-native-popable';
import { CloseIcon, IconButton, NativeBaseProvider } from 'native-base';
import Modal from "react-native-modal";
import { Stack, Switch,ListItem } from "@react-native-material/core";

const Header = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [notification,setNotification] = useState([
    "Congratulations!...Alex completed the assigned task","Update!...Marc has closed the assigned task with a note",
"Update!...Ana updated the status of assigned task as In Progress",
"Congratulations!...Jennifer has closed all of her assigned tasks"

  ])
  return (
    <View>
      
      <SafeAreaView style={styles.position}>
    {/* <Logo style={styles.header} / >  */}
    

   
    <View styles={styles.header}>
    {/* <Image
      style={{ width: 30, height: 30 }}
      source={require('../HeaderTest/assets/favicon.png')}

    /> */}
    <Logo style={{marginLeft:5}}/>
    {/* <Text >Home</Text> */}

    {/* <FunnelScreen/> */}
  </View>  
  <Text style={{fontSize:20,paddingBottom:1,marginTop:10,marginRight:16}}>Bamboobox</Text>
    {/* <Cards/> */}
  {/* <Text>hello</Text> */}
  {/* <Popable action="hover" content="See profile"> */}
    <FontAwesome5 name={'bell'} size={30} onPress={()=>setShowPopover(!showPopover)} style={{marginRight:15}}/>
{/* </Popable> */}
<Modal onRequestClose={()=>setShowPopover(!showPopover)} 
 isVisible={showPopover} onPress={()=>setShowPopover(!showPopover)}>
        <View style={{ flex: 2,backgroundColor:"#fff",  borderRadius: 16,
    borderWidth: 1}}>
         <NativeBaseProvider>
          <IconButton onPress={()=>setShowPopover(!showPopover)}>
        <CloseIcon style={styles.close} />
        </IconButton>
        {notification.map((ele,index)=>{
          return(
            <ListItem key={index}>{ele}</ListItem>)
          })}
</NativeBaseProvider>
        </View>
      </Modal>
    {/* <Popover
      isVisible={showPopover}
      style={styles.notification}
      >
        <NativeBaseProvider>
          <IconButton onPress={()=>setShowPopover(!showPopover)}>
        <CloseIcon style={styles.close} />
        </IconButton>
        {notification.map((ele,index)=>{
          return(
          <Text key={index}>{ele}</Text>)
        })}
</NativeBaseProvider>
    </Popover> */}

  </SafeAreaView >
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
     position:{
        marginTop:35,
        marginLeft:15,
        justifyContent:"space-between",
        flexDirection:"row",
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  

    },
    header:{
       
        flex: 1, flexDirection: 'row', flexWrap: 'wrap'

    },
  
})