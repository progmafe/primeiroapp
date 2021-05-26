import React from 'react';
import { StyleSheet, Text, View, Button, Image, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Imovel1 extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center',}}> 
      
      <ScrollView>
        
        <View style={{alignItems:'center'}}>
          <Image 
            source={require('../images/Casa.png')} 
            style={styles.logo} 
          /> 
        </View>
        
        <View style={styles.container}>      
          <Text style={{fontWeight: "bold", fontSize:25,}}>
            Casa Campolim
            {"\n"}
          </Text>
          <Text style={{fontSize:17, textAlign:'center'}}>
            Imóvel de 100 m², com 3 dormitório sendo 1 súite, sala de jantar e de descanso, 3 banheiros, cozinha e área de serviço.
            Possui garagem coberta para 2 carros.
            Localização: Bairro nobre residencial próximo a pista de caminhada do Campolim, acesso a pontos comerciais, farmácias, shopping e etc. A melhor localização de Sorocaba. Casa nova já mobiliada e decorada.
            {"\n"}
          </Text>

          <Button title="Voltar" color="#000000" onPress={() =>this.props.navigation.navigate('Home')} 
          />
        </View>
      
      </ScrollView>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: '#00FF00',
      alignItems: 'center',
      margin:10,
      height:350,
      justifyContent: 'center'
    
    },
    logo:{
      width: 350,
      height:350,
      margin:10,
      alignItems:'center',
      justifyContent: 'center'
    },
   
   
  }
  );

export default Imovel1;