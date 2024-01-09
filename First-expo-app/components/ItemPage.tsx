import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SearcherFilter } from './SearcherFilter';
import { getData } from '../database';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

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

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = React.useState('');

  const [items, setItems] = React.useState<Item[]>([]);

  const getAllItems = async () => {
    return getData();
  };

  useEffect(() => {
    getAllItems().then((items) => {
      setItems(items);
    });
  }, []);

  const handleItemPress = (item: Item) => {
    navigation.navigate('ItemDescription', { item });
  };

  return (
    <View>
      <Searchbar
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        placeholder="Search" />
      <SearcherFilter
        items={items}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onItemPress={handleItemPress}
      />
    </View>
  );
};
