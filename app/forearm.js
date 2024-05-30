import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useFonts } from 'expo-font';

const GrafikforearmWidget = () => {
  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    'Readex Pro': require('./assets/fonts/ReadexPro-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('./assets/images/Layer_1.png')} />
          <Text style={styles.headerText}>HEALTHBOT</Text>
          <Image style={styles.profileImage} source={require('./assets/images/Frame_3.png')} />
        </View>
      </View>
      
      <Text style={styles.title}>Latihan Foream</Text>
      
      <View style={styles.circleContainer}>
        <Image style={styles.circle1} source={require('./assets/images/Ellipse_4.png')} />
        <Image style={styles.circle2} source={require('./assets/images/Ellipse_3.png')} />
        <Text style={styles.circleText}>10 min /60</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.activityContainer}>
          <Image style={styles.activityIcon} source={require('./assets/images/solar_walking-bold.png')} />
          <Text style={styles.activityText}>40 min {'\n'}Walking</Text>
        </View>
        <View style={styles.activityContainer}>
          <Image style={styles.activityIcon} source={require('./assets/images/material-symbols-light_sports-handball.png')} />
          <Text style={styles.activityText}>40 min {'\n'}Running</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: [],
            datasets: [
              {
                data: [],
                color: () => '#FF0000',
                strokeWidth: 2,
              },
            ],
          }}
          width={318}
          height={90}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      <View style={styles.distanceContainer}>
        <Text style={styles.distanceText}>Distance</Text>
        <Text style={styles.durationText}>Duration</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.statContainer}>
          <Image style={styles.statLine} source={require('./assets/images/Line_5.png')} />
          <Text style={styles.statText}>16 Set {'\n'}Week 1</Text>
        </View>
        <View style={styles.statContainer}>
          <Image style={styles.statLine} source={require('./assets/images/Line_5.png')} />
          <Text style={styles.statText}>15 min {'\n'}Week 1</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.statContainer}>
          <Image style={styles.statLine} source={require('./assets/images/Line_6.png')} />
          <Text style={styles.statTextHighlighted}>8 Set {'\n'}Week 2</Text>
        </View>
        <View style={styles.statContainer}>
          <Image style={styles.statLine} source={require('./assets/images/Line_6.png')} />
          <Text style={styles.statTextHighlighted}>10 min {'\n'}Week 2</Text>
        </View>
      </View>
    </ScrollView>
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

export default GrafikforearmWidget;
