import React from 'react';
import { Image, StyleSheet,Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.contanierTitulo}>
      <View style={styles.viewTexto1}>
        <Image source={require("./img/Agenda1.png")}
          style = {styles.image3}/>
      </View >
      <View style = {styles.topico3}>
      <Text style={styles.texto2}>
              Parte da Manhã  06:00 a 12:20  Acordo           Escovo os dentes   Tomo café              Assisto aula
          </Text>
          <Image source={require("./img/Dentes.jpg")}
          style = {styles.image}/>
      </View>
      <View style = {styles.topico2}>
          <Text style={styles.texto3}>
          Parte da Tarde   12:20 a 20:00   Almoço             Estudo                 jogo                 Assisto Series
          </Text>
          
          <Image source={require("./img/Tarde.jpg")}
          style = {styles.image}/>
      </View >
      <View style = {styles.topico4}>
          <Text style={styles.texto4}>
          Parte da Noite  20:00 a 00:00  Janta                 Banho                Dormir
          </Text>
        
          
          <Image source={require("./img/Noite.jpg")}
          style = {styles.image2}/>
      </View >
      
    </View>
    
    

    
  );
}

const styles = StyleSheet.create({
  contanierTitulo: {
    paddingHorizontal:24,
    paddingBottom: 0,
    paddingTop:30,
    height:'100%',
    width:'100%',
    backgroundColor: '#87CEFA',
    alignItems: 'center',
    justifyContent: 'space-evenly', 
    flexDirection: 'column',  
  },
  viewTexto1:{
    height: '10%',
    display: 'flex',
    width:'100%',
    borderRadius:10,
    alignContent:'flex-end',
    flexDirection: 'row' , 
    backgroundColor: '#FF0000',
    paddingTop:1,
    paddingRight:50,
    paddingLeft:50,
   },
   image3:{
    height:50,
    width:'100%',

   },
   texto5:{
     fontSize:20,
    paddingBottom:50,

  },
  image: {
    height:140,
    width:'40%',
    borderRadius: 80,

  },
  image2: {
    height:115,
    width:'40%',
    borderRadius: 80,
        
  },
  topico2:{
    paddingTop: 10,
    flexDirection: 'row-reverse' ,
    display: 'flex',
    alignContent:'flex-end',
    backgroundColor: '#F4A460',
    width: '110%',
    height:'28%',
    borderRadius: 40,
  },
  texto2:{
    color: '#3CB371',
    fontSize: 20,
    height:145,
    width:'60%',
    textAlignVertical:'center',
    textAlign:'center',
  },
  texto3:{
    color: '#CD853F',
    fontSize: 20,
    height:190,
    width:'60%',
    textAlignVertical:'center',
    textAlign:'center',
    paddingBottom:50,
  },
  texto4:{
    color: '#F0F8FF',
    fontSize: 20,
    height:120,
    width:'60%',
    textAlignVertical:'center',
    textAlign:'center',
    
  },
  topico3:{
    paddingTop: 10,
    flexDirection: 'row' ,
    display: 'flex',
    alignContent:'flex-end',
    backgroundColor: '#B0E0E6',
    width: '110%',
    height:'30%',
    borderRadius: 40, 
     
  },
  topico4:{
    paddingTop: 2,
    flexDirection: 'row',
    display: 'flex',
    alignContent:'flex-end',
    backgroundColor: '#000000',
    width: '110%',
    height:'22%',
    borderRadius: 40, 
    
     
  },
})
