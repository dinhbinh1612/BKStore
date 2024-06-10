import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Menu from './Menu';
import './globalStyles';


const LienHeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <TouchableOpacity style={{ marginRight: 'auto' }} onPress={() => navigation.goBack()}>
          <Image style={{ height: 30, width: 30 }} source={require('./icon/back.png')} />
        </TouchableOpacity>
        <View style={{ flex: 1, marginRight: 30 }}>
          <Text style={styles.txt1}>Liên Hệ</Text>
        </View>
      </View>
      <View style={[styles.container, { padding: 20 }]}>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Họ và tên"
            placeholderTextColor={'rgb(181, 181, 181)'}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'rgb(181, 181, 181)'}
          />
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Nội dung"
            placeholderTextColor={'rgb(181, 181, 181)'}
            multiline
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Gửi</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Menu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  txt1: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 30,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: 'black'
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LienHeScreen;
