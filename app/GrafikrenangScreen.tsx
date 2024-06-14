import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

const GrafikrenangScreen = () => {
  const [unfocusNode, setUnfocusNode] = useState(null);

  useEffect(() => {
    // ComponentDidMount
    return () => {
      // ComponentWillUnmount
    };
  }, []);

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={handleDismissKeyboard} style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/assets renang/images/Layer_1.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>HEALTHBOT</Text>
        <Image source={require('../assets/assets renang/images/Frame_3.png')} style={styles.headerImageRight} />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Renang</Text>
        <View style={styles.infoContainer}>
          <Image source={require('../assets/assets renang/images/Ellipse_4.png')} style={styles.infoImage} />
          <Image source={require('../assets/assets renang/images/Ellipse_3.png')} style={styles.infoImage} />
          <Text style={styles.infoText}>15 min{'\n'}/60</Text>
        </View>
        <View style={styles.activityContainer}>
          <Image source={require('../assets/assets renang/images/solar_walking-bold.png')} style={styles.activityImage} />
          <Text style={styles.activityText}>0 min {'\n'}Walking </Text>
          <Image source={require('../assets/assets renang/images/solar_swimming-linear.png')} style={styles.activityImage} />
          <Text style={styles.activityText}>40 min {'\n'}Swimming</Text>
        </View>
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Distance</Text>
          <Text style={styles.statsTitleRight}>Duration</Text>
          <View style={styles.statsRow}>
            <Image source={require('../assets/assets renang/images/Line_5.png')} style={styles.statsImage} />
            <Text style={styles.statsText}>400 m{'\n'}Week 1 </Text>
            <Image source={require('../assets/assets renang/images/Line_5.png')} style={styles.statsImage} />
            <Text style={styles.statsText}>20 min {'\n'}Week 1</Text>
          </View>
          <View style={styles.statsRow}>
            <Image source={require('../assets/assets renang/images/Line_6.png')} style={styles.statsImage} />
            <Text style={styles.statsTextHighlighted}>300 m {'\n'}Week 2</Text>
            <Image source={require('../assets/assets renang/images/Line_6.png')} style={styles.statsImage} />
            <Text style={styles.statsTextHighlighted}>10 min{'\n'}Week 2</Text>
          </View>
        </View>
      </ScrollView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#070F2B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerImage: {
    width: 50,
    height: 50,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
  },
  headerImageRight: {
    width: 50,
    height: 50,
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 35,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Readex Pro',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  infoImage: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  infoText: {
    fontSize: 17,
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  activityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  activityImage: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  activityText: {
    fontSize: 12,
    fontFamily: 'Readex Pro',
    textAlign: 'center',
  },
  statsContainer: {
    marginTop: 270,
    width: '100%',
    paddingHorizontal: 50,
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins',
  },
  statsTitleRight: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Readex Pro',
    position: 'absolute',
    right: 0,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  statsImage: {
    width: 100,
    height: 5,
    marginHorizontal: 10,
  },
  statsText: {
    fontSize: 12,
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  statsTextHighlighted: {
    fontSize: 12,
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: '#0055B8',
  },
});

export default GrafikrenangScreen;
