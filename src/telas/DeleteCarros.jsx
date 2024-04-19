import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Styles/style.jsx';

export default function deletarCarrosScreen({ route, navigation }) {
  const { carro } = route.params;

  async function deletarCarro() {
    let carros = await AsyncStorage.getItem('CARROS');
    carros = JSON.parse(carros).filter((item) => item.marca !== carro.marca);
    await AsyncStorage.setItem('CARROS', JSON.stringify(carros));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text>EXCLUIR CARRO</Text>
      <Text style={{ fontSize: 18 }}>MARCA: {carro.marca}</Text>
      <Text style={{ fontSize: 18 }}>MODELO: {carro.modelo}</Text>
      <Text style={{ fontSize: 18 }}>COR: {carro.cor}</Text>

      <TouchableOpacity style={styles.btnDelete} onPress={deletarCarro}>
        <Text style={{ color: 'white' }}>EXCLUIR</Text>
      </TouchableOpacity>
    </View>
  );
}