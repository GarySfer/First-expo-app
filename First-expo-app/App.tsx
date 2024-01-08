import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import { Item, Searcher } from './components/ItemPage';
import { NavigationContainer } from '@react-navigation/native';
import { ItemDescription } from './components/ItemDescription';
import {NativeStackScreenProps, createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './routes/HomeScreen';
import { DetailsScreen } from './routes/DetailsScreen';

export type RootStackParamList = {
  Searcher: undefined;
  ItemDescription: {item: Item} | undefined;
};


const Stack = createNativeStackNavigator()

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Searcher" component={HomeScreen} />
        <Stack.Screen name="ItemDescription" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  def: {
    flex: 1,
    alignItems: 'center',
  }

});