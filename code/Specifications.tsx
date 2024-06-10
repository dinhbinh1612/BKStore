import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';

const Specifications = ({ navigation }) => {
    const [imgIndex, setImgIndex] = useState(0);
    const img = [
        require('./anh/12.jpg'),
        require('./anh/2.jpg'),
        require('./anh/3.jpg'),
        require('./anh/9.jpg'),
        require('./anh/5.jpg'),
        require('./anh/6.jpg'),
        require('./anh/5.jpg'),
    ];

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / Dimensions.get('window').width);
        setImgIndex(index);
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={{ height: 250 }}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    scrollEventThrottle={200}
                >
                    {img.map((image, index) => (
                        <View key={index} style={styles.slide}>
                            <Image
                                source={image}
                                style={styles.img}
                                resizeMode='cover'
                            />
                            <Text style={styles.pageNumber}>{index + 1}/{img.length}</Text>
                        </View>
                    ))}
                </ScrollView>
                <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                    <Image
                        style={styles.icon}
                        source={require('./icon/back.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('CartScreen')}>
                    <Image
                        style={styles.icon}
                        source={require('./icon/shopping-cart.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingButton} onPress={() => navigation.navigate('ThongTinScreen')}>
                    <Image
                        style={styles.icon}
                        source={require('./icon/setting.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoButton} onPress={() => navigation.navigate('HomeScreen')}>
                    <Image
                        style={styles.icon1}
                        source={require('./icon/logo.png')}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.detailsContainer}>
                <Text style={styles.productTitle}>GIÀY NIKE AIR ZOOM TR 1 - TRẮNG ĐEN</Text>
                <Text style={styles.productPrice}>1.500.000 VND</Text>
                <Text style={styles.infoTitle}>Mô tả chi tiết: {'\n'}</Text>

                <Text style={styles.productDescription}>
                    Đây là một đôi giày tuyệt vời cho những ai yêu thích sự thoải mái và thời trang.
                    Với thiết kế hiện đại và chất liệu cao cấp, đôi giày này sẽ đem lại cho bạn cảm giác êm ái và phong cách mỗi khi sử dụng.
                </Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Địa chỉ: {'\n'}</Text>
                    <Text style={styles.infoText}>123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh {'\n'}{'\n'}</Text>

                    <Text style={styles.infoTitle}>Thông tin chi tiết: {'\n'}</Text>
                    <Text style={styles.infoText}>
                        - Chất liệu: Cao su cao cấp, vải lưới.{'\n'}{'\n'}
                        - Kích thước: 36-45.{'\n'}{'\n'}
                        - Màu sắc: Trắng đen.
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.addButton} onPress={() => alert('Thêm vào giỏ hàng')}>
                        <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buyButton}>
                        <Text style={styles.buttonText}>Mua</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        marginBottom: 80

    },
    buyButton: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 10,
        width: 120,
    },
    addButton: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    infoContainer: {
        marginVertical: 20,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    infoText: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
    },
    icon1: {
        width: 30,
        height: 30,
        borderRadius: 20
    },
    settingButton: {
        position: 'absolute',
        top: 10,
        right: 110,
        zIndex: 1,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(235, 235, 235, 0.7)',
        padding: 5,
    },
    logoButton: {
        position: 'absolute',
        top: 10,
        right: 60,
        zIndex: 1,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(235, 235, 235, 0.7)',
        padding: 5,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    slide: {
        width: Dimensions.get('window').width,
        height: 250,
        position: 'relative',
    },
    img: {
        width: '100%',
        height: '100%',
    },
    pageNumber: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(235, 235, 235, 0.7)',
        padding: 5,
    },
    cartButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(235, 235, 235, 0.7)',
        padding: 5,
    },
    icon: {
        width: 30,
        height: 30,
    },
    detailsContainer: {
        padding: 20,
    },
    productTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 18,
        color: 'green',
        marginBottom: 10,
    },
    productDescription: {
        fontSize: 16,
        color: 'black',
    },
});

export default Specifications;
