import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { tw } from '../../tailwind'
import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../Util/StateContext'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schema/AddWorkoutSchema'
import { LinearGradient } from 'expo-linear-gradient'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import db from '../../firebase'
import ExerciseCard from '../Components/Main/ExerciseCard'
import { BiggerPlusIcon, MinusIcon } from '../Components/Main/Assets'

export default function AddWorkout({ navigation: { navigate } }) {
  const days = [
    {
      day: 'monday',
      short: 'mon',
    },
    {
      day: 'tuesday',
      short: 'tue',
    },
    {
      day: 'wednesday',
      short: 'wed',
    },
    {
      day: 'thursday',
      short: 'thu',
    },
    {
      day: 'friday',
      short: 'fri',
    },
    {
      day: 'saturday',
      short: 'sat',
    },
    {
      day: 'sunday',
      short: 'sun',
    },
  ]
  const dataUnits = [{ u: 'hours' }, { u: 'minutes' }, { u: 'seconds' }]
  const { user, workouts, setWorkouts } = useContext(StateContext)
  const [units, setUnits] = useState(dataUnits[1].u)
  const [workoutDay, setWorkoutDay] = useState(days[0].day)
  const [exercises, setExercises] = useState([])
  const [exerciseCount, setExerciseCount] = useState(1)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  console.log(exercises)
  const today = new Date().getDay()

  const createWorkout = async ({ name, time }) => {
    const path = doc(collection(db, 'users', user.uid, 'workouts'))
    await setDoc(path, {
      name,
      exercises,
      weekDay: workoutDay,
      date: { time, units },
    }).then(() => {
      navigate('SplashScreen')
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={tw`flex-1 bg-primary`}>
        <View style={tw`p-page`}>
          <View style={tw`w-full p-page bg-secondary/25 rounded-md text-white`}>
            {errors.name && (
              <Text style={tw`pb-[8px] text-warning text-sm`}>{errors.name?.message}</Text>
            )}
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardAppearance="dark"
                  placeholder="Name Your Workout"
                  placeholderTextColor="#BCC3CD"
                  autoFocus={true}
                  style={tw`w-full text-white`}
                />
              )}
              name="name"
            />
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`flex-grow-0`}>
          <View style={tw`flex flex-row w-full pl-page`}>
            {days.map(({ day, short }, i) => {
              return (
                <View
                  key={i}
                  style={tw`${
                    workoutDay == day ? 'bg-additional' : 'bg-secondary/25'
                  } rounded-md mr-2`}
                >
                  <TouchableWithoutFeedback
                    onPress={(e) => {
                      const path = e.target._internalFiberInstanceHandleDEV.child.pendingProps
                      setWorkoutDay(path == short && day)
                    }}
                  >
                    <Text style={tw`w-[72px] px-page py-space text-white uppercase text-center`}>
                      {short}
                    </Text>
                  </TouchableWithoutFeedback>
                </View>
              )
            })}
          </View>
        </ScrollView>
        <View style={tw`flex flex-row items-center p-page pt-[30px]`}>
          <View style={tw`w-[20%] p-page bg-secondary/25 rounded-md text-white`}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                  keyboardAppearance="dark"
                  contextMenuHidden={true}
                  placeholder="Time"
                  placeholderTextColor="#BCC3CD"
                  autoFocus={false}
                  style={tw`w-full text-tertiary text-center italic`}
                />
              )}
              name="time"
            />
          </View>
          {errors.time && <Text style={tw`text-warning text-sm ml-2`}>{errors.time?.message}</Text>}
        </View>
        <View style={tw`flex flex-row w-full pl-page`}>
          {dataUnits.map(({ u }, i) => {
            return (
              <View
                key={i}
                style={tw`${units == u ? 'bg-additional' : 'bg-secondary/25'} rounded-md mr-2`}
              >
                <TouchableWithoutFeedback
                  onPress={(e) => {
                    const path = e.target._internalFiberInstanceHandleDEV.child.pendingProps
                    setUnits(path == u && u)
                  }}
                >
                  <Text style={tw`w-[100px] px-page py-space text-white uppercase text-center`}>
                    {u}
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            )
          })}
        </View>
        <View style={tw`w-full my-[30px] p-page`}>
          <View style={tw`flex flex-row justify-end`}>
            <TouchableWithoutFeedback
              onPress={() => setExerciseCount((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              <View style={tw`mr-2`}>
                <MinusIcon />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => setExerciseCount((prev) => prev + 1)}>
              <View>
                <BiggerPlusIcon />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={tw`flex flex-row justify-between pt-page`}>
            <Text style={tw`text-lg uppercase italic text-white font-bold mb-[7px]`}>
              Exercises
            </Text>
            <View style={tw`flex flex-row justify-around w-[45%]`}>
              <Text style={tw`text-lg uppercase italic text-tertiary font-bold mb-[7px]`}>
                Reps
              </Text>
              <Text style={tw`text-lg uppercase italic text-tertiary font-bold mb-[7px]`}>
                Sets
              </Text>
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={tw`${errors.name || errors.time ? 'h-[35%]' : 'h-[40%]'}`}
          >
            <View style={tw`pb-[50px]`}>
              {Array.from(Array(exerciseCount)).map((data, i) => {
                return <ExerciseCard func={setExercises} key={i} id={i} />
              })}
            </View>
          </ScrollView>
        </View>
        <View style={tw`absolute bottom-0 w-full p-page`}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#4630EB', '#6453E2']}
            style={tw`w-[100%] m-auto mt-[30px] rounded-md`}
          >
            <TouchableHighlight onPress={handleSubmit(createWorkout)} style={tw`p-page`}>
              <Text style={tw`text-tertiary uppercase text-base font-bold italic text-center`}>
                Done
              </Text>
            </TouchableHighlight>
          </LinearGradient>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
