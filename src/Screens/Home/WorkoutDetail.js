import { Text, View, ScrollView, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import NavigationHeader from '../../Components/Header/NavigationHeader'
import { tw } from '../../../tailwind'
import { useContext, useEffect, useState } from 'react'
import Header from '../../Components/Header'
import { StateContext } from '../../Util/StateContext'
import { LinearGradient } from 'expo-linear-gradient'
import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import db from '../../../firebase'

export default function WorkoutDetail({ route, navigation: { navigate } }) {
  const { user, workouts, setWorkouts } = useContext(StateContext)
  const [toggleModel, setToggleModel] = useState(false)
  const { name, date, exercises, id, weekDay } = route.params.data

  const DeleteWorkout = async () => {
    await deleteDoc(doc(db, 'users', user.uid, 'workouts', id)).then(() => {
      navigate('SplashScreen')
    })
  }

  const DeleteExercise = async (i) => {
    delete exercises[i]
    const Document = doc(db, 'users', user.uid, 'workouts', id)

    await updateDoc(Document, {
      exercises,
    }).then(() => {
      console.log(exercises)
      navigate('SplashScreen')
    })
  }
  return (
    <>
      <Header navigate={navigate} toggle={setToggleModel} />
      <View style={tw`flex-1 bg-primary`}>
        {toggleModel && (
          <TouchableWithoutFeedback onPress={() => setToggleModel(false)}>
            <View style={tw`absolute bg-primary/95 w-full h-full z-20`}>
              <View style={tw`w-full absolute bottom-0 p-page`}>
                <View
                  style={tw`bg-secondary p-page rounded-md flex-row justify-between items-center`}
                >
                  <Text style={tw`text-tertiary text-base uppercase font-bold italic`}>day</Text>
                  <Text style={tw`text-tertiary italic capitalize`}>{weekDay}</Text>
                </View>
                <View
                  style={tw`bg-secondary p-page my-[9px] rounded-md flex-row justify-between items-center`}
                >
                  <Text style={tw`text-tertiary text-base uppercase font-bold italic`}>id</Text>
                  <Text style={tw`text-tertiary italic`}>{id}</Text>
                </View>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#4630EB', '#6453E2']}
                  style={tw`w-full rounded-md`}
                >
                  <TouchableHighlight onPress={DeleteWorkout} style={tw`p-page`}>
                    <Text
                      style={tw`text-tertiary text-center text-base uppercase italic font-bold`}
                    >
                      Delete Workout
                    </Text>
                  </TouchableHighlight>
                </LinearGradient>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
        <Text
          style={tw`text-white text-center text-lg tracking-widest uppercase font-bold italic pt-[30px] pb-page`}
        >
          {name}
        </Text>
        <Text
          style={tw`text-white text-center text-lg tracking-widest uppercase font-light italic`}
        >
          {`${date.time} ${date.units}`}
        </Text>
        <View style={tw`px-page`}>
          <Text style={tw`text-white text-lg uppercase font-bold italic mt-[100px]`}>
            exercises
          </Text>
          <View style={tw`w-full h-[1px] bg-white mt-[11px]`}></View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {exercises &&
            Object.keys(exercises).map(function (i) {
              console.log(exercises[i].option)
              return (
                <View style={tw`bg-secondary/55 p-[9px] rounded-md m-[15px]`} key={i}>
                  <View style={tw`w-full p-page bg-secondary rounded-md`}>
                    <Text style={tw`text-tertiary text-base uppercase italic font-bold`}>
                      {exercises[i].name}
                    </Text>
                  </View>
                  <View style={tw`flex flex-row pt-[9px]`}>
                    <View style={tw`w-1/3 p-page bg-secondary rounded-md`}>
                      <Text
                        style={tw`text-tertiary text-center text-base uppercase italic font-bold`}
                      >
                        {exercises[i].option.optionOne || 'no'} reps
                      </Text>
                    </View>
                    <View style={tw`w-1/3 px-[9px]`}>
                      <View style={tw`p-page bg-secondary rounded-md`}>
                        <Text
                          style={tw`text-tertiary text-center text-base uppercase italic font-bold`}
                        >
                          {exercises[i].option.optionTwo || 'no'} sets
                        </Text>
                      </View>
                    </View>
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={['#4630EB', '#6453E2']}
                      style={tw`w-1/3 rounded-md`}
                    >
                      <TouchableHighlight onPress={() => DeleteExercise(i)} style={tw`p-page`}>
                        <Text
                          style={tw`text-tertiary text-center text-base uppercase italic font-bold`}
                        >
                          Delete
                        </Text>
                      </TouchableHighlight>
                    </LinearGradient>
                  </View>
                </View>
              )
            })}
        </ScrollView>
      </View>
    </>
  )
}
