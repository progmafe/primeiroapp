import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

class HomeScreen extends React.Component {

state = {
  data: [
    { id: 0, full_name: 'Imóvel 1', tipo:'Tipo do imóvel: Casa Campolim' },

    { id: 1, full_name: 'Imóvel 2', tipo:'Tipo do imóvel: Casa Condomínio' },
    
    { id: 2, full_name: 'Imóvel 3', tipo:'Tipo do imóvel: Apartamento.' },
    
    { id: 3, full_name: 'Imóvel 4', tipo:'Tipo do imóvel: Chácara' },
    
    { id: 4, full_name: 'Imóvel 5', tipo:'Tipo do imóvel: Sitio' },
    
  ],
};

  renderItem = ({item}) => (
      <View 
      style={{backgroundColor:'#00FF00'}}
      style={styles.listItem}>
        <Text style={styles.text}>{item.full_name} {"\n"} <Text style={styles.text2}>{item.tipo} {"\n"}</Text></Text>

        <Button 
          title="Mais informaçóes"
          color="#000000"
          onPress={() =>
            this.props.navigation.navigate('Imóvel 1')
          }
        />
      </View>
    ); 
  

render() {
  return (
    <FlatList
    style={{ marginTop: 0 }}
    contentContainerStyle={styles.list}
    data={this.state.data}
    renderItem={this.renderItem}
    keyExtractor={item => item.id}

    />
    
  );
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize:25,
    fontFamily:'sans-serif',
    color: '#000000',
    textAlign:'center',
  },

  text2:{
    fontFamily:'sans-serif',
    fontSize:20,
    textAlign:'center'
  },

  list: {
    backgroundColor: '#32CD32',
  },

  listItem: {
    backgroundColor: '#00FF00',
    margin: 8,
    padding: 15,
    borderRadius: 40
  },
  
});

export default HomeScreen;