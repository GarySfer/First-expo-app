import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Item, Searcher } from '../components/ItemPage';
import { ItemDescription } from '../components/ItemDescription';
import {NativeStackScreenProps, createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'ItemDescription'>;

export function DetailsScreen(DetailsScreenProps: DetailsScreenProps) {
    console.log(DetailsScreenProps.route.params.item);
    return (
      <View style={styles.def}>
          <View style={{padding: 20,}}>
            <ItemDescription item={DetailsScreenProps.route.params.item}></ItemDescription>
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