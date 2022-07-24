import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
// import { SimpleCard } from "@paraboly/react-native-card";
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';
import Modal from "react-native-modal";

const Cards = (props) => {
    const [isModalVisible, setModalVisible] = React.useState(false);
    const [cardsData,setCardsData] = React.useState([]);
    const [des,setDes] = React.useState('');
    console.log("checking des",des);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
      const assginOwner = async()=>{
        console.log("des:",des);
        const response = await fetch("https://mobile-app-b2.herokuapp.com/task/create",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            "email":props.email||"aditya@bamboobox.ai",
            "password":props.email||"aditya@1234",
            "cardNo":props.cardNo,
            "description":des
          })
        })
        const res = await response.json()
        setModalVisible(!isModalVisible);

      }

  return (
    <View style={styles.cardPosition}>
      {/* <Text>cards</Text> */}
      <Card
      onPress={toggleModal}
      style={{  backgroundColor:'#d9d9d9',
      borderRadius: 20,
      color:"#21DA8C",
    shadowColor: "#21DA8C",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {height: 1, width: 1 }}}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle"  /> */}
    <Card.Content style={{color:"#21DA8C"}}>
      <Title style={props.acc.length<5?{color:"#E842EC"}:{color:"#00A75E"}}>{props.acc.length}</Title>
      <Paragraph>{props?.description}</Paragraph>
    </Card.Content>
    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
    {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
  </Card>
  <View>
      <Modal onRequestClose={toggleModal} 
 isVisible={isModalVisible} onPress={toggleModal}>
        <View style={{ flex: 2,backgroundColor:"#fff", margin:5, borderRadius: 16,
    borderWidth: 1}}>
        <View style={{  marginTop:20 }}>
      <Text style={{justifyContent:"center",marginLeft:"25%",fontWeight:"900",fontFamily:"sans",fontSize:22}}>Account Details</Text>
          <View style={{justifyContent:"space-between",flexDirection:"row",marginTop:40}}>
            <Text style={{fontWeight:"700",fontSize:15,marginLeft:30}}>Account Name</Text>
            <Text style={{fontWeight:"700",fontSize:15,marginRight:30}}>Owner Name</Text>
          </View>
          <View style={{flexDirection:"column",textAlign:"center",justifyContent:"center"}}>
            { props.acc.map(ele=>{
            return(
          <View style={{justifyContent:"space-between",flexDirection:"row",marginTop:15}}>
            <Text style={{marginLeft:40}}> {ele.accountName} </Text>
            <Text style={{marginRight:20}}>{ele.ownerName}</Text>
            </View>)})
}
            </View>    
            <TextInput style={{marginTop:30}}  maxLength={40}  placeholder='Description' value={des} onChangeText={(txt)=>setDes(txt)} />
            <View style={{justifyContent:"space-between",flexDirection:"row",marginTop:100,}}>
            
          <Button variant="contained" onPress={toggleModal} style={{marginLeft:20}}> close</Button>
            <Button color='#00A75E' onPress={assginOwner} style={{marginRight:20}}>Assign Accounts</Button>
          </View>
          </View>
        </View>
      </Modal>
    </View>

    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
  cardPosition:{
   
  
    
    margin:10
  }  
})