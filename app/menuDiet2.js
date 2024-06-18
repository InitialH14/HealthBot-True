import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Keyboard, SafeAreaView } from 'react-native';

const MenuDiet2 = () => {
  const [text, setText] = useState('');
  const textInputRef = useRef(null);

  useEffect(() => {
    // Automatically focus the TextInput when the component mounts
    textInputRef.current?.focus();
  }, []);

  const handleOutsidePress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableOpacity activeOpacity={1} style={styles.container} onPress={handleOutsidePress}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Page Title</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.question}>Sudahkah kamu {"\n"}Makan Makanan bergizi?</Text>
            <TextInput
              ref={textInputRef}
              style={styles.input}
              onChangeText={setText}
              value={text}
              placeholder="Senin, 30 April 2024"
              placeholderTextColor="#717171"
              textAlign="center"
            />
            <Text style={styles.subheader}>Lunch</Text>
            <View style={styles.box}></View>
            <Text style={styles.subheader}>Dinner</Text>
            <View style={styles.box}></View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    backgroundColor: '#6200EA',
    padding: 20,
    borderRadius: 5,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Outfit',
  },
  body: {
    marginTop: 20,
  },
  question: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Readex Pro',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#717171',
    borderWidth: 2,
    borderRadius: 24,
    padding: 10,
    marginBottom: 20,
    fontFamily: 'Readex Pro',
  },
  subheader: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Readex Pro',
    marginBottom: 10,
  },
  box: {
    width: '100%',
    height: 186,
    backgroundColor: '#04364A',
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default MenuDiet2;
