import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from '../Screens/Home'
import AddWorkout from '../Screens/AddWorkout'
import WorkoutDetail from '../Screens/WorkoutDetail'

const Stack = createNativeStackNavigator()

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddWorkout" component={AddWorkout} />
        <Stack.Screen name="WorkoutDetail" component={WorkoutDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
