import React from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, View, ImageBackground} from 'react-native';


class LoginScreen extends React.Component {

    state={
        email:"",
        password:""
    }
    
    login_click = () => {
        if(this.state.email == "Email@email.com" && this.state.password == "123")
        this.props.navigation.navigate('Home')
        else alert('Email ou senha, incorretos!')
    }

     
    render(){
    return(
        <View style={styles.keyboard}>
            <View>
               <Text style={styles.title}>Techrabbit Imóveis</Text>
                <TextInput
                style={styles.input1}
                placeholder="E-mail"
                autoCorrect={false}
                onChangeText={text => this.setState({email:text})}
                />

                <TextInput
                style={styles.input1}
                placeholder="Senha"
                autoCorrect={false}
                secureTextEntry
                onChangeText={text => this.setState({password:text})}
                />

                <TouchableOpacity
                style={styles.touch} 
                onPress={this.login_click}
                >
                    <Text style={styles.texto}>Entrar</Text> 
                </TouchableOpacity>
            </View>
        </View>
    );
}}



const styles = StyleSheet.create({
    title:{
        fontWeight:"bold",
        fontSize:40,
        color:"#000000",
        alignItems: 'center',
        marginBottom:10,
        paddingHorizontal: 100
    }, 
    texto: {
      fontSize: 18,
      color:'#FFFAFA',
      alignItems: 'center',
      paddingHorizontal: 15
    },
    keyboard:{
        flex:1,  
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00FF00',
    },
    input1:{
        color: '#FFFAFA',
        margin: 10,
        height: 55, 
        width: 400,
        borderColor: '#000000',
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#000000', 
        borderRadius: 20
    },
    touch:{
        backgroundColor: '#000000',
        borderRadius: 30,
        width: 120,
        padding: 15,
        marginHorizontal: 150
    }
  });

export default LoginScreen;