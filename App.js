import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MembersContext, pessoa1, pessoa2 } from './src/context/ProdutoContext.jsx';
import AdicionarCarrosScreen from './src/telas/AdicionarCarros.jsx';
import ListarCarrosScreen from './src/telas/ListarCarros.jsx';
import QuemSomosScreen from './src/telas/QuemSomos.jsx';
import DeletarCarroScreen from './src/telas/DeleteCarros.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MembersContext.Provider value={{ pessoa1, pessoa2 }}>
        <Stack.Navigator initialRouteName="AdicionarCarro">
          <Stack.Screen name="AdicionarCarro" component={AdicionarCarrosScreen} />
          <Stack.Screen name="ListarCarros" component={ListarCarrosScreen} />
          <Stack.Screen name="DeletarCarro" component={DeletarCarroScreen} />
          <Stack.Screen name="QuemSomos" component={QuemSomosScreen} />
        </Stack.Navigator>
      </MembersContext.Provider>
    </NavigationContainer>
  );
}
