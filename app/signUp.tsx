import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword} from '@firebase/auth';
import { Ionicons } from "@expo/vector-icons";

const firebaseConfig = {
  apiKey: "AIzaSyDqXN7XGrzNdSd352CWFGHIpETcieA11JY",
  authDomain: "healthbot-5e9f5.firebaseapp.com",
  projectId: "healthbot-5e9f5",
  storageBucket: "healthbot-5e9f5.appspot.com",
  messagingSenderId: "923533418473",
  appId: "1:923533418473:web:32e845002b7ddcfffc3578"
};

const app = initializeApp(firebaseConfig);

const Signuppage: React.FC<{navigation:any}> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [urlLogin, setUrlLogin] = useState<string>('/biodataPage');
  const [isShown, setIsShown] = useState<boolean>(false);

  const auth = getAuth(app);

  const handleSignUp = async () => {
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res){
        console.log('User created successfully!');
        setUrlLogin("/biodataPage");
      }
      } catch (error) {
        console.error('User signed in successfully!', error);
      }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Selamat Datang!</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry = {isShown === true? false : true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setIsShown(!isShown)}>
          {isShown === false
          ? <Ionicons name='eye-off' color="#000" size={25}/> 
          : <Ionicons name='eye' color="#000" size={25}/>
          }
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <Link href={urlLogin} asChild>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <Text style={styles.signUpPrompt}>Sudah punya akun?</Text>

      <View style={[styles.buttonContainer, {marginTop: -20}]}>
        <Link href={"/"} asChild>
          <TouchableOpacity style={styles.button} onPress={() => router.back()}>
            <Text style={[styles.buttonText, styles.signUpText]}>Sign In</Text>
          </TouchableOpacity>
        </Link>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 30,
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
  forgotPassword: {
    marginTop: 10,
    textAlign: 'right',
    fontSize: 12,
    color: '#000',
  },
  button: {
    marginTop: 50,
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
    marginTop: 30,
    textAlign: 'center',
    fontSize: 14,
  },
  signUpText: {
    color: '#000',
  },
  buttonContainer: {
    paddingHorizontal: 0
  }
});

export default Signuppage;
