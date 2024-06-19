//  import React, { useState, useEffect } from 'react';
//  import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
//  import { Ionicons } from "@expo/vector-icons";
//  import { Link } from 'expo-router';
//  import { initializeApp } from '@firebase/app';
//  import { getAuth, signInWithEmailAndPassword, onAuthStateChanged} from '@firebase/auth';

// // const firebaseConfig = {
// //   apiKey: "AIzaSyDqXN7XGrzNdSd352CWFGHIpETcieA11JY",
// //   authDomain: "healthbot-5e9f5.firebaseapp.com",
// //   projectId: "healthbot-5e9f5",
// //   storageBucket: "healthbot-5e9f5.appspot.com",
// //   messagingSenderId: "923533418473",
// //   appId: "1:923533418473:web:32e845002b7ddcfffc3578"
// // };

// // interface Login {
// //   navigation: any
// // }

// // const app = initializeApp(firebaseConfig);

// const Signinpage: React.FC<Login> = (Login) => {
//   // const [email, setEmail] = useState<string>('');
//   // const [password, setPassword] = useState<string>('');
//   // const [user, setUser] = useState<string>('');
//   // const [isShown, setIsShown] = useState<boolean>(false);
//   // const [urlLogin, setUrlLogin] = useState<string>('');

//   // const auth = getAuth(app);

//   // useEffect(() => {
//   //   const unsubscribe = onAuthStateChanged(auth, (user:any) => {
//   //     setUser(user);
//   //   });

//   //   return () => unsubscribe();
//   // }, [auth]);

//   // const handleSignIn = async () => {
//   //   try{
//   //   const res = await signInWithEmailAndPassword(auth, email, password);
//   //   if (res){
//   //     console.log('User signed in successfully!');
//   //     setUrlLogin("(tabs)/(home)");
//   //   }
    
//   //   } catch (error) {
//   //     console.error('User signed in successfully!', error);
//   //   }
//   // };

//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [result, setResult] = useState<Date[]>([]);

//   const handleSignIn = () => {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     const days: Date[] = [];

//     while (start <= end) {
//       if (start.getDay() === 0 || start.getDay() === 6) {
//         const newDate = new Date(start);
//         newDate.setFullYear(2024); // Set the year to 2024
//         days.push(newDate);
//       }
//       start.setDate(start.getDate() + 1);
//     }

//     setResult(days);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Ujian Tengah Semester</Text>
//       </View>

//       <Text>Tanggal Awal</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Tanggal Awal"
//           value={startDate}
//           onChangeText={setStartDate}
//         />
//       </View>

//       <Text style={{ marginTop: 10 }}>Tanggal Akhir</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Tanggal Akhir"
//           value={endDate}
//           onChangeText={setEndDate}
//         />
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleSignIn}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>

//       <Text style={{ marginTop: 20 }}>Hari sabtu dan minggu antara tanggal {startDate} dan {endDate}:</Text>
//       <View>
//         {result.map((date, index) => (
//           <Text key={index}>{date.toDateString()}</Text>
//         ))}
//       </View>
//       {/* <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry = {isShown === true? false : true}
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity onPress={() => setIsShown(!isShown)}>
//           {isShown === false
//           ? <Ionicons name='eye-off' color="#000" size={25}/> 
//           : <Ionicons name='eye' color="#000" size={25}/>
//           }
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity onPress={() => console.log('Forgot Password pressed')}>
//         <Text style={styles.forgotPassword}>Forgot password?</Text>
//       </TouchableOpacity>

//         <Link href={urlLogin} asChild>
//           <TouchableOpacity style={styles.button} onPress={handleSignIn}>
//             <Text style={styles.buttonText}>Sign In</Text>
//           </TouchableOpacity>
//         </Link>

//       <Text style={styles.signUpPrompt}>Don't have an account?</Text>
      
//       <Link href={"signUp"} asChild>
//         <TouchableOpacity style={styles.button}>
//           <Text style={[styles.buttonText, styles.signUpText]}>Sign Up</Text>
//         </TouchableOpacity>
//       </Link>
//        */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingLeft: 10,
//     width: '80%',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

// export default App;

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';

const App = () => {
  const [startNumber, setStartNumber] = useState<string>('');
  const [endNumber, setEndNumber] = useState<string>('');
  const [primes, setPrimes] = useState<number[]>([]);

  const handleStartNumberChange = (input: string) => {
    setStartNumber(input.replace(/[^0-9]/g, ''));
  };

  const handleEndNumberChange = (input: string) => {
    setEndNumber(input.replace(/[^0-9]/g, ''));
  };

  const handleSubmit = () => {
    const start = parseInt(startNumber);
    const end = parseInt(endNumber);

    if (isNaN(start) || isNaN(end) || start >= end) {
      Alert.alert('Kesalahan', 'Harap masukkan rentang bilangan bulat yang valid, dengan bilangan awal lebih kecil dari bilangan akhir.');
      return;
    }

    const primeNumbers = findPrimes(start, end);
    setPrimes(primeNumbers);
  };

  const isPrime = (num: number): boolean => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };

  const findPrimes = (start: number, end: number): number[] => {
    let primes: number[] = [];
    for (let num = start; num <= end; num++) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
    return primes;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Identifikasi Bilangan Prima</Text>
      <TextInput
        style={styles.input}
        placeholder="Bilangan Awal"
        keyboardType="numeric"
        onChangeText={handleStartNumberChange}
        value={startNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Bilangan Akhir"
        keyboardType="numeric"
        onChangeText={handleEndNumberChange}
        value={endNumber}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <FlatList
        data={primes}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: '80%',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
