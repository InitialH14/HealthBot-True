import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  DrawerLayoutAndroid,
} from 'react-native';

const { width } = Dimensions.get('window');

const HomePage = () => {
  const [drawer, setDrawer] = useState('left');

  return (
    <DrawerLayoutAndroid
      ref={(ref) => setDrawer('right')}
      drawerWidth={300}
      drawerPosition="right"
      renderNavigationView={() => <View style={styles.drawer}></View>}
    >
      <View style={styles.container}>
        <View style={styles.appBar}>
          <Text style={styles.appBarTitle}>HealthBot</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tanyakan Keluhanmu</Text>
          </View>
          <ScrollView horizontal style={styles.horizontalScrollView}>
            <TouchableOpacity style={[styles.card, styles.card1]}>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Dokter Bot</Text>
                <Text style={styles.cardSubtitle}>ChatBot pintar</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card, styles.card2]}>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Dokter Spesialis</Text>
                <Text style={styles.cardSubtitle}>
                  Dokter pilihan HealthBot
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Untuk Mu</Text>
          </View>
          <TouchableOpacity style={[styles.fullWidthCard, styles.card1]}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Rekomendasi Olahraga</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.fullWidthCard, styles.card2]}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Grafik Progres</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.fullWidthCard, styles.card1]}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Pengingat Olahraga</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.fullWidthCard, styles.card2]}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Rekomendasi Menu Diet</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  appBar: {
    backgroundColor: '#070F2B',
    padding: 20,
    elevation: 2,
  },
  appBarTitle: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Outfit',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    padding: 35,
    paddingBottom: 0,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: 'black',
  },
  horizontalScrollView: {
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 20,
  },
  card: {
    width: 225,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
    padding: 25,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  card1: {
    backgroundColor: '#04364A',
  },
  card2: {
    backgroundColor: '#070F2B',
  },
  cardContent: {
    justifyContent: 'space-evenly',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    color: 'white',
  },
  cardSubtitle: {
    fontFamily: 'Readex Pro',
    color: 'white',
  },
  fullWidthCard: {
    width: width * 0.808,
    height: 100,
    borderRadius: 14,
    marginLeft: 35,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 20,
  },
  drawer: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 16,
  },
});

export default HomePage;
