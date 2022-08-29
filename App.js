import { Text, View, StatusBar, SafeAreaView } from 'react-native'
import { tw } from './tailwind'
import Header from './src/Components/Header'
import Tabs from './src/Routes/Tab'

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#21272E]`}>
      <Header />
      <Tabs />
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  )
}