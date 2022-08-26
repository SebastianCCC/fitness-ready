import { Text, View } from 'react-native'
import { tw } from '../../tailwind'

export default function Home() {
  return (
    <View style={tw`flex-1 bg-primary p-page`}>
      <Text style={tw`text-white text-base uppercase italic font-extrabold`}>Workouts</Text>
    </View>
  )
}
