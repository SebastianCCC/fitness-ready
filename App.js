import { Text, View, StatusBar, SafeAreaView } from 'react-native'
import { tw } from './tailwind'
import Stack from './src/Routes/Stack'
import { StateProvider } from './src/Util/StateContext'

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#21272E]`}>
      <StateProvider>
        <Stack />
        <StatusBar barStyle="light-content" />
      </StateProvider>
    </SafeAreaView>
  )
}
