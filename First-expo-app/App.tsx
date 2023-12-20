import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import { Searcher } from './components/Searcher';
import { ItemPage } from './ItemPage';

export default function App() {
  

  return (
    <View style={styles.def}>
      <Text>bajo jajo</Text>
      <View style={{padding: 20,}}>
        <Searcher></Searcher>
      </View>
      <View>
        <ItemPage></ItemPage>
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