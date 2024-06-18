import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, Platform, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router,Link } from 'expo-router';
import axios from 'axios';
import config from "../config";

const ChatBotWidget = () => {
  const [textInput, setTextInput] = useState('');
  const [data, setData] = useState([{type: 'assistant', 'text': "Selamat datang! Coba ceritakan apa keluhan mu"}]);
  const textInputRef = useRef(null);
  const apiKunci = config.GPT_KEY;
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const handleSend = async () => {
    setData([...data, {type: 'user', 'text': textInput}]);
    setTextInput('');
    try{
      const prompt = textInput;
      const response = await axios.post(apiUrl, {
        model: 'gpt-3.5-turbo-0125',
        temperature: 1,
        top_p: 1,
        messages: [{
            role: 'user',
            content: prompt
        }]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKunci}`
        }
      });
      
      if (response.status === 200) {
        const res = response.data.choices[0].message.content;
        setData([...data, {type: 'user', 'text': textInput}, {type: 'assistant', 'text': res}])
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch(error){
      console.error('Error:', error);
    }
    
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      textInputRef.current?.focus();
    });
    return () => {
      showSubscription.remove();
    };
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#F0F0F0',}}>
          <View style={styles.header}>
              <TouchableOpacity style={styles.iconButton} onPress={() => {
                router.back();
                setTextInput('');        
                setData([]);
                }}>
                <Icon name="arrow-back-outline" size={24} color="#FFF" />
              </TouchableOpacity>
            <Text style={styles.headerText}>HealthBot AI</Text>
          </View>
      
        <View style={{flex: 1, paddingBottom: 20}}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.messageContainer}>
                <View style={item.type === 'user'? styles.userMessage : styles.botMessage}>
                  <Text style={item.type === 'user'? styles.userMessageText : styles.botMessageText}>
                    {item.text}
                  </Text>
                </View>
            </View>
            )}
          />
        </View>
        <View style={styles.inputContainer}>
            <TextInput
              ref={textInputRef}
              style={styles.textInput}
              placeholder="Ketik disini..."
              value={textInput}
              onChangeText={txt => setTextInput(txt)}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Icon name="arrow-forward" size={24} color="#000" />
            </TouchableOpacity>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    backgroundColor: '#070F2B',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 10
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'white'
  },
  messageContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
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
    paddingBottom: 10
  },
  textInput: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
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
  },
});

export default ChatBotWidget;
