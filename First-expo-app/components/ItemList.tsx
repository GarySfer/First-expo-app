import * as React from 'react';
import { Text, View } from 'react-native';
import { Item } from './ItemPage';

export function ItemList(props: {list: Item[]}) {
    return (
        <View>
          {props.list.map((item) => (
            <View key={item._id}>
              <Text>{[item.itemName, ': ', item.description]}</Text>
            </View>
          ))}
        </View>
      );
    }