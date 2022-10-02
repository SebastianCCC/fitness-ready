import { Text, View, ScrollView } from 'react-native'
import { tw } from '../../tailwind'

const days = [
  {
    day: 'mon',
  },
  {
    day: 'tue',
  },
  {
    day: 'wed',
  },
  {
    day: 'thu',
  },
  {
    day: 'fri',
  },
  {
    day: 'sat',
  },
  {
    day: 'sun',
  },
]

export default function Home() {
  return (
    <View style={tw`flex-1 bg-primary p-page`}>
      <Text style={tw`text-white text-base uppercase italic font-extrabold`}>Workouts</Text>
      <ScrollView horizontal>
        <View style={tw`flex-row justify-between overflow-hidden`}>
          {days.map(({ day }, i) => (
            <View style={tw`w-[115px]`} key={i}>
              <Text style={tw`text-white text-base uppercase italic font-light`}>{day}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
