import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Menu from './Menu'



const ThongTinScreen = ({ navigation }) => {

  const HandleLogOut = () => {
    Alert.alert('Xác nhận', 'Bạn có chắc chắn muốn đăng xuất?',
      [
        {
          text: 'Hủy bỏ',
          onPress: () => console.log('Hủy bỏ'),
          style: 'cancel',
        },
        {
          text: 'Đăng xuất',
          onPress: () => navigation.navigate('LoginScreen'),
        },
      ],
      { cancelable: false }
    );
  };


  return (
    <View style={st.container}>
      <ScrollView style={st.container}>
        <View style={st.bg2}>
          <View style={st.bg1}>
            <Text style={st.txt1}>Tài khoản</Text>
            <View style={st.view1}>
              <TouchableOpacity>
                <Image
                  style={[st.icon, { marginRight: 30 }]}
                  source={require('./icon/setting.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                <Image
                  style={[st.icon, { marginRight: 30 }]}
                  source={require('./icon/shopping-cart.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('LienHeScreen')}>
                <Image
                  style={st.icon}
                  source={require('./icon/bubble-chat.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={st.bg3}>
            <Image
              style={st.anh}
              source={require('./icon/user.png')} />

            <View style={st.view2}>
              <Text style={st.txt2}>Chào mừng bạn đến với BK Store</Text>
              <TouchableOpacity style={st.button} onPress={() => navigation.navigate('LoginScreen')}>
                <Text>Đăng nhập/Đăng ký</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ height: 5, backgroundColor: 'rgb(227, 227, 227)' }}></View>

        <View>
          <Text style={[st.txt3, { marginTop: 5 }]}>Đơn hàng của tôi</Text>
          <ScrollView horizontal
            showsHorizontalScrollIndicator={false}>
            <View style={st.view3}>
              <View style={{ width: 70, margin: 10 }}>
                <TouchableOpacity>
                  <View style={st.view4}>
                    <Image
                      style={{ width: 40, height: 40, }}
                      source={require('./icon/wallet.png')} />
                  </View>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', color: 'black' }}>Chờ thanh toán</Text>
              </View>
              <View style={{ width: 70, margin: 10 }}>
                <TouchableOpacity>
                  <View style={st.view4}>
                    <Image
                      style={{ width: 40, height: 40, }}
                      source={require('./icon/diskette.png')} />
                  </View>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', color: 'black' }}>Đang xử lý</Text>
              </View>
              <View style={{ width: 70, margin: 10 }}>
                <TouchableOpacity>
                  <View style={st.view4}>
                    <Image
                      style={{ width: 40, height: 40, }}
                      source={require('./icon/running.png')} />
                  </View>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', color: 'black' }}>Đang vận chuyển</Text>
              </View>
              <View style={{ width: 70, margin: 10 }}>
                <TouchableOpacity>
                  <View style={st.view4}>
                    <Image
                      style={{ width: 40, height: 40, }}
                      source={require('./icon/save.png')} />
                  </View>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', color: 'black' }}>Đã giao</Text>
              </View>
              <View style={{ width: 70, margin: 10 }}>
                <TouchableOpacity>
                  <View style={st.view4}>
                    <Image
                      style={{ width: 40, height: 40, }}
                      source={require('./icon/refresh.png')} />
                  </View>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', color: 'black' }}>Lịch sử mua hàng</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={{ height: 5, backgroundColor: 'rgb(227, 227, 227)' }}></View>

        <View>
          <Text style={[st.txt3, { marginTop: 5 }]}>Thông tin tài khoản</Text>
          <View style={[st.view5, { marginTop: 20 }]}>
            <Text style={{ color: 'black', }}>Tài khoản: </Text>
            <Text></Text>
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
              <Image
                style={[st.icon, { marginLeft: 'auto' }]}
                source={require('./icon/next.png')} />
            </TouchableOpacity>
          </View>
          <View style={[st.view5, { marginTop: 10 }]}>
            <Text style={{ color: 'black', }}>Họ tên: </Text>
            <Text></Text>
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
              <Image
                style={[st.icon, { marginLeft: 'auto' }]}
                source={require('./icon/next.png')} />
            </TouchableOpacity>
          </View>
          <View style={[st.view5, { marginTop: 10 }]}>
            <Text style={{ color: 'black', }}>Số điện thoại: </Text>
            <Text></Text>
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
              <Image
                style={[st.icon, { marginLeft: 'auto' }]}
                source={require('./icon/next.png')} />
            </TouchableOpacity>
          </View>
          <View style={[st.view5, { marginTop: 10 }]}>
            <Text style={{ color: 'black', }}>Email: </Text>
            <Text></Text>
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
              <Image
                style={[st.icon, { marginLeft: 'auto' }]}
                source={require('./icon/next.png')} />
            </TouchableOpacity>
          </View>
          <View style={[st.view5, { marginTop: 10 }]}>
            <Text style={{ color: 'black', }}>Địa chỉ: </Text>
            <Text></Text>
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
              <Image
                style={[st.icon, { marginLeft: 'auto' }]}
                source={require('./icon/next.png')} />
            </TouchableOpacity>
          </View>
          <View style={[st.view5, { marginTop: 10 }]}>
            <Text style={{ color: 'black', }}>Mật khẩu: </Text>
            <Text></Text>
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
              <Image
                style={[st.icon,]}
                source={require('./icon/next.png')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={HandleLogOut}
            style={[st.btn, { marginTop: 50 }]}>
            <Text style={{ textAlign: 'center', color: 'black' }}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Menu navigation={navigation} />
    </View>
  )
}

export default ThongTinScreen

const st = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  view5: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  view4: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },
  view3: {
    marginTop: 10,
    flexDirection: 'row',
  },
  txt3: {
    padding: 5,
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    width: 135,
    marginTop: 5
  },
  view2: {
    marginLeft: 10,
  },
  txt2: {
    color: 'black',
    fontWeight: '500',
  },
  anh: {
    width: 50,
    height: 50,
  },
  bg3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
  bg2: {
    backgroundColor: 'rgb(113, 212, 95)',
    height: 120,
  },
  view1: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',

  },
  icon: {
    width: 20,
    height: 20,
  },
  txt1: {
    color: 'black',
    fontWeight: '600',
  },
  bg1: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  container: {
    flex: 1,
  }
})