import { Text, View, ScrollView } from 'react-native'
import { tw } from '../../../tailwind'
import { useContext, useEffect, useState } from 'react'
import Header from '../../Components/Header'
import { StateContext } from '../../Util/StateContext'
import WorkoutCard from '../../Components/Main/WorkoutCard'

export default function Home({ navigation: { navigate } }) {
  const { user, workouts, setWorkouts } = useContext(StateContext)
  console.log(workouts)
  return (
    <>
      <Header navigate={navigate} />
      <View style={tw`flex-1 bg-primary`}>
        <Text style={tw`text-white text-base uppercase italic font-extrabold p-page`}>
          Workouts
        </Text>
        <ScrollView horizontal>
          <View style={tw`flex-row justify-between overflow-hidden pl-page`}>
            {workouts.map((data, i) => (
              <WorkoutCard data={data} navigate={navigate} key={i} />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  )
}
