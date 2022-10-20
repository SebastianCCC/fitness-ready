import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Landing from './Landing'
import WorkoutDetail from './WorkoutDetail'

const Stack = createNativeStackNavigator()

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="WorkoutDetail" component={WorkoutDetail} />
    </Stack.Navigator>
  )
}

export default MainStackNavigator
