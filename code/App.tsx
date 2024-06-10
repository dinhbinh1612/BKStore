import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import YeuThichScreen from './YeuThich';
import LienHeScreen from './LienHe';
import ThongTinScreen from './ThongTin';
import LoginScreen from './Login';
import RegisterScreen from './Register';
import ManHinhChaoScreen from './ManHinhChao';
import CartScreen from './Cart';
import './globalStyles';
import { AuthProvider } from './AuthContext';
import Specifications from './Specifications';



const StackStore = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <StackStore.Navigator screenOptions={{ headerShown: false }}>
          <StackStore.Screen name="ManHinhChaoScreen" component={ManHinhChaoScreen}/>
          <StackStore.Screen name="HomeScreen" component={HomeScreen} />
          <StackStore.Screen name="YeuThichScreen" component={YeuThichScreen} />
          <StackStore.Screen name="LienHeScreen" component={LienHeScreen} />
          <StackStore.Screen name="ThongTinScreen" component={ThongTinScreen} />
          <StackStore.Screen name="LoginScreen" component={LoginScreen} />
          <StackStore.Screen name="RegisterScreen" component={RegisterScreen} />
          <StackStore.Screen name="CartScreen" component={CartScreen} />
          <StackStore.Screen name="Specifications" component={Specifications} />

        </StackStore.Navigator>
      </View>
    </NavigationContainer>
  );
};



export default App;

const st = StyleSheet.create({

});
