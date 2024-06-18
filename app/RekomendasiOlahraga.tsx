import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


const { width } = Dimensions.get('window');

const dummyOlahraga = [{
    "day": "Senin",
    "beginTime" : "07.00",
    "endTime" : "09.00",
    "date" : "27/10/2023"
}, {
    "day": "Selasa",
    "beginTime" : "07.00",
    "endTime" : "09.00",
    "date" : "28/10/2023"
}, {
    "day": "Rabu",
    "beginTime" : "07.00",
    "endTime" : "09.00",
    "date" : "29/10/2023"
},  {
    "day": "Kamis",
    "beginTime" : "07.00",
    "endTime" : "09.00",
    "date" : "29/10/2023"
}]

const RekomendasiOlahraga: React.FC<{navigation:any}> = ({navigation}) => {

  return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back-outline" color="#000000" size={25}/>
                </TouchableOpacity>
                <Text style={styles.appBarTitle}>Rekomendasi Olahraga</Text>
            </View>
            
            {dummyOlahraga.map((e, i) => <TouchableOpacity key={i} style={styles.infoContainer}>
                <Text style={styles.titleInfo}>{e.day}</Text>
                <View style={styles.textLayout}><Ionicons name="time" color="#FFFFFF" size={16}/><Text style={styles.textInfo}> {e.beginTime} - {e.endTime}</Text></View>
                <View style={styles.textLayout}><Ionicons name="calendar" color="#FFFFFF" size={16}/><Text style={styles.textInfo}> {e.date}</Text></View>
            </TouchableOpacity>)}
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    padding: 10,
    paddingTop: 60,
    marginBottom: 30
  },
  appBarTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20
  },
  scrollView: {
    flex: 1,
  },
  infoContainer: {
    height: 130,
    backgroundColor: '#04364A',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginBottom: 30
  },
  titleInfo: {
    color: 'white',
    fontSize: 22,
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
  }

});

export default RekomendasiOlahraga;
