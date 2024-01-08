import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Item, Searcher } from '../components/ItemPage';

export function HomeScreen() {
    return (
      <View style={styles.def}>
          <Text>Search for item you want and click on it to see more!</Text>
          <View style={{padding: 20,}}>
            <Searcher></Searcher>
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