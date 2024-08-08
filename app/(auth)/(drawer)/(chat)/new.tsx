import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@clerk/clerk-expo';
import { Stack } from 'expo-router';
import HeaderDropDown from '@/components/HeaderDropDown';
import MessageInput from '@/components/MessageInput';

const New = () => {
  const {signOut} = useAuth();
  const [botVersion, setBotVersion] = useState('3.5');
  return (
    <View>
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
      <View>
        <Text>Dummy Content</Text>
        <Button title='Sign out' onPress={()=> signOut()} />
      </View>
      <MessageInput onShouldSend={function (message: string): void {
        throw new Error('Function not implemented.');
      } } />
    </View>
  )
}

export default New

const styles = StyleSheet.create({})