import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatBotWidget = () => {
  const [text, setText] = useState('');
  const textInputRef = useRef(null);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      textInputRef.current?.focus();
    });
    return () => {
      showSubscription.remove();
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Back pressed')}>
              <Icon name="arrow-back-outline" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Chatbot AI</Text>
          </View>
          <View style={styles.messageContainer}>
            <View style={styles.userMessage}>
              <Text style={styles.userMessageText}>
                Halo, saya merasa sangat cemas akhir-akhir ini. Sulit sekali untuk fokus dan rasanya berat
              </Text>
            </View>
          </View>
          <View style={styles.messageContainer}>
            <View style={styles.botMessage}>
              <Text style={styles.botMessageText}>
                Halo! Saya di sini untuk membantu. Saya mendengar bahwa Anda merasa cemas. Apakah Anda bisa memberi tahu saya lebih banyak tentang apa yang sedang Anda alami?
              </Text>
            </View>
          </View>
          <View style={styles.messageContainer}>
            <View style={styles.userMessage}>
              <Text style={styles.userMessageText}>
                Ya, saya tidak tahu mengapa, tapi perasaan cemas ini datang begitu saja. Saya sulit tidur dan merasa lelah sepanjang waktu
              </Text>
            </View>
          </View>
          <View style={styles.messageContainer}>
            <View style={styles.botMessage}>
              <Text style={styles.botMessageText}>
                Saya sangat memahami betapa sulitnya itu. Apakah ada sesuatu yang mungkin telah memicu perasaan cemas ini, atau apakah ini datang secara tiba-tiba?
              </Text>
            </View>
          </View>
          <View style={styles.messageContainer}>
            <View style={styles.userMessage}>
              <Text style={styles.userMessageText}>
                Saya pikir ada beberapa tekanan di tempat kerja dan masalah di rumah. Semua terasa begitu menumpuk
              </Text>
            </View>
          </View>
          <View style={styles.messageContainer}>
            <View style={styles.botMessage}>
              <Text style={styles.botMessageText}>
                Saya mengerti, kehidupan bisa sangat menantang. Apakah Anda pernah mencoba teknik relaksasi seperti bernapas dalam-dalam atau berjalan-jalan untuk membantu mengatasi stres?
              </Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              ref={textInputRef}
              style={styles.textInput}
              placeholder="Ketik disini..."
              value={text}
              onChangeText={setText}
            />
            <TouchableOpacity style={styles.sendButton} onPress={() => console.log('Send pressed')}>
              <Icon name="arrow-forward" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#E6E6E6',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  messageContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  userMessage: {
    backgroundColor: '#187771',
    borderRadius: 20,
    padding: 10,
    alignSelf: 'flex-end',
    maxWidth: '75%',
  },
  userMessageText: {
    color: '#FFFFFF',
  },
  botMessage: {
    backgroundColor: '#BFD8AF',
    borderRadius: 20,
    padding: 10,
    alignSelf: 'flex-start',
    maxWidth: '75%',
  },
  botMessageText: {
    color: '#000000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 24,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 5,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#E6E6E6',
  },
});

export default ChatBotWidget;
