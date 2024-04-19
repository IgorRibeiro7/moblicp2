import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Styles/style.jsx';

export default function ListarCarrosScreen({ navigation }) {
  const [listaCarros, setListaCarros] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      buscarDados();
    });

    return unsubscribe;
  }, [navigation]);

  async function buscarDados() {
    const carros = await AsyncStorage.getItem('CARROS');
    setListaCarros(JSON.parse(carros) || []);
  }

  return (
    <View style={styles.container}>
      <Text>LISTA DE CARROS</Text>

      <FlatList
        data={listaCarros}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('DeletarCarro', { carro: item })}>
            <Text style={{ fontSize: 18 }}>Marca: {item.marca} Modelo: {item.modelo} Cor: {item.cor}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AdicionarCarro')}>
        <Text style={{ color: 'white' }}>ADICIONAR CARRO</Text>
      </TouchableOpacity>
    </View>
  );
}