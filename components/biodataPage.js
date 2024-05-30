import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const BiodataPage = () => {
  const [namaLengkap, setNamaLengkap] = useState('');
  const [usia, setUsia] = useState('');
  const [pekerjaan, setPekerjaan] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [nomorHandphone, setNomorHandphone] = useState('');

  const handleButtonPress = () => {
    console.log('Button pressed ...');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Harap Mengisi Data diri Anda!</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Nama Lengkap</Text>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={setNamaLengkap}
          value={namaLengkap}
          placeholder="Nama Lengkap"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Usia</Text>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={setUsia}
          value={usia}
          placeholder="Usia"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Pekerjaan</Text>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={setPekerjaan}
          value={pekerjaan}
          placeholder="Pekerjaan"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Jenis Kelamin</Text>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={setJenisKelamin}
          value={jenisKelamin}
          placeholder="Jenis Kelamin"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Tanggal Lahir</Text>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={setTanggalLahir}
          value={tanggalLahir}
          placeholder="Tanggal Lahir"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Nomor Handphone</Text>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={setNomorHandphone}
          value={nomorHandphone}
          placeholder="Nomor Handphone"
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Lanjut</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  row: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderColor: '#717171',
    borderWidth: 2,
    borderRadius: 24,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#57F2F2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default BiodataPage;
