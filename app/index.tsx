 import React, { useState, useEffect } from 'react';
 import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
 import { Ionicons } from "@expo/vector-icons";
 import { Link } from 'expo-router';
 import { initializeApp } from '@firebase/app';
 import { getAuth, signInWithEmailAndPassword, onAuthStateChanged} from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDqXN7XGrzNdSd352CWFGHIpETcieA11JY",
  authDomain: "healthbot-5e9f5.firebaseapp.com",
  projectId: "healthbot-5e9f5",
  storageBucket: "healthbot-5e9f5.appspot.com",
  messagingSenderId: "923533418473",
  appId: "1:923533418473:web:32e845002b7ddcfffc3578"
};

interface Login {
  navigation: any
}

const app = initializeApp(firebaseConfig);

const Signinpage: React.FC<Login> = (Login) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const [isShown, setIsShown] = useState<boolean>(false);
  const [urlLogin, setUrlLogin] = useState<string>('');

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user:any) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignIn = async () => {
    try{
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (res){
      console.log('User signed in successfully!');
      setUrlLogin("(tabs)/(home)");
    }
    
    } catch (error) {
      console.error('User signed in successfully!', error);
    }
  };

  return (
     <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.title}>Log In</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, {width: '90%'}]}
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
      <TouchableOpacity onPress={() => console.log('Forgot Password pressed')}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
        <Link href={"(tabs)/(home)"} asChild>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </Link>
      
      <Text style={styles.signUpPrompt}>Don't have an account?</Text>
      
      <Link href={"signUp"} asChild>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Sign Up pressed')}>
          <Text style={[styles.buttonText, styles.signUpText]}>Sign Up</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  input: {
    height: 50,
    
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 20,
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
  signUpPrompt: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 16,
  }, 
  signUpText: {
    color: '#000',
  }
});

export default Signinpage;

