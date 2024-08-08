import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import HeaderDropDown from '@/components/HeaderDropDown'
import { Stack } from 'expo-router'

const Dalle = () => {
  return (
    <View style={defaultStyles.pageContainer}>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <HeaderDropDown
              title="Dall·E"
              items={[
                { key: 'share', title: 'Share GPT', icon: 'square.and.arrow.up' },
                { key: 'details', title: 'See Details', icon: 'info.circle' },
                { key: 'keep', title: 'Keep in Sidebar', icon: 'pin' },
              ]}
              onSelect={() => {}}
            />
          ),
        }}
      />
    </View>
  )
}

export default Dalle

const styles = StyleSheet.create({})