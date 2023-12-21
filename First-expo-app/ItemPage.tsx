import React, { useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { ItemList } from './components/ItemList';
import { getData } from './database';

// [{"_id":"63d9f34f6d08bb0acd07dae4","itemName":"Armor-Piercing Rounds","color":"White","description":"Deal an addition 20% damage(+20% per stack) to bosses","cooldown":"none","stackType":"Linear","rarity":"Common","itemImage":"https://res.cloudinary.com/morgancrawfordweb/image/upload/v1675211977/riskofrain/Armor-Piercing_Rounds_piabli.webp"},]

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

export function ItemPage() {
    const [items, setItems] = React.useState<Item[]>([]);
    const [name, setName] = React.useState('');

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
        <View style={styles.container}>
      <ScrollView>
        <View>
          {items.map((item) => {
            return (
              <View style={styles.itemContainer}>
                <Text style={styles.item}>{[item.itemName]}</Text>
                <Image style={styles.itemImage} source={{uri: item.itemImage}} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>

    );
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
});