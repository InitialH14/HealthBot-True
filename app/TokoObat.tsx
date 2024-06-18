import React, {useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, FlatList} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const obat = [{
    "id": "1",
    "nama" : "Obat Batuk Cap Ibu & Anak Sirup 150ml",
    "harga" : 58600,
    "amount" : "per botol",
    "gambar" : require('../assets/images/obat-batuk-cap-ibu-anak.png'),
    "deskripsi" : "",
    "terjual": 500
}, {
    "id": "2",
    "nama" : "ByeBye Fever Anak 10 Lembar",
    "harga" : 108000,
    "amount" : "per botol",
    "gambar" : require('../assets/images/byebye.png'),
    "deskripsi" : "",
    "terjual": 200
}, {
    "id": "3",
    "nama" : "Actifed Plus Expectorant Sirup 60 ml (hijau)",
    "harga" : 69800,
    "amount" : "per botol",
    "gambar" : require('../assets/images/actified.png'),
    "deskripsi" : "",
    "terjual": 300
}, {
    "id": "4",
    "nama" : "Panadol Extra 10 Kaplet",
    "harga" : 15000,
    "amount" : "per botol",
    "gambar" : require('../assets/images/panadol.png'),
    "deskripsi" : "",
    "terjual": 10
}]

const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2,
  });

const TokoObat: React.FC = () => {
    return(
        <View style={styles.Container}>
            <View style={styles.HeaderContainer}>
                <View style={styles.BackHeader}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back-outline" color="#000" size={25}/>
                    </TouchableOpacity>
                    <Text style={styles.TitleHeader}>Toko Obat</Text>
                </View>
                <View>
                    <Ionicons name="search" color="#000" size={25}/>
                </View>
            </View>
            <ScrollView>
                <View>
                    <Text style={styles.SubTitle}>Penjualan Terbaik</Text>
                </View>
                <ScrollView horizontal style={styles.ScrollHorizontal}>
                    {obat.map((a, i) => a.terjual > 100  
                    ? <View key={i} style={styles.MenuContainerX}>
                            <View style={{alignItems: 'center'}}>
                                <Image source={a.gambar} style={styles.GambarObat}/>    
                            </View>
                            <Text style={styles.InfoMenu}>{a.nama}</Text>
                            <Text style={styles.InfoMenu}>{formatter.format(a.harga)}</Text>
                            <Text>{a.amount}</Text>
                        </View>
                    : null
                    )}
                </ScrollView>
                <View>
                    <Text style={styles.SubTitle}>Pilih Sesuai Kebutuhan</Text>
                </View>
                <View style={styles.scrollViewContent}>
                    {obat.map((item, index) => <View key={index} style={styles.MenuContainerY}>
                            <View style={{alignItems: 'center'}}>
                                <Image source={item.gambar} style={styles.GambarObat}/>    
                            </View>
                            <Text style={styles.InfoMenu}>{item.nama}</Text>
                            <Text style={styles.InfoMenu}>{formatter.format(item.harga)}</Text>
                            <Text>{item.amount}</Text>
                        </View>)}
                </View>
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20
    },
    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingBottom: 20
    },
    BackHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    TitleHeader: {
        marginLeft: 20,
        fontSize: 20
    },
    SubTitle: {
        fontSize:19, 
        paddingVertical: 25,
        fontWeight: 'bold'
    },
    ScrollHorizontal: {
        marginBottom: 20,
    },
    MenuContainerX: {
        width: 180,
        height: 270,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowOffset: {width: 10, height:10},
        shadowRadius: 5,
        backgroundColor: 'white',
        marginRight: 18,
        marginVertical: 20,
        padding: 20,
        marginLeft: 5,
        elevation: 6
    },
    MenuContainerY: {
        width: '45%',
        height: 270,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowOffset: {width: 3, height:3},
        shadowRadius: 5,
        backgroundColor: 'white',
        marginRight: 3,
        marginVertical: 20,
        padding: 20,
        marginLeft: 5,
        elevation: 6
    },
    scrollViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
    GambarObat: {
        width: "60%",
        marginBottom: 10
    },
    InfoMenu: {
        marginBottom: 5
    }
})


export default TokoObat;