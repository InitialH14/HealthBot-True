import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Signinpage = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState<number[]>([]);

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  const handleSignIn = () => {
    const startYear = parseInt(startDate);
    const endYear = parseInt(endDate);
    const leapYears: number[] = [];

    for (let year = startYear; year <= endYear; year++) {
      if (isLeapYear(year)) {
        leapYears.push(year);
      }
    }

    setResult(leapYears);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>UAS</Text>
      </View>

      <Text>Tanggal Awal</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tahun Awal"
          value={startDate}
          onChangeText={setStartDate}
          keyboardType="numeric"
        />
      </View>

      <Text style={{ marginTop: 10 }}>Tanggal Akhir</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tahun Akhir"
          value={endDate}
          onChangeText={setEndDate}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20 }}>Tahun kabisat antara {startDate} dan {endDate}:</Text>
      <View>
        {result.map((year, index) => (
          <Text key={index}>{year}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    paddingHorizontal: 30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  inputContainer: {
    marginTop: 20,
    borderColor: '#717171',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 50,
    width: '90%'
  },
  button: {
    marginTop: 30,
    height: 50,
    backgroundColor: '#57F2F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default Signinpage;
