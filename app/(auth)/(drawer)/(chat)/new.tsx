import { Button, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-expo';
import { Stack } from 'expo-router';
import HeaderDropDown from '@/components/HeaderDropDown';
import MessageInput from '@/components/MessageInput';
import MessageIdeas from '@/components/MessageIdeas';
import { Message, Role } from '@/utils/Interfaces';
import { FlashList } from '@shopify/flash-list';
import ChatMessage from '@/components/ChatMessage';

const DUMMY_MESSAGES :Message[]=[
  {
    content:'Hello, how can i help you today?',
    role:Role.Bot
  },
  {
    content:'I need help with my React Native app',
    role:Role.User
  },
  
]

const New = () => {
  const [botVersion, setBotVersion] = useState('3.5');
  const [messages, setMessages] = useState<Message[]>([]);

  const [height, setHeight] = useState(0);

  const onLayout =(event:any)=>{
    const {height}= event.nativeEvent.layout;
    setHeight(height)
  }

  const getCompeletion = async (message:string) => {
    console.log('Getting Completion for:', message);
  };


  return (
    <KeyboardAvoidingView
     style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <Stack.Screen
        options={{
          headerTitle: () => (
            <HeaderDropDown
              title={'Chat BOT'}
              items={[
                { key: '3.5', title: 'BOT- 3.5', icon: 'bolt' },
                { key: '4', title: 'BOT- 4', icon: 'sparkles' }
              ]}
              onSelect={(key) => setBotVersion(key)}
              selected={botVersion}
            />
          ),
        }}
      />
      <View style={{ flex: 1,}} onLayout={onLayout}>
       {messages.length== 0 &&(
        <View style={[styles.logoContainer,{marginTop:height/2-100}]}>
          <Image source={require('@/assets/images/logo-white(1).png')} style={styles.image} />
        </View>
       ) }
       <FlashList data={messages}
       renderItem={({item})=> <ChatMessage {...item} /> } 
       estimatedItemSize={400}
       inverted 
       contentContainerStyle={{paddingBottom:150,
        paddingTop:30
       }}
       keyboardDismissMode='on-drag'
       />
      </View>
      <View>
        {messages.length===0 &&<MessageIdeas onSelectCard={getCompeletion} />}
      <MessageInput onShouldSend={getCompeletion}/>
      </View>
    </KeyboardAvoidingView>
  );
};

export default New;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  logoContainer:{
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    width:60,
    height:60,
    backgroundColor:'#000',
    borderRadius:50
  },
  image:{
    width:50,
    height:50,
    resizeMode:'contain'
  }
  
});
