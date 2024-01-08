import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import { Item, Searcher } from './components/ItemPage';
import { NavigationContainer } from '@react-navigation/native';
import { ItemDescription } from './components/ItemDescription';
import {NativeStackScreenProps, createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Searcher: undefined;
  ItemDescription: {item: Item} | undefined;
};

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'ItemDescription'>;

function HomeScreen() {
  return (
    <View style={styles.def}>
        <Text>Search for item you want and click on it to see more!</Text>
        <View style={{padding: 20,}}>
          <Searcher></Searcher>
        </View>
      </View>
  );
}

function DetailsScreen(DetailsScreenProps: DetailsScreenProps) {
  console.log(DetailsScreenProps.route.params.item);
  return (
    <View style={styles.def}>
        <View style={{padding: 20,}}>
          <ItemDescription item={DetailsScreenProps.route.params.item}></ItemDescription>
        </View>
      </View>
  );
}

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