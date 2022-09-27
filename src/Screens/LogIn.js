import { View, Text, TouchableHighlight, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState, useContext } from 'react'
import { tw } from '../../tailwind'
import NavigationHeader from '../Components/Header/NavigationHeader'
import db, { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { CommonActions } from '@react-navigation/native'
import { StateContext } from '../Util/StateContext'

export default function LogIn({ navigation }) {
  const { email, setEmail, password, setPassword } = useContext(StateContext)
  const SignUserIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('MainApp')
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'MainApp' }],
          })
        )
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  return (
    <>
      <NavigationHeader navigation={navigation} />
      <View style={tw`flex-1 bg-[#21272E] p-page`}>
        <Text style={tw`text-white uppercase text-base font-bold italic text-center`}>
          Welcome Back
        </Text>
        <View style={tw`pt-[30px]`}>
          <Text style={tw`text-white uppercase text-sm font-bold`}>Account Information</Text>
          <KeyboardAvoidingView behavior="padding">
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email Address"
              placeholderTextColor="#BCC3CD"
              style={tw`w-full p-page mt-[10px] bg-secondary/25 rounded-md text-white`}
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              placeholderTextColor="#BCC3CD"
              style={tw`w-full p-page mt-[10px] bg-secondary/25 rounded-md text-white`}
              secureTextEntry
            />
            <TouchableHighlight
              onPress={SignUserIn}
              style={tw`w-[100%] bg-additional p-page m-auto mt-[30px] rounded-md`}
            >
              <Text style={tw`text-tertiary uppercase text-base font-bold italic text-center`}>
                Login
              </Text>
            </TouchableHighlight>
          </KeyboardAvoidingView>
        </View>
      </View>
    </>
  )
}
