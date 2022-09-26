import { View, Text } from 'react-native'
import React from 'react'
import NavigationHeader from '../Components/Header/NavigationHeader'

export default function LogIn({ navigation: { navigate } }) {
  return (
    <>
      <NavigationHeader navigate={navigate} />
      <View>
        <Text>LogIn</Text>
      </View>
    </>
  )
}
