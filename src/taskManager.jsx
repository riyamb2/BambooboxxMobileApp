import React, { Component, useEffect, useState } from "react";
import { View, TextInput,Text,ScrollView,RefreshControl } from 'react-native';
// import { Paper, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { StackedBarChart } from "react-native-chart-kit";
import { Stack, Switch,ListItem } from "@react-native-material/core";
import Header from "./header";


const TaskManager = () => {
    const [alignment, setAlignment] = useState('Assigned');
    const [assigned, setAssigned] = useState([])
    const [completed, setCompleted] = useState([])
const [refresh, setRefresh] = useState(false)
    const [labels, setLabels] = useState([])
    const [data, setData] = useState([])
    const pullMe = ()=>{
        setRefresh(true)
        getAssign()
        getData()
        // setTimeout(() => {
        //     setRefresh(false)
        // }, 4000);
    }
    function getData (props){
      const body = {
          email: props.email||'aditya@bamboobox.ai',
          password: props.email||'aditya@1234'
      }
      fetch('https://mobile-app-b2.herokuapp.com/task/all', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json())
      .then (resp => {
          console.log(resp)
          const owners = []
          const dataset = []
          resp.data.forEach(item => {
              owners.push(...item.owner)
          })
          owners.forEach(person => {
              let cntAssigned = 0
              let cntCompleted = 0
              resp.data.forEach(data => {
                  if(data.completed === 'Assigned' && data.owner.includes(person)){
                      cntAssigned += 1;
                  } else if(data.completed === 'Assigned' && data.owner.includes(person)){
                      cntCompleted += 1;
                  }
              })
              dataset.push([cntAssigned, cntCompleted])
          })
          for(let i = 0; i < owners.length; i += 1){
              owners[i] = owners[i].substring(0, owners[i].indexOf('@'))
          }
          setLabels(owners)
          setData(dataset)
          setRefresh(false)
          console.log(owners, dataset)
      })
      
  }
  
    function getAssign() {
      try {
        
        const body = {
          email: 'aditya@bamboobox.ai',
          password: 'aditya@1234'
      }
      fetch('https://mobile-app-b2.herokuapp.com/task/all', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json())
            .then (resp => {
                console.log('aditya', resp)
                const assignedTask = []
                const completedTask = []
                resp.data.forEach(item => {
                    if (item.completed === 'Assigned'){
                        console.log(item, item.completed, item.cardDetail)
                        assignedTask.push(item.cardDetail)
                    }
                    else
                        completedTask.push(item.cardDetail)
                })
                setAssigned(assignedTask)
                setCompleted(completedTask)
                console.log("Hello",assignedTask,completedTask)
                setRefresh(false)
            }).catch(error=>console.log("Error assign details:",error))
      } catch (error) {
        console.log("unnable to fetch",error);
      }
    }

    const [checked, setChecked] = useState(true);
    useEffect(()=>{
      if(checked) setAlignment("Completed")
      else setAlignment("Assigned")
    },[checked])
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    useEffect(() => {
        getData()
        getAssign()
    }, []);
    const chartData = {
      labels: labels,
      legend: ["Assigned", "Completed"],
      data: data,
      barColors: ["#60E2EE", "#21DA8C"]
  };
    return (
        <>
        <Header/>
      <ScrollView 
      refreshControl={<RefreshControl
        refreshing={refresh}
        onRefresh={()=>pullMe()}
      />}
      style={{margin:"3%" }}>
        {/* <Text>hello</Text> */}
        <View>
        < StackedBarChart
                data={chartData}
                withDots={false}
                width={400}
                height={280}
                strokeWidth={16}
                radius={20}
                chartConfig={{
                    backgroundColor: "#218838",
                    backgroundGradientFrom: "#ffffff",
                    backgroundGradientTo: "#ffffff",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#218838"
                    }
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
                hideLegend={false}
            />
            </View>
            <View style={{flexDirection:"row",margin:15,marginLeft:100,alignItems:"center"}}>
                <Text >Assigned</Text>
            <Stack  >
                
      <Switch value={checked} labels="Completed" onValueChange={() => setChecked(!checked)} />
      {/* <Switch disabled /> */}
    </Stack>
    <Text >Completed</Text>

    </View>
    
<ScrollView  >
    { alignment === 'Assigned' ? assigned.map((ele,idx) => {
                    return(
                      <ListItem key={idx} title={ele} />
                    )
                }): completed?.map((ele, idx) => {
                    return(
                      <ListItem key={idx} title={ele} style={{width:100}} />

                    )
                }) 
                }

      </ScrollView>
      </ScrollView>
      </>
    )
}

export default TaskManager;