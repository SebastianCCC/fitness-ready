import { Text, View } from 'react-native'
import { tw } from '../../tailwind'

export default function Home() {
  return (
    <View style={tw`flex-1 bg-primary`}>
      <Text>Home Page</Text>
    </View>
  )
}
