import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Signinpage: React.FC<{navigation:any}> = ({navigation}) => {
  const [namaLengkap, setnamaLengkap] = useState<string>('');
  const [usia, setUsia] = useState<string>('');
  const [pekerjaan, setPekerjaan] = useState<string>('');
  const [jenisKelamin, setjenisKelamin] = useState<string>('');
  const [tanggalLahir, settanggalLahir] = useState<string>('');
  const [nomorHandphone, setnomorHandphone] = useState<string>('');
  

  const handleSignIn = () => {
    console.log('Sign In button pressed');
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign In button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Harap Mengisi Data Diri Anda</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nama Lengkap"
          value={namaLengkap}
          onChangeText={setnamaLengkap}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usia"
          secureTextEntry
          value={usia}
          onChangeText={setUsia}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pekerjaan"
          value={pekerjaan}
          onChangeText={setPekerjaan}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Jenis Kelamin"
          value={jenisKelamin}
          onChangeText={setjenisKelamin}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tanggal Lahir"
          value={tanggalLahir}
          onChangeText={settanggalLahir}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nomor Handphone"
          value={nomorHandphone}
          onChangeText={setnomorHandphone}
        />
      </View>

        <Link href={"biodataPage"} asChild>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </Link>

      
      
      
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
  backIcon: {
    fontSize: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    height: 50,
    borderColor: '#717171',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    marginTop: 10,
    textAlign: 'right',
    fontSize: 12,
    color: '#000',
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
  },
  loginWith: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#57F2F2',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  signUpPrompt: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 16,
  },
  signUpText: {
    color: '#000',
  },
});

export default Signinpage;
