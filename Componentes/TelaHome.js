import React from 'react';
import { Button, Text, View } from 'react-native';
import estilo from './styles';

export default function TelaHome (props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Tela inicial
      </Text>

      <Text style={estilo.texto}>
        Toque nos botões abaixo para navegar pelas rotas do aplicativo
      </Text>
      
      <View style={estilo.buttonBox}>
        <Button 
          title="Tela Contato" 
          onPress={ ()=> { props.navigation.navigate('Contato') } } 
        />
      </View>

      <View style={estilo.buttonBox}>
        <Button 
          title="Tela Sobre" 
          onPress={ ()=> { props.navigation.navigate('Sobre') } } 
        />
      </View>
    </View>
  );
}