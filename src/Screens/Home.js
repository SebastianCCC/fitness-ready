import { Text, View, ScrollView } from 'react-native'
import { tw } from '../../tailwind'
import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../Util/StateContext'

export default function Home() {
  const { user, workouts, setWorkouts } = useContext(StateContext)
  console.log(workouts)
  return (
    <View style={tw`flex-1 bg-primary p-page`}>
      <Text style={tw`text-white text-base uppercase italic font-extrabold`}>Workouts</Text>
      <ScrollView horizontal>
        <View style={tw`flex-row justify-between overflow-hidden pt-page`}>
          {workouts.map(({ name }, i) => (
            <View style={tw`w-[115px]`} key={i}>
              <Text style={tw`text-white text-base uppercase italic font-light`}>{name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
