import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const ItemDescription = ({ item }) => {

    

    return (<View>
      <Text>{item.itemName}</Text>
      <Text>{item.description}</Text>
      <Text>{item.cooldown}</Text>
      <Text>{item.stackType}</Text>
      <Text>{item.rarity}</Text>
      <Image style={styles.itemImage} source={{ uri: item.itemImage }}/>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    itemImage: {
        width: 50,
        height: 50,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})