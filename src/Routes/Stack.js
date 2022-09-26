import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Welcome from '../Screens/Welcome'
import LogIn from '../Screens/LogIn'
import Register from '../Screens/Register'
import MainApp from '../Screens/MainApp'

const Stack = createNativeStackNavigator()

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: '',
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#21272E',
          },
          headerShadowVisible: false,
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
