import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
const link_api = 'https://6659f2fbde346625136e87b6.mockapi.io/api/77/users'
import { AuthProvider } from './AuthContext';


const LoginScreen = ({ navigation }) => {
  const [show, setShow] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin');
      return;
    }
    fetch('http://192.168.1.155:3000/users')
      .then(response => response.json())
      .then(data => {
        const user = data.find(u => u.username === username && u.password === password);
        if (user) {
          Alert.alert('Chúc mừng', 'Đăng nhập thành công', [
            {
              text: 'OK',
              onPress: () => navigation.navigate('HomeScreen'),
            },
          ]);
        } else {
          Alert.alert('Lỗi', 'Vui lòng kiểm tra lại thông tin');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        Alert.alert('Đã xảy ra lỗi, vui lòng thử lại sau');
      });
  };

  return (
    <View style={st.container}>
      <View style={st.viewImg}>
        <Image source={require('./anh/logo.jpg')} style={st.img} />
        <Text style={st.text1}>Đăng Nhập</Text>
      </View>

      <TextInput
        style={st.input}
        placeholder='Nhập username'
        placeholderTextColor={'rgb(181, 181, 181)'}
        value={username}
        onChangeText={setUsername}
      />

      <View style={st.passwordContainer}>
        <TextInput
          style={st.inputPassword}
          placeholder='Nhập password'
          placeholderTextColor={'rgb(181, 181, 181)'}
          secureTextEntry={show}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Image
            style={st.imgIcon}
            source={show ? require('./icon/eye.png') : require('./icon/visible.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={st.btn}>
        <TouchableOpacity
          style={st.loginbtn2}
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          <Text style={st.loginBtnText}>Đăng ký</Text>
        </TouchableOpacity>

        <TouchableOpacity style={st.loginbtn} onPress={handleLogin}>
          <Text style={st.loginBtnText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>

      <View style={st.mk1}>
        <Text style={st.txt3}>Quên mật khẩu?</Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <View style={st.bg1}>
          <View style={st.detail1}></View>
          <Text style={{ color: 'rgb(181, 181, 181)' }}>Hoặc tiếp tục bằng</Text>
          <View style={st.detail1}></View>
        </View>
        <View style={st.bg1}>
          <Image style={st.icon1} source={require('./icon/facebook.png')} />
          <Image style={st.icon1} source={require('./icon/google.png')} />
        </View>
      </View>
    </View>

  );
};

export default LoginScreen;

const st = StyleSheet.create({
  icon1: {
    borderRadius: 100,
    borderWidth: 1,
    width: 40,
    height: 40,
    margin: 20
  },
  detail1: {
    backgroundColor: 'rgb(210, 217, 217)',
    width: 80,
    height: 1,
    margin: 20,
  },
  bg1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgIcon: {
    width: 30,
    height: 30,
    margin: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  img: {
    width: 200,
    height: 200,
  },
  viewImg: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 35,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    color: 'black'
  },
  btn: {
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: '95%',
    marginLeft: 10,
    marginTop: 10,
  },
  inputPassword: {
    flex: 1,
    color: 'black'
  },
  loginbtn: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '50%',
    alignItems: 'center',
    marginLeft: 10,
  },
  loginBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginbtn2: {
    backgroundColor: 'rgb(186, 217, 76)',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '50%',
    alignItems: 'center',
  },
  txt3: {
    fontSize: 12,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    color: 'black'
  },
  mk1: {
    marginTop: 20,
    alignItems: 'center',
  }
});
