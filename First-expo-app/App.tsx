import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import { Searcher } from './components/Searcher';
import { ItemList } from './components/ItemList';

export default function App() {
  return (
    <View style={styles.def}>
      <Text>bajo jajo</Text>
      <View style={{padding: 20,}}>
        <Searcher></Searcher>
      </View>
      <View>
        <ItemList></ItemList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  def: {
    flex: 1,
    alignItems: 'center',
  }

});