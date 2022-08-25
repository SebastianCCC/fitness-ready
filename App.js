import { Text, View, StatusBar, SafeAreaView } from 'react-native'
import { tw } from './tailwind'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackNavigator } from './src/Routes'

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 bg-primary`}>
      <NavigationContainer>
        <MainStackNavigator />
        <StatusBar barStyle="light-content" />
      </NavigationContainer>
    </SafeAreaView>
  )
}
