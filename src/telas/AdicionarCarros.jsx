import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Styles/style.jsx';

export default function adicionarCarrosScreen({ navigation }) {
  const [marcaCarro, setMarcaCarro] = useState('');
  const [modeloCarro, setModeloCarro] = useState('');
  const [corCarro, setCorCarro] = useState('');

  async function salvar() {
    if (!marcaCarro.trim() || !modeloCarro.trim() || !corCarro.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    let carros = [];
    if (await AsyncStorage.getItem('CARROS') !== null) {
      carros = JSON.parse(await AsyncStorage.getItem('CARROS'));
    }

    carros.push({ marca: marcaCarro, modelo: modeloCarro, cor: corCarro });

    await AsyncStorage.setItem('CARROS', JSON.stringify(carros));
    alert('CARRO SALVO');
    setMarcaCarro('');
    setModeloCarro('');
    setCorCarro('');
  }

  return (
    <View style={styles.formContainer}>
      <Text>CADASTRO DE CARROS </Text>
   
      <TextInput
        style={styles.input}
        placeholder="Marca do Carro"
        value={marcaCarro}
        onChangeText={text => setMarcaCarro(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={modeloCarro}
        onChangeText={text => setModeloCarro(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cor"
        value={corCarro}
        onChangeText={text => setCorCarro(text)}
      />

      <TouchableOpacity style={styles.formBtn} onPress={salvar}>
        <Text style={{ color: 'white' }}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ListarCarros')}>
        <Text style={{ color: 'white' }}>VER CARROS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnAbout} onPress={() => navigation.navigate('QuemSomos')}>
        <Text style={{ color: 'white' }}>QUEM SOMOS</Text>
      </TouchableOpacity>
    </View>
  );
}