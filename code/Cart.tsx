import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';

const CartScreen = ({ navigation }) => {
    const [cartItems, setCartItems] = useState([
        { id: '1', name: 'Nike Air Max', price: 199, image: require('./anh/1.jpg'), checked: false },
        { id: '2', name: 'Adidas Ultraboost', price: 179, image: require('./anh/2.jpg'), checked: false },
        { id: '3', name: 'Puma RS-X', price: 150, image: require('./anh/3.jpg'), checked: false },
    ]);

    const handleCheckBoxChange = (id) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setCartItems(updatedItems);
    };

    const renderItem = ({ item }) => (
        <View style={styles.container1}>
            <View style={styles.itemContainer}>
                    <Image source={item.image} style={styles.itemImage} />
                    <View style={styles.itemInfo}>
                        <Text style={{ color: 'black' }}>{item.name}</Text>
                        <Text style={{ color: 'red' }}>${item.price}</Text>
                    </View>
                <CheckBox
                    tintColors={{ true: 'green', false: 'black' }}
                    value={item.checked}
                    onValueChange={() => handleCheckBoxChange(item.id)}
                />
            </View>
        </View>
    );

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => (item.checked ? total + item.price : total), 0);
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => navigation.goBack()}>
                    <Image style={{ height: 30, width: 30 }} source={require('./icon/back.png')} />
                </TouchableOpacity>
                <View style={{ flex: 1, marginRight: 30 }}>
                    <Text style={styles.txt1}>Giỏ hàng</Text>
                </View>
            </View>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            <View style={styles.totalContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.totalText}>Tổng Tiền:</Text>
                    <Text style={{ color: 'red', fontWeight: '700', fontSize: 18 }}>${getTotalPrice()}</Text>
                </View>
                <TouchableOpacity style={styles.checkoutButton}>
                    <Text style={styles.checkoutText}>Thanh Toán</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container1: {
        borderWidth: 1,
        borderColor: 'rgb(204, 204, 204)',
        borderRadius: 5,
        padding: 5,
        alignItems: 'center',
        margin: 5,
    },
    txt1: { textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: 'black', marginBottom: 30 },
    container: { flex: 1, padding: 10 },
    itemContainer: { flexDirection: 'row', alignItems: 'center' },
    itemImage: { width: 50, height: 50, marginRight: 10, borderRadius: 5, borderWidth: 1, borderColor: 'rgb(214, 214, 214)' },
    itemInfo: { flex: 1, justifyContent: 'center' },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginRight: 10,
    },
    checkoutButton: { backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 },
    checkoutText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default CartScreen;
