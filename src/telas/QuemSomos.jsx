import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MembersContext } from '../context/ProdutoContext.jsx';
import styles from '../Styles/style.jsx';

export default function QuemSomosScreen() {
  const { pessoa1, pessoa2 } = useContext(MembersContext);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Membros da dupla:</Text>
      <View style={styles.personContainer}>
        <View style={styles.person}>
          <Text style={styles.personText}>{pessoa1.nome}</Text>
          <Text style={styles.personText}>{pessoa1.rm}</Text>
          <Image source={pessoa1.foto} style={styles.personImage} />
        </View>
        <View style={styles.person}>
          <Text style={styles.personText}>{pessoa2.nome}</Text>
          <Text style={styles.personText}>{pessoa2.rm}</Text>
          <Image source={pessoa2.foto} style={styles.personImage} />
        </View>
      </View>
    </View>
  );
}