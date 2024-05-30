import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const MenuDiet1Screen = ({ navigation }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const init = async () => {
      // Initialization logic here
    };

    init();

    return () => {
      // Cleanup logic here
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>HealthBot</Text>
          </View>
          <View style={styles.promptRow}>
            <Text style={styles.promptText}>
              Sudahkah kamu {'\n'} makan makanan bergizi?
            </Text>
          </View>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="Senin , 29 April 2024"
              value={text}
              onChangeText={setText}
              textAlign="center"
            />
          </View>
          <View style={styles.mealRow}>
            <Text style={styles.mealText}>Lunch</Text>
          </View>
          <View style={styles.cardRow}>
            <View style={styles.card}></View>
          </View>
          <View style={styles.mealRow}>
            <Text style={styles.mealText}>Dinner</Text>
          </View>
          <View style={styles.cardRow}>
            <View style={styles.card}></View>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerContent}></View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#717171',
    padding: 30,
    paddingBottom: 40,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Outfit',
  },
  promptRow: {
    marginHorizontal: 40,
    marginTop: 30,
  },
  promptText: {
    fontSize: 25,
    fontFamily: 'Readex Pro',
    fontWeight: '600',
  },
  inputRow: {
    marginHorizontal: 40,
    marginTop: 20,
  },
  input: {
    borderColor: '#717171',
    borderWidth: 2,
    borderRadius: 24,
    padding: 10,
    fontSize: 16,
    fontFamily: 'Readex Pro',
  },
  mealRow: {
    marginHorizontal: 40,
    marginTop: 20,
  },
  mealText: {
    fontSize: 16,
    fontFamily: 'Readex Pro',
    fontWeight: 'bold',
  },
  cardRow: {
    marginHorizontal: 40,
    marginTop: 10,
  },
  card: {
    width: '100%',
    height: 186,
    backgroundColor: '#04364A',
    borderRadius: 10,
  },
  footer: {
    marginTop: 20,
  },
  footerContent: {
    width: '100%',
    height: 100,
    backgroundColor: '#717171',
  },
});

export default MenuDiet1Screen;
