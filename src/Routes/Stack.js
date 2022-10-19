import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import SplashScreen from '../Screens/SplashScreen'
import Welcome from '../Screens/Welcome'
import LogIn from '../Screens/LogIn'
import Register from '../Screens/Register'
import MainApp from '../Screens/MainApp'
import Settings from '../Screens/Settings'
import WorkoutDetail from '../Screens/WorkoutDetail'

const Stack = createNativeStackNavigator()

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="WorkoutDetail" component={WorkoutDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
