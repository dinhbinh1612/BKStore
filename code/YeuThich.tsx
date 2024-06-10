import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Menu from './Menu';

const YeuThichScreen = ({ navigation }) => {
  // Danh sách sản phẩm yêu thích (mock data)
  const favorites = [
    { id: '1', name: 'Nike Air Max', price: '$199', image: require('./anh/1.jpg') },
    { id: '2', name: 'Adidas Ultraboost', price: '$179', image: require('./anh/2.jpg') },
    { id: '3', name: 'Puma RS-X', price: '$150', image: require('./anh/3.jpg') },
    { id: '4', name: 'Reebok Classic', price: '$120', image: require('./anh/4.jpg') },
    // Thêm sản phẩm yêu thích khác ở đây
  ];

  // Render mỗi sản phẩm yêu thích
  const renderFavoriteItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}  onPress={()=> navigation.navigate('Specifications')}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={styles.container}>
      <View style={[styles.container,{padding: 20}]}>
        <Text style={styles.title}>Danh sách yêu thích</Text>
        <FlatList
          data={favorites}
          renderItem={renderFavoriteItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <Menu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    alignContent: 'center',
  },
  listContainer: {
    paddingTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 20,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  itemPrice: {
    fontSize: 16,
    color: 'red',
  },
});

export default YeuThichScreen;
