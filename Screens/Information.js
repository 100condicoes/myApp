import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, TextInput} from 'react-native';
import email from 'react-native-email'

export default class Information extends Component {
    constructor(props){
        super(props);
        this.state={
            text: ''
        }
    }


    relatarBugs = () => {
      const to = 'gelocenoura@gmail.com' // string or array of email addresses
      email(to, {
          
          subject: 'relatar bugs',
          body: this.state.text
          
      }).catch(console.error)
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

    render() {
        return (
            <View
            style={styles.container}>
                 
                <View style={styles.Plano_de_fundo}>
                    <View style={styles.informante}>
                        <Text style={styles.informanteText}> Caso você tenha pulado o tutorial </Text>
                     </View>
                     <TouchableOpacity style={styles.Refazer_tutorial} onPress={this.tutorial}>
                            <Text style={styles.Refazer_Text}> Deseja Refazer o tutorial </Text>
                     </TouchableOpacity>

                     <View style={styles.inputContainer}>
                      <View style={styles.inputContainerText}>
                        <Text style={{color:"white"}}>Relatar BUGS</Text>
                      </View>

                     <TextInput
                          multiline
                          numberOfLines={10}
                          style={styles.input}
                           onChangeText={(text) => {
                              this.setState({text: text})
                            }}
                          value={this.state.text}
                          placeholder="Escreva aqui sua mensagem..."
                        />
                        <TouchableOpacity style={styles.botaoEnviar} onPress={this.relatarBugs}>
                          <Text>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      inputContainer:{
        width: "80%",
      },
      inputContainerText:{
        marginTop:10,
        paddingLeft: 5,
        width: 100,
        height: 20,
        backgroundColor: "black"
      },
      input:{
        backgroundColor: "white",
        borderWidth: 1,
        padding: 10,
      
      },
      botaoEnviar:{
        borderRadius: 10,
        marginTop:0,
        backgroundColor:"#3164F4",
        height:27,
        width:80,
        alignItems: 'center',
        fontWeight:'bold'
      },
      Plano_de_fundo:{
        marginTop: 20,
        backgroundColor:"#807D7D",
        width: "90%",
        height:"90%",
        borderRadius: 20,
        alignItems: 'center'
      },
      informante:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#A29B9B",
        width: "100%",
        height:"10%",
      },
      informanteText:{
        fontWeight: "bold",
        fontSize: 17.5  
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

})