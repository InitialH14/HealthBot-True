import React, { useState, useEffect } from 'eact';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'eact-native';

const RekomendasiOlaragaScreen = () => {
  const [model, setModel] = useState({});

  useEffect(() => {
    // Initialize model here
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/images/Layer_1.png')} style={styles.logo} />
        <Text style={styles.title}>HEALTHBOT</Text>
        <Image source={require('./assets/images/Frame_3.png')} style={styles.icon} />
      </View>
      <TouchableOpacity style={styles.backButton}>
        <Image source={require('./assets/images/arrow-back-ios_3.png')} style={styles.backIcon} />
        <Text style={styles.backText}>Ayo Bergerak</Text>
      </TouchableOpacity>
      <View style={styles.cardContainer}>
        <Image source={require('./assets/images/Group_8741.png')} style={styles.cardImage} />
      </View>
      <View style={styles.cardContainer}>
        <Image source={require('./assets/images/Group_8742.png')} style={styles.cardImage} />
      </View>
      <View style={styles.cardContainer}>
        <Image source={require('./assets/images/Group_8743.png')} style={styles.cardImage} />
      </View>
      <View style={styles.cardContainer}>
        <Image source={require('./assets/images/Group_8744.png')} style={styles.cardImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070F2B',
  },
  header: {
    height: 100,
    backgroundColor: '#070F2B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'pace-between',
    paddingHorizontal: 20,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  icon: {
    width: 24,
    height: 24,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'pace-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  backText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#03A9A9',
  },
  cardContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
});

export default RekomendasiOlaragaScreen;