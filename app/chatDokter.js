import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const ChatDokter = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Halo, saya merasa sangat cemas akhir-akhir ini. Sulit sekali untuk fokus dan rasanya berat', type: 'user' },
    { id: 2, text: 'Halo! Saya di sini untuk membantu. Saya mendengar bahwa Anda merasa cemas. Apakah Anda bisa memberi tahu saya lebih banyak tentang apa yang sedang Anda alami?', type: 'doctor' },
  ]);

  const handleSendMessage = () => {
    setMessages([...messages, { id: messages.length + 1, text: message, type: 'user' }]);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://picsum.photos/seed/649/600' }}
        />
        <Text style={styles.headerText}>Dr Hadid Ramadan S.Kom</Text>
      </View>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg) => (
          <View key={msg.id} style={msg.type === 'user' ? styles.userMessage : styles.doctorMessage}>
            <Text style={msg.type === 'user' ? styles.userText : styles.doctorText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ketik disini...."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Kirim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 50,
    backgroundColor: '#187771',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#ffffff',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#187771',
    borderRadius: 20,
    marginBottom: 10,
    padding: 10,
    maxWidth: '80%',
  },
  doctorMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#BFD8AF',
    borderRadius: 20,
    marginBottom: 10,
    padding: 10,
    maxWidth: '80%',
  },
  userText: {
    color: '#ffffff',
  },
  doctorText: {
    color: '#000000',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: '#187771',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#ffffff',
  },
});

export default ChatDokter;
