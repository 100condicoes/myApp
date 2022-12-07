import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, Switch, Alert, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,

    };
  }
  toggleSwitch(){
    const previus_state = this.state.isEnabled;    
    
    this.setState({isEnabled: !previus_state});

  }

  tutorial(){
    Alert.alert(
      "Como usar este aplicativo",
      "O Botão de ligações serve para ligar para Autroidades ou Âmbulancia/Bombeiros/Denuncias/Segurança Municipal",
      
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          Alert.alert(
            "Como usar este aplicativo",
            "O Botão de Emergencia serve para ligar imendiatamente para âmbulacia",
            
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => {
                Alert.alert(
                  "Como usar este aplicativo",
                  "O Botão de information serve para você falar comigo para relatar bugs ou para refazer este turotial",
                  
                )
              } }
            ]
          );
        } }
      ]
    );
  }

  // componentDidMount(){
  //   this.tutorial();
  // }

    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.iconContainer}>
                   <Ionicons style={styles.appIcon}
                    name="notifications"
                    size= {130}
                    color={"black"}
                  />
                    <View style={styles.titleContainer}>
                      <Text style={styles.titleContainerText}> Emergention </Text>
                    </View>

                    <View style={styles.cardContainer}>
                      <Text style={styles.cardContainerText}>  Tutorial  </Text>
                      <View style={styles.temaContainer}>
                        {/* <Text style={styles.temaText}>Tema</Text> */}
                        {/*<Switch
                          trackColor={{ false: "lightgray", true: "#FFF" }}
                          thumbColor={!this.state.isEnabled ? "gray" : "gray"}
                          onValueChange={()=>this.toggleSwitch()}
                          value={this.state.isEnabled}
                          style={{marginTop: 15}}
                         />*/ }
                          <View>
                          <TouchableOpacity style={styles.Refazer_tutorial} onPress={this.tutorial}>
                            <Text style={styles.Refazer_Text}> Deseja fazer o tutorial? </Text>
                     </TouchableOpacity>
                          </View>
                      </View>        
                    </View>
                  </View>
                 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: "#000",
      alignItems: "center",
      height:"100%"
    },
    containerLight: {
      backgroundColor: "white"
    },
    iconContainer: {
      marginTop: 20,
      backgroundColor:"#807D7D",
      width: "90%",
      height:"90%",
      borderRadius: 20,
      alignItems: 'center'
    },
    appIcon: {
     alignItems: 'center'
    },
    cardContainer: {
      marginTop: 30,
      backgroundColor:"#000",
      width: "90%",
      height:"65%",
      borderRadius: 20,
      alignItems: "center"
    },
    cardContainerText: {  
      color: "#FFF",
      marginTop: 60,
      fontSize: 50,
    },
    temaText: {
      color: "#FFF",
      marginRight: 50,
      fontSize: 30,
    },
    titleContainer: {
      backgroundColor: "#FFF",
      width: "85%",
      height:"10%",
    },
    titleContainerText:{
      fontSize: 45,
    },
    temaContainer:{
     display: "flex",
     flexDirection: "row",
     justifyContent: "space-around",
     marginTop: 22,
    },
    Refazer_tutorial:{
      backgroundColor:"#3164F4",
      padding: 10,
      borderRadius: 6
    },
    Refazer_Text:{
      fontWeight: "bold",
      fontSize: 17.5,
      color: "white"
    },
  });