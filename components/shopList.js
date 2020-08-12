import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';

import { getProducts } from '../mocks/contentApi';

export default function ShopList({ navigation }) {
    const [people, setPeople] = useState([
        { name: 'shaun', key: '1' },
        { name: 'yoshi', key: '2' },
        { name: 'mario', key: '3' }
    ]);

    const pressHandler = (id) => {
        console.log(id);
        navigation.navigate('ProductDetails', { id: id });
    }

    const getImage = (path) => { 
        switch(path) {
            case 'bottle1.jpg':
                return require('../assets/bottle1.jpg');
            case 'bottle2.jpg':
                return require('../assets/bottle2.jpg');
            case 'queijo.jpg':
                return require('../assets/queijo.jpg');
        }
        
    }    

    return (
            <FlatList 
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={getProducts()}
                renderItem={
                    ({item}) => (
                        <View style={styles.card}>
                            <View style={styles.cardContent}>
                                <TouchableOpacity onPress={() => pressHandler(item.id)}>
                                    <View style={styles.imageContainer}>
                                        <Image
                                            style={styles.bottle}
                                            source={ getImage(item.image) }
                                        ></Image>
                                    </View>
                                    <View style={styles.infoContainer}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.price}>{item.price}</Text>
                                        <Text style={styles.description}>{item.description}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }
            />
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6      
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 24,
        color: '#007bff',
    },
    bottle: {
        width: 150,
        height: 150        
    },
    price: {
        fontWeight: 'bold'
    },
    description: {
    }
  });
  