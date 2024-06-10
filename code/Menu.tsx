import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={{ height: 70, marginTop: 'auto', backgroundColor: 'white' }}>
      <View style={[styles.detail]}></View>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image style={styles.icon} source={require('./icon/home.png')} />
          <Text style={{ textAlign: 'center', color:'black' }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('YeuThichScreen')}>
          <Image style={styles.icon} source={require('./icon/love.png')} />
          <Text style={{ textAlign: 'center', color:'black' }}>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LienHeScreen')}>
          <Image style={[styles.icon, { marginLeft: 15 }]} source={require('./icon/messengers.png')} />
          <Text style={{ textAlign: 'center', color:'black' }}>Messenger</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ThongTinScreen')}>
          <Image style={styles.icon} source={require('./icon/users.png')} />
          <Text style={{ textAlign: 'center', color:'black' }}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  detail: {
    backgroundColor: 'rgb(214, 214, 214)',
    height: 1,
  },
  menu: {
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 36,
    height: 36,
  },
});
