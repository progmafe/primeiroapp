import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Imovel1 extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center'}}> 

      <ScrollView>
        
        <View style={{margin:10}}>
          <Image 
            source={require('../images/Casa.png')} 
            style={styles.logo} 
          /> 
        </View>
        
        <View style={styles.container}>      
          <Text style={{fontWeight: "bold"}}>
            Casa (Campolim)
            {"\n"}{"\n"}
          </Text>
          <Text>
            Imóvel de 100 m², com 3 dormitório sendo 1 súite, sala de jantar e de descanso, 3 banheiros, cozinha e área de serviço. Possui garagem coberta para 2 carros.
            {"\n"}{"\n"}
            Localização: Bairro nobre residencial próximo a pista de caminhada do Campolim, acesso a pontos comerciais, farmácias, shopping e etc. A melhor localização de Sorocaba.
            {"\n"}{"\n"} 
            Casa nova já mobiliada e decorada.
            {"\n"}{"\n"}
          </Text>

          <Button
            title="Voltar."
            onPress={() =>
              this.props.navigation.navigate('Home')
            } 
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
      backgroundColor: '#00FF00',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      margin:10,
      height:300
    },
    logo:{
      width: 390,
      height:390,
      resizeMode:'contain',
    }
  });

export default Imovel1;