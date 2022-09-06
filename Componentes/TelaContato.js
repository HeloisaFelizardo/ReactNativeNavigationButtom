import React from 'react';
import { Text, View, Button } from 'react-native';
import estilo from './styles';

export default function TelaContato (props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Tela de contato
      </Text>

      <View style={estilo.buttonBox}>
        <Button title="Tela inicial" onPress={ ()=> { props.navigation.navigate('Tela inicial')} } />
      </View>
    </View>
  );
}