import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Signinpage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Sign In button pressed');
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign In button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>◀︎</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Log In</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity onPress={() => console.log('Forgot Password pressed')}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={Signinpage}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.loginWith}>Login with</Text>

      <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={handleGoogleSignIn}>
        <Image source={require('../../assets/assets sign in/images/google.jpg')} style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Google</Text>
      </TouchableOpacity>

      <Text style={styles.signUpPrompt}>Don't have an account?</Text>

      <TouchableOpacity style={styles.button} onPress={() => console.log('Sign Up pressed')}>
        <Text style={[styles.buttonText, styles.signUpText]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  backIcon: {
    fontSize: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
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
