import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'


const ManHinhChaoScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('HomeScreen');
        }, 3000)
        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={st.container}>
            <Text style={st.txt1}>BK Technology</Text>
            <Image
                source={require('./icon/logo.png')}
                style={st.img}
            />
            <View style={{ paddingBottom: 20, justifyContent: 'flex-end', flex: 1 }}>
                <Text style={st.txt2}>Loyal & Dependable</Text>
            </View>
        </View>
    )
}

export default ManHinhChaoScreen

const st = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
    },
    txt1: {
        fontSize: 24,
        fontWeight: '700',
        color: 'rgb(114, 207, 207)',
        marginTop: 120,
    },
    img: {
        width: 120,
        height: 120,
        marginTop: 18,
    },
    txt2: {
        paddingBottom: 30,
        color: 'gray',
    },
})