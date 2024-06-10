import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [isShow, setIsShow] = useState(true);
  const [show, setShow] = useState(true);
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!fullName || !address || !phone || !username || !password) {
      Alert.alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    // http://192.168.1.155:3000/users  // nhà 1
    // http://192.168.1.36:3000/users    // nhà 2
    // http://10.24.3.229:3000/users     // trường
    const response = await fetch('http://192.168.1.155:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, address, phone, username, password })
    }
    )
    if (response.ok) {
      Alert.alert('Chúc Mừng', 'Bạn đã đăng ký thành công');
    } else {
      Alert.alert('Rất Tiếc', 'Vui Lòng kiểm tra lại thông tin');
    }
  }

  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white' }}>

      </View>
      <View style={st.inner}>
        <TouchableOpacity style={{ marginRight: 'auto', margin: 10 }} onPress={() => navigation.goBack()}>
          <Image style={{ height: 30, width: 30 }} source={require('./icon/back.png')} />
        </TouchableOpacity>
        <Image
          style={st.logo}
          source={require('./anh/logo.jpg')}
        />
        <Text style={st.txt1}>Full Name</Text>
        <TextInput
          placeholder='Nhập thông tin'
          placeholderTextColor={'rgb(181, 181, 181)'}
          style={st.input}
          onChangeText={setFullName}
          value={fullName}
        />
        <Text style={st.txt1}>Địa Chỉ</Text>
        <TextInput
          placeholder='Địa Chỉ'
          placeholderTextColor={'rgb(181, 181, 181)'}
          style={st.input}
          onChangeText={setAddress}
          value={address}
        />
        <Text style={st.txt1}>Số điện thoại</Text>
        <TextInput
          placeholder='Nhập số điện thoại'
          placeholderTextColor={'rgb(181, 181, 181)'}
          style={st.input}
          onChangeText={setPhone}
          value={phone}
        />
        <Text style={st.txt1}>Tài khoản</Text>
        <TextInput
          placeholder='Nhập tài khoản'
          placeholderTextColor={'rgb(181, 181, 181)'}
          style={st.input}
          onChangeText={setUsername}
          value={username}

        />
        <Text style={st.txt1}>Password</Text>
        <View style={st.passwordContainer}>
          <TextInput
            placeholder='Nhập password'
            placeholderTextColor={'rgb(181, 181, 181)'}
            style={st.inputPassword}
            secureTextEntry={isShow}
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity
            style={st.toggleButton}
            onPress={() => setIsShow(!isShow)}
          >
            <Image
              style={st.imgIcon}
              source={isShow ? require('./icon/eye.png') : require('./icon/visible.png')} />
          </TouchableOpacity>
        </View>
        <Text style={st.txt1}>RePassword</Text>
        <View style={st.passwordContainer}>
          <TextInput
            placeholder='Nhập lại password'
            placeholderTextColor={'rgb(181, 181, 181)'}
            style={st.inputPassword}
            secureTextEntry={show}
          />
          <TouchableOpacity
            style={st.toggleButton}
            onPress={() => setShow(!show)}
          >
            <Image
              style={st.imgIcon}
              source={show ? require('./icon/eye.png') : require('./icon/visible.png')} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={st.signupButton}
          onPress={handleSignUp}
        >
          <Text style={st.signupButtonText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 50 }}></View>

    </ScrollView>
  );
};

export default RegisterScreen;

const st = StyleSheet.create({
  imgIcon: {
    width: 30,
    height: 30,
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  inner: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    margin: 5,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 30,
    width: 180,
    height: 180,
  },
  txt1: {
    fontSize: 16,
    marginLeft: 12,
    marginTop: 10,
    color: 'black'
  },
  input: {
    height: 50,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: '95%',
    marginLeft: 10,
    padding: 10,
    marginTop: 5,
    color:'black',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: '95%',
    marginLeft: 10,
  },
  inputPassword: {
    flex: 1,
    color: 'black'
  },
  toggleButton: {
    marginRight: 10,
  },
  signupButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
    width: '95%',
    marginLeft: 10,
    alignItems: 'center',
  },
  signupButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
