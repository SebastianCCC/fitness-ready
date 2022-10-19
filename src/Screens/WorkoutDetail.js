import { Text, View } from 'react-native'

export default function WorkoutDetail({ route }) {
  const { name, date, exercises, id, weekDay } = route.params
  return (
    <View>
      <Text>Workout Detail Page</Text>
    </View>
  )
}
