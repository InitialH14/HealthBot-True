import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Button
} from 'react-native';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


const { width } = Dimensions.get('window');

const dummyOlahraga = [{
    "day": "1",
    "url" : require('../assets/images/fit-1.jpg')
}, {
    "day": "2",
    "url" : require('../assets/images/fit-2.jpg')
}, {
    "day": "3",
    "url" : require('../assets/images/fit-3.jpg')
},  {
    "day": "4",
    "url" : require('../assets/images/fit-4.jpg')
}, {
  "day": "5",
  "url" : require('../assets/images/fit-5.jpg')
}, {
  "day": "6",
  "url" : require('../assets/images/fit-6.jpg')
}, {
  "day": "7",
  "url" : require('../assets/images/fit-7.jpg')
}]

const RekomendasiOlahraga: React.FC<{navigation:any}> = ({navigation}) => {

  return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <ImageBackground source={require("../assets/images/header-img.jpg")} resizeMode="cover" style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back-outline" color="#FFF" size={30}/>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.appBarTitle}>Rekomendasi Olahraga</Text>
            <Text style={styles.subTitle}>Dapatkan rekomendasi program olahragamu menurut HealthBot AI!</Text>
            <View style={styles.ButtonContainer}>
              <TouchableOpacity style={styles.Button}>
                <Text style={styles.TextButton}>Dapatkan Rekomendasi</Text>
              </TouchableOpacity>
            </View>
            {dummyOlahraga.map((e, i) => <TouchableOpacity key={i} style={{borderRadius: 20}}>
              <View style={{borderRadius: 20}}>
              <ImageBackground source={e.url} resizeMode="cover" style={styles.infoContainer}>
                  <Text style={styles.titleInfo}>Hari {e.day}</Text>
                </ImageBackground>    
              </View>
              </TouchableOpacity>)}
          </View>
            
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  },
  header: {
    height: 200,
    flexDirection: 'row',
    elevation: 2,
    paddingTop: 50,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  appBarTitle: {
    color: '#EEEEEE',
    fontSize: 23,
    fontWeight: '600',
    marginBottom: 15
  },
  subTitle: {
    color: '#EEEEEE',
    fontSize: 14,
    marginBottom: 30
  },
  scrollView: {
    flex: 1,
  },
  infoContainer: {
    height: 130,
    backgroundColor: '#04364A',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginBottom: 30,
    borderRadius: 20
  },
  titleInfo: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8
  },
  textInfo: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'semibold',
    marginBottom: 5,
    marginLeft: 8
  },
  textLayout: {
    flexDirection: 'row',
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40
  },
  Button: {
    width: '100%',
    height: 40,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  TextButton: {
    color: 'black'
  }

});

export default RekomendasiOlahraga;
