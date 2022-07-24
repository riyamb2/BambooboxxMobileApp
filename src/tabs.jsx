import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FunnelScreen from './funnelScreen';
import TaskManager from './taskManager';
const Tab = createBottomTabNavigator()
import Home from'./home'
const Tabs = (props) => {
  return (
   <NavigationContainer>
      <Tab.Navigator labeled={false} barStyle={{ backgroundColor: 'black' }} screenOptions={{ headerShown: false }} >
        <Tab.Screen name='Insights'  children={()=><Home email={props.email} password={props.password} />}  options={{
                    tabBarIcon: () => (<Image source={require("../assets/insights.png")} style={{width: 25, height: 25}} />)
                }}/>
        <Tab.Screen name='Funnel' children={()=><FunnelScreen email={props.email} password={props.password} />}  options={{
                    tabBarIcon: () => (<Image source={require("../assets/funnel.png")} style={{width: 25, height: 25}} />)
                }}/>
        <Tab.Screen name='Tasks Summary' children={()=><TaskManager email={props.email} password={props.password} />} options={{
                    tabBarIcon: () => (<Image source={require("../assets/taskSummary.jpg")} style={{width: 25, height: 25}} />)
                }}/>
      </Tab.Navigator>
      </NavigationContainer>
  )
}

export default Tabs

const styles = StyleSheet.create({})