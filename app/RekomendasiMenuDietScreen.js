import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const RekomendasiMenuDietScreen = ({ navigation }) => {
  const [model, setModel] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      const initModel = async () => {
        const model = await createModel();
        setModel(model);
      };

      initModel();

      return () => {
        if (model) {
          model.dispose();
        }
      };
    }, [])
  );

  const createModel = async () => {
    // Assume this function fetches and returns a model.
    return { dispose: () => {} }; // Placeholder for actual model logic
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rekomendasi Menu Diet</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
      </View>
      <View style={styles.singleRow}>
        <View style={styles.card}></View>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Kembali</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    marginTop: 20,
    alignItems: 'center',
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
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#57F2F2',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default RekomendasiMenuDietScreen;
