import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import { Searcher } from './components/ItemPage';

export default function App() {
  

  return (
    <View style={styles.def}>
      <Text>bajo jajo</Text>
      <View style={{padding: 20,}}>
        <Searcher></Searcher>
      </View>
      <View>
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