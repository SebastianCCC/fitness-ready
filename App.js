import { Text, View, StatusBar, SafeAreaView } from 'react-native'
import { tw } from './tailwind'

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 bg-primary`}>
      <View style={tw`flex-1 bg-primary`}>
        <Text style={tw`text-additional`}>Open up App.js to start working on your app!</Text>
        <StatusBar barStyle="light-content" />
      </View>
    </SafeAreaView>
  )
}
