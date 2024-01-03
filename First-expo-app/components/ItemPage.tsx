import React, { useEffect } from 'react';
import { View } from 'react-native';
import { TextInput, Searchbar } from 'react-native-paper';
import { SearcherFilter } from './SearcherFilter';
import { getData } from '../database';

export type Item = {
  _id: string;
  itemName: string;
  color: string;
  description: string;
  cooldown: string;
  stackType: string;
  rarity?: string;
  itemImage: string;
};

export type ItemApiResponse = {
  results: { array: Item };
};

export const Searcher = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  console.log(searchQuery);

  const [items, setItems] = React.useState<Item[]>([]);

  const getAllItems = async () => {
          return getData();
  };

  useEffect(() => {
    getAllItems().then((items) => {
        setItems(items);
        console.log(items);
    });
}, []);

  return (
    <View>
      <Searchbar
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        placeholder="Search" />
      <SearcherFilter items={items} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      </View>
  );
};
