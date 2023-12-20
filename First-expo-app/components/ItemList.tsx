import * as React from 'react';
import { Item } from '../ItemPage';
import { Text, View } from 'react-native';

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