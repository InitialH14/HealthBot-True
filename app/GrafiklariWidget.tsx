import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';

const GrafiklariWidget = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../assets/assets lari/images/Layer_1.png')} style={styles.headerImage} />
          <Text style={styles.headerText}>HEALTHBOT</Text>
          <Image source={require('../assets/assets lari/images/Frame_3.png')} style={styles.headerIcon} />
        </View>
        <Text style={styles.title}>Lari Pagi</Text>
        <View style={styles.centeredContent}>
          <Image source={require('../assets/assets lari/images/Ellipse_4.png')} style={styles.ellipse4} />
          <Image source={require('../assets/assets lari/images/Ellipse_3.png')} style={styles.ellipse3} />
          <Text style={styles.timerText}>40 min/60</Text>
        </View>
        <View style={styles.iconsRow}>
          <Image source={require('../assets/assets lari/images/solar_walking-bold.png')} style={styles.icon} />
          <Text style={styles.iconText}>0 min {'\n'}Walking</Text>
          <Image source={require('../assets/assets lari/images/solar_running-bold.png')} style={styles.icon} />
          <Text style={styles.iconText}>40 min {'\n'}Running</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statText}>Distance</Text>
          <Text style={styles.statText}>Duration</Text>
        </View>
        <View style={styles.statsDetailsRow}>
          <Image source={require('../assets/assets lari/images/Line_5.png')} style={styles.line} />
          <Text style={styles.detailText}>1,256 Km{'\n'}Week 1</Text>
          <Image source={require('../assets/assets lari/images/Line_5.png')} style={styles.line} />
          <Text style={styles.detailText}>245 h 05 min {'\n'}Week 1</Text>
        </View>
        <View style={styles.statsDetailsRow}>
          <Image source={require('../assets/assets lari/images/Line_6.png')} style={styles.line} />
          <Text style={[styles.detailText, styles.highlightedDetailText]}>1,541 Km{'\n'}Week 2</Text>
          <Image source={require('../assets/assets lari/images/Line_6.png')} style={styles.line} />
          <Text style={[styles.detailText, styles.highlightedDetailText]}>225 h 15 min {'\n'}Week 2</Text>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Adjust as needed
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#070F2B',
    padding: 15,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  headerText: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 15,
  },
  headerIcon: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
  },
  centeredContent: {
    alignItems: 'center',
  },
  ellipse4: {
    position: 'absolute',
    top: 0,
    left: 120,
  },
  ellipse3: {
    position: 'absolute',
    top: 0,
    left: 136,
  },
  timerText: {
    fontSize: 17,
    textAlign: 'center',
    marginVertical: 50,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  icon: {
    marginHorizontal: 20,
  },
  iconText: {
    fontSize: 12,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    marginTop: 270,
  },
  statText: {
    fontSize: 12,
    fontWeight: '500',
  },
  statsDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    marginTop: 10,
  },
  line: {
    width: '35%',
    height: 2,
    backgroundColor: '#000',
  },
  detailText: {
    fontSize: 12,
    textAlign: 'center',
  },
  highlightedDetailText: {
    color: '#0055B8',
  },
});

export default GrafiklariWidget;