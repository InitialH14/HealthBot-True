import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface RekomendasiMenuDietScreenProps {
  navigation: any;
}

const RekomendasiMenuDietScreen: React.FC<RekomendasiMenuDietScreenProps> = ({ navigation }) => {
  const [model, setModel] = useState<{ dispose: () => void } | null>(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back-outline" color="#000000" size={25}/>
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Rekomendasi Menu Diet</Text>
      </View>

      <View style={styles.row}>
        <Link href={"/menuDiet1"} asChild>
        <TouchableOpacity style={styles.card}>
          <Image source={require("../assets/images/apple.png")} style={styles.iconMenu}/>
          <Text style={styles.textDay}>Senin</Text>
        </TouchableOpacity>
        </Link>
        <Link href={"/menuDiet1"} asChild>
        <TouchableOpacity style={styles.card}>
          <Image source={require("../assets/images/salad.png")} style={styles.iconMenu}/>
          <Text style={styles.textDay}>Selasa</Text>
        </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Image source={require("../assets/images/orange-juice.png")} style={styles.iconMenu}/>
          <Text style={styles.textDay}>Rabu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={require("../assets/images/milk.png")} style={styles.iconMenu}/>
          <Text style={styles.textDay}>Kamis</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Image source={require("../assets/images/chicken-leg.png")} style={styles.iconMenu}/>
          <Text style={styles.textDay}>Jumat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={require("../assets/images/broccoli.png")} style={styles.iconMenu}/>
          <Text style={styles.textDay}>Sabtu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.singleRow}>
        <TouchableOpacity style={styles.card}>
          <Image source={require("../assets/images/banana.png")} style={styles.iconMenu}/>
          <Text style={styles.textDay}>Minggu</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    padding: 10,
    paddingTop: 50,
    marginBottom: 30
  },
  appBarTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  singleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  card: {
    width: 140,
    height: 120,
    backgroundColor: '#04364A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textDay: {
    color: 'white',
    fontWeight: 'semibold',
    fontSize: 14
  },
  iconMenu: {
    width: 50,
    height: 50,
    marginBottom: 5
  }
});

export default RekomendasiMenuDietScreen;
