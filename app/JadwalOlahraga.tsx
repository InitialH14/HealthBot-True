import React, { useState} from 'react';
import {
  View,
  Text,
  TextInput,
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
    "date" : "27/10/2023",
    "activity" : [
        "Forearm",
        "Bahu",
        "Trisep"
    ]
}, {
    "day": "Selasa",
    "beginTime" : "07.00",
    "endTime" : "09.00",
    "date" : "28/10/2023",
    "activity" : [
        "Back",
        "Bahu",
        "Bicep"
    ]
}, {
    "day": "Rabu",
    "beginTime" : "07.00",
    "endTime" : "09.00",
    "date" : "29/10/2023",
    "activity" : [
        "Leg",
        "Sixpack",
        "Chest"
    ]
},  {
    "day": "Kamis",
    "beginTime" : "07.00",
    "endTime" : "09.00",
    "date" : "29/10/2023",
    "activity" : [
        "Cardio"
    ]
}]

const JadwalOlahraga: React.FC<{navigation:any}> = ({navigation}) => {

  const [search, setSearch] = useState<string>('');
  return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back-outline" color="#000000" size={25}/>
                </TouchableOpacity>
                
                <Text style={styles.appBarTitle}>Jadwal Olahraga</Text>
            </View>

            <View style={styles.searchContainer}>
                <TextInput 
                placeholder='Cari Aktivitas' 
                style={styles.searchColumn} 
                value={search}
                onChangeText={setSearch}/>
                <Ionicons name="search" color="#000000" size={25}/>
            </View>

            <View>
                <Text style={[styles.appBarTitle, {marginLeft: 0, marginBottom: 30}]}>Sudahkah Kamu Berolahraga?</Text>
            </View>
            
            {dummyOlahraga.map(
                (e) => e.day === 'Kamis'? 
                e.activity.map(
                    (a, i) => 
                    <TouchableOpacity key={i} style={styles.infoContainer}>
                        <Text style={styles.titleInfo}>{a}</Text>
                        <View style={styles.textLayout}><Ionicons name="time" color="#FFFFFF" size={16}/><Text style={styles.textInfo}> {e.beginTime} - {e.endTime}</Text></View>
                        <View style={styles.textLayout}><Ionicons name="calendar" color="#FFFFFF" size={16}/><Text style={styles.textInfo}> {e.date}</Text></View>
                    </TouchableOpacity>) 
                    : null
            )}
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
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    padding: 10,
    marginBottom: 40
  },
  searchColumn: {
    width: '90%'
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

export default JadwalOlahraga;
