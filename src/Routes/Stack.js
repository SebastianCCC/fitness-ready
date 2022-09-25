import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Welcome from '../Screens/Welcome'

const Stack = createNativeStackNavigator()

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  )
}

export default MainStackNavigator
