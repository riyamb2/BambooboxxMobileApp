import { StyleSheet, Text, View,SafeAreaView,ScrollView,RefreshControl  } from 'react-native'
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
import Welcome from './welcome';
import { Stack, Switch,ListItem } from "@react-native-material/core";



const Home = (props) => {

  const [showPopover, setShowPopover] = useState(false);
  const [isloading,setIsLoading] = useState(true)
  const [notification,setNotification] = useState([
    "Congratulations!...Alex completed the assigned task","Update!...Marc has closed the assigned task with a note",
"Update!...Ana updated the status of assigned task as In Progress",
"Congratulations!...Jennifer has closed all of her assigned tasks"

  ])
  const [refresh, setRefresh] = useState(false)
  // useEffect(()=>{
  //   setTimeout(() => setShowPopover(false), 2000);
  // },[])
  const pullMe = ()=>{
    setRefresh(true)
    fetchingCards()
  }
  const [cardsData,setCardsData] = useState([])
  const fetchingCards =async()=>{
    console.log("response email",props.email,props.password);
    const response = await fetch("https://mobile-app-b2.herokuapp.com/card",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        "email":props.email,
        "password":props.password
        
    })
    })
    const res = await response.json()
    console.log("body console",res)
    setCardsData(res.data)
    setRefresh(false)
    setIsLoading(false)

  }
React.useEffect(()=>{
  fetchingCards()
},[])
  return (
    <>
    {isloading? <Welcome/>:
    <View style={{marginBottom:80}}>
    <SafeAreaView style={styles.position}>
    {/* <Logo style={styles.header} / >  */}
    

   
    <View styles={styles.header}>
    {/* <Image
      style={{ width: 30, height: 30 }}
      source={require('../HeaderTest/assets/favicon.png')}

    /> */}
    <Logo style={{marginLeft:5}} onPress={()=>props.setIsLogin(false)}/>
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
          <ListItem  key={index} title={ele}/>)
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
  <ScrollView style={styles.scrll}
   refreshControl={<RefreshControl
        refreshing={refresh}
        onRefresh={()=>pullMe()}
      />}
  >
    {cardsData.map((ele,index)=>{
      return(
        <Cards key={index} email={props.email} password={props.password} cardNo={ele.cardNo} acc={ele.acc} description={ele?.cardDescription} department = {props.department}/>
      )
    })}
  </ScrollView>
</View>
}
</>
    )
}

export default Home
const styles = StyleSheet.create({
  scrll:{
    marginBottom:10,
    paddingBottom:20
  },
  close:{
    position:"absolute",
    top:"5%",
    right:"10%"
  },
  notification:{
    backgroundColor:"#fff",
    width:"100%"
  },
    position:{
        marginTop:35,
        marginLeft:15,
        justifyContent:"space-between",
        flexDirection:"row",
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  

    },
    header:{
       
        flex: 1, flexDirection: 'row', flexWrap: 'wrap',
    },
  
})