import React, { useState } from "react";
import { AppRegistry, StyleSheet, Text, View, Platform ,Image, Button,TouchableHighlight} from "react-native";
// import FusionCharts from "react-native-fusioncharts";
import DateTimePicker  from '@react-native-community/datetimepicker';
// import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import SelectList from 'react-native-dropdown-select-list'
import { ArrowDownIcon, ArrowUpIcon,NativeBaseProvider } from "native-base";
import Header from "./header";
import {Picker} from '@react-native-picker/picker';

// DateTimePickerAndroid.open(params: AndroidNativeProps)
// DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])


export default function FunnelScreen() {
const [state,setState] = useState({date:"2016-05-15"})
  const [values, setValues] = useState([33,44,66,44,43,21])
  const [delta,SetDelta] = useState([22,-14,29,-23,4,-49])
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [data,setData] = useState([{key:'1',value:'1 Week'},{key:'2',value:'2 Week'},{key:'3',value:'3 Week'}])
  const [selectItem,setSelectItem]= useState(data[0]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const changeDate=(e,selectedDate)=>{
    setDate(moment(selectedDate))
  }
    return (
      <View style={styles.container}>
        <Header/>
      <View style={styles.container}>

        {/* <Text style={styles.heading}>
        </Text> */}
        <Text style={{justifyContent:"center",fontWeight:"700",fontSize:16,marginLeft:30}}>Date</Text>
       
             <View style={styles.container}>
      <Picker
        selectedValue={selectItem}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSelectItem(itemValue)}
      >
        <Picker.Item label="1 Week" value="1" />
        <Picker.Item label="2 Weeks" value="2" />
        <Picker.Item label="3 Weeks" value="3" />

      </Picker>
        {/* <TouchableHighlight activeOpacity={0} onPress={()=>setShow(!show)}>
          
        <Text>{date}</Text>
        </TouchableHighlight> */}

        {/* <DateTimePicker timeZoneOffsetInMinutes={0} value={new Date(date)} mode="date" onChange={changeDate}/> */}
        <View>
        {/* <Button onPress={showDatepicker} title="S/how date picker!" /> */}
      </View>
        <View style={styles.chartContainer}>
          <Text style={{fontWeight:'bold',fontSize:35,margin:10,marginTop:60}}>Account Funnel</Text>
        <Image style={{position:"absolute",width:"77%",top:"100%"}} source={require('../assets/funnel.png')}/>
        
        </View>
        <View style={styles.valueInt}>
        {values.map(e=>{return(
            <Text style={styles.gap}>{e}</Text>
          )})}
        </View>
        <View style={[styles.incre, {
            transform: [{ rotate: "15deg" }]
          }]}>
        {delta.map(e=>{return(
          <NativeBaseProvider>
            <Text style={e>0?[styles.difference,{
              transform: [{ rotate: "348deg" }]
            }]:[styles.reddifference,{
              transform: [{ rotate: "348deg" }]
            }]}>{e>0 ? (<ArrowUpIcon color="#21DA8C"  style={{transform: [{ rotate: "348deg" }]}}/>):(<ArrowDownIcon color="#FF0000" style={{fontSize: 100 ,transform: [{ rotate: "348deg" }]}}/>)} {Math.abs(e)}% 
            </Text></NativeBaseProvider>
          )})}
        </View>
      </View>
      </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
  incre:{
    height: "58%",
    top:280,
    left:250,
    position: "absolute",

    alignItems:"center"
  },
  reddifference:{
    color:"#FF0000",
    paddingBottom:40,

  },
  difference:{
    color:"#21DA8C",

  },
  gap:{
    padding:21,
    left:172,
    color:"#FFF",
    fontWeight:"400"
  },
  valueInt:{
    position:"absolute",
    flexDirection:"column",
    justifyContent:'space-between',
    top:260,
    left:-40
    
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:"#fff",
    width:400
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10
  },
  chartContainer: {
    height: 200
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent("ReactNativeFusionCharts", () => FunnelScreen);
