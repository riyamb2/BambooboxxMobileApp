import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, Image  } from 'react-native';
// import {SvgComponent} from './src/logo'
import CreateSignIn from './src/CreateSignIn';
import Home from './src/home';
import Login from './src/login'
import FunnelScreen from './src/funnelScreen';
import Tabs from './src/tabs';
import { useState } from 'react';

export default function App() {
  const[isLogin,setIsLogin] =useState(false)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  console.log(email,password)
  return (
    // <View >
    //   {/* <Text>Riyam Jain</Text>
    //   <StatusBar style="auto" /> */}
    //   <View style={styles.container}>
    //   </View>
    //   {/* <Home/> */}
    //   <View style={styles.container}>
    //     {/* <FunnelScreen/> */}
    //   {/* <Login/> */}
      
    //   {/* <CreateSignIn/> */}
    //   </View>
    //   {/* <Text>Riyam </Text> */}
    //   {/* <Tabs/> */}
    // </View>
    <>
    {isLogin? <Tabs email={email}  password={password} /> :
<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} setIsLogin={setIsLogin}/>


    }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
