import { View, Text } from 'react-native'
import { tw } from '../../tailwind'
import { LogoIcon } from '../../assets'
import React from 'react'
import { useContext, useEffect, useState } from 'react'
import db, { auth } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { CommonActions } from '@react-navigation/native'
import { StateContext } from '../Util/StateContext'

export default function SplashScreen({ navigation }) {
  const { setUser } = useContext(StateContext)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        navigation.navigate('MainApp')
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'MainApp' }],
          })
        )
      }
      if (!user) {
        navigation.navigate('Welcome')
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'Welcome' }],
          })
        )
      }
    })
  }, [])
  return (
    <View style={tw`flex-1 bg-[#21272E] p-page`}>
      <View style={tw`flex-1 flex-row justify-center items-center`}>
        <LogoIcon />
        <Text style={tw`text-white uppercase text-[22px] font-bold italic text-center p-page`}>
          Fitness Ready
        </Text>
      </View>
    </View>
  )
}
