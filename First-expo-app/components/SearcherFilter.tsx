import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import React from 'react';

export const SearcherFilter = ({ items, searchQuery, setSearchQuery, onItemPress }) => {
    return (
        <View>
            <FlatList
                data={items}
                renderItem={({ item }) => {
                    if (searchQuery === "") {
                        return (
                            <TouchableOpacity style={styles.itemContainer} onPress={() => onItemPress(item)}>
                                <Text style={styles.item}>{item.itemName}</Text>
                                <Image style={styles.itemImage} source={{ uri: item.itemImage }} />
                            </TouchableOpacity>
                        )
                    }

                    if (item.itemName.toLowerCase().includes(searchQuery.toLowerCase())) {
                        return (
                            <TouchableOpacity style={styles.itemContainer} onPress={() => onItemPress(item)}>
                                <Text style={styles.item}>{item.itemName}</Text>
                                <Image style={styles.itemImage} source={{ uri: item.itemImage }} />
                            </TouchableOpacity>
                        )
                    }
                }}
            />
        </View>
    )
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
