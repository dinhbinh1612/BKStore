import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import Menu from './Menu';

const HomeScreen = ({ navigation }) => {
    const slide = [
        { img: require('./anh/banner1.jpg') },
        { img: require('./anh/banner2.jpg') },
        { img: require('./anh/banner3.jpg') },
        { img: require('./anh/banner4.jpg') },
        { img: require('./anh/banner5.jpg') },
        { img: require('./anh/banner6.jpg') },
        { img: require('./anh/banner7.jpg') },
    ];

    const DSG = [
        { id: '1', name: 'Nike Air Max', price: '$199', image: require('./anh/1.jpg') },
        { id: '2', name: 'Adidas Ultraboost', price: '$179', image: require('./anh/2.jpg') },
        { id: '3', name: 'Puma RS-X', price: '$150', image: require('./anh/3.jpg') },
        { id: '4', name: 'Reebok Classic', price: '$120', image: require('./anh/4.jpg') },
        { id: '5', name: 'Nike Air Zoom Pegasus', price: '$130', image: require('./anh/5.jpg') },
        { id: '6', name: 'Adidas Yeezy Boost', price: '$220', image: require('./anh/6.jpg') },
        { id: '7', name: 'Puma Suede Classic', price: '$85', image: require('./anh/7.jpg') },
        { id: '8', name: 'Reebok Nano X', price: '$150', image: require('./anh/8.jpg') },
        { id: '9', name: 'Nike Metcon', price: '$140', image: require('./anh/9.jpg') },
        { id: '10', name: 'Adidas NMD_R1', price: '$130', image: require('./anh/10.jpg') },
        { id: '11', name: 'Puma Future Rider', price: '$95', image: require('./anh/11.jpg') },
        { id: '12', name: 'Reebok Zig Kinetica', price: '$160', image: require('./anh/12.jpg') },
        { id: '13', name: 'Nike React Infinity Run', price: '$160', image: require('./anh/13.jpg') },
        { id: '14', name: 'Nike React Infinity Run', price: '$160', image: require('./anh/1.jpg') },
    ];

    const theLoai = [
        { id: 1, name: 'Adidas', img: require('./anh/logo_adidas.jpg') },
        { id: 2, name: 'Nike', img: require('./anh/logo_nike.jpg') },
        { id: 3, name: 'Converse', img: require('./anh/logo_converse.jpg') },
        { id: 4, name: 'Puma', img: require('./anh/logo_puma.jpg') },
        { id: 5, name: 'Vans', img: require('./anh/logo_vans.jpg') },
        { id: 6, name: 'New Blance', img: require('./anh/logo_new_blance.jpg') },
        { id: 7, name: 'Balenciaga', img: require('./anh/logo_balenciaga.jpg') },
    ];

    const ShowTheLoai = ({ item }) => (
        <TouchableOpacity>
            <View style={st.bg10}>
                <View style={st.bg9}>
                    <Image
                        style={st.img1}
                        source={item.img} />
                </View>
                <Text style={{color:'black'}}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    const ShowGiayTheThao = ({ item }) => (
        <TouchableOpacity onPress={()=> navigation.navigate('Specifications')}>
            <View style={st.bg12}>
                <Image
                    style={st.img2}
                    source={item.image} />
                <Text style={st.txt3}>{item.name}</Text>
                <Text style={st.txt4}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    )

    const ShowGiay = ({ item }) => (
        <TouchableOpacity onPress={()=> navigation.navigate('Specifications')}>
            <View style={st.bg15}>
                <Image
                    style={st.img3}
                    source={item.image} />
                <Text style={st.txt3}>{item.name}</Text>
                <Text style={st.txt4}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <View
            style={st.container}>
            <View style={st.bg1}>
                <Image
                    style={st.img}
                    source={require('./icon/logo.png')} />
                <View style={st.detail1}></View>
                <Text style={st.txt1}>BK Store</Text>
            </View>

            <View style={st.bg4}>
                <View style={st.bg2}>
                    <Image
                        style={st.icon}
                        source={require('./icon/find.png')}
                    />
                    <View style={st.bg3}>
                        <TextInput
                            placeholderTextColor='rgb(181, 181, 181)'
                            placeholder='Tìm kiếm'>
                        </TextInput>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CartScreen')}>
                    <Image
                        style={st.icon2}
                        source={require('./icon/shopping-cart.png')}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView
                style={st.bg5}>
                <View>
                    <Swiper
                        style={st.bg6}
                        showsButtons={false}
                        autoplay={true}
                        autoplayTimeout={2}
                        loop={true}>
                        {slide.map((slide, index) => (
                            <View
                                key={index}
                                style={st.slide}>
                                <Image
                                    source={slide.img}
                                    style={st.banner}
                                />
                            </View>
                        ))}
                    </Swiper>

                    <View style={st.bg7}>
                        <Image
                            style={st.icon}
                            source={require('./icon/location.png')} />
                        <TextInput
                            placeholderTextColor='rgb(181, 181, 181)'
                            placeholder='Giao đến:' />
                    </View>

                    <View style={st.bg8}></View>

                    <View style={st.bg13}>
                        <Text style={st.txt2}>Hãng giày</Text>

                        <FlatList
                            horizontal
                            data={theLoai}
                            renderItem={({ item }) => <ShowTheLoai item={item} />}
                            keyExtractor={item => item.name}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={st.bg11}></View>

                    <View>
                        <Text style={st.txt5}>Giày thể thao</Text>

                        <FlatList
                            horizontal
                            data={DSG}
                            renderItem={({ item }) => <ShowGiayTheThao item={item} />}
                            keyExtractor={item => 'giayTheThao' + item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={st.bg11}></View>

                    <View>
                        <Text style={st.txt5}>Giày chạy bộ</Text>

                        <FlatList
                            horizontal
                            data={DSG}
                            renderItem={({ item }) => <ShowGiayTheThao item={item} />}
                            keyExtractor={item => 'giayChayBo' + item.id}
                            showsHorizontalScrollIndicator={false} />
                    </View>
                    <View style={st.bg11}></View>

                    <View>
                        <Text style={st.txt5}>Giày leo núi</Text>
                        <FlatList
                            horizontal
                            data={DSG}
                            renderItem={({ item }) => <ShowGiayTheThao item={item} />}
                            keyExtractor={item => 'giayLeoNui' + item.id}
                            showsHorizontalScrollIndicator={true}
                        />
                    </View>
                    <View style={st.bg11}></View>
                    <View style={st.bg16}>
                        <Text style={st.txt5}>Giày bán chạy</Text>
                        <ScrollView>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {DSG.map((item) => (
                                    <ShowGiay key={item.id} item={item} />
                                ))}
                            </View>
                        </ScrollView>
                    </View>

                    <View style={st.bg14}></View>
                </View>
            </ScrollView>
            <Menu navigation={navigation} />
        </View>
    )
}

export default HomeScreen

const st = StyleSheet.create({
    bg16: {

    },
    bg15: {
        backgroundColor: 'white',
        width: 160,
        height: 180,
        borderRadius: 5,
        borderColor: 'rgb(211, 224, 224)',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img3: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    bg14: {
        marginBottom: 200,
    },
    bg13: {

        marginTop: 20,
    },
    txt4: {
        color: 'red',
        fontSize: 16,
        fontWeight: '600'
    },
    txt3: {
        color: 'black',
        fontSize: 16,
    },
    img2: {
        height: 200,
        width: 200
    },
    bg12: {
        borderRadius: 5,
        borderColor: 'rgb(211, 224, 224)',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        flex: 1,
    },
    bg11: {
        backgroundColor: 'rgb(210, 217, 217)',
        height: 5,
        marginTop: 10,
    },
    bg10: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    img1: {
        width: 70,
        height: 40,
    },
    bg9: {
        borderRadius: 5,
        padding: 20,
        borderWidth: 1,
        borderColor: 'rgb(211, 224, 224)',
        margin: 5,
    },
    txt5: {
        padding: 10,
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
    },
    txt2: {
        padding: 10,
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
        marginTop: -15
    },
    bg8: {
        backgroundColor: 'rgb(210, 217, 217)',
        height: 5,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    img: {
        width: 40,
        height: 40,
        margin: 5,
    },
    bg1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txt1: {
        fontSize: 27,
        color: 'black',
        fontWeight: '500',
        marginLeft: 5,
    },
    detail1: {
        height: '60%',
        width: 1,
        backgroundColor: 'gray',
        marginHorizontal: 10,
    },
    bg2: {
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
        margin: 10,
        height: 38,
    },
    icon: {
        width: 21,
        height: 21,
        margin: 5,
    },
    icon2: {
        width: 30,
        height: 30,
        margin: 5,
        marginBottom: 10,
    },
    bg3: {
        flex: 1,
    },
    bg4: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    banner: {
        width: 320,
        height: 180,
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg5: {
        flex: 1,

    },
    bg6: {
        height: 220,
    },
    bg7: {
        marginLeft: 9,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -30,
    }
})