import { View, Text, TouchableHighlight, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { tw } from '../../tailwind'
import NavigationHeader from '../Components/Header/NavigationHeader'
import db, { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Register({ navigation: { navigate } }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const RegisterUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('MainApp')
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  return (
    <>
      <NavigationHeader navigate={navigate} />
      <View style={tw`flex-1 bg-[#21272E] p-page`}>
        <Text style={tw`text-white uppercase text-base font-bold italic text-center`}>
          Welcome To Fitness Ready
        </Text>
        <View style={tw`pt-[30px]`}>
          <Text style={tw`text-white uppercase text-sm font-bold`}>Register An Account</Text>
          <KeyboardAvoidingView behavior="padding">
            <TextInput
              placeholder="Username"
              placeholderTextColor="#BCC3CD"
              style={tw`w-full p-page mt-[10px] bg-secondary/25 rounded-md text-white`}
            />
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
              onPress={RegisterUser}
              style={tw`w-[100%] bg-additional p-page m-auto mt-[30px] rounded-md`}
            >
              <Text style={tw`text-tertiary uppercase text-base font-bold italic text-center`}>
                Register
              </Text>
            </TouchableHighlight>
          </KeyboardAvoidingView>
        </View>
      </View>
    </>
  )
}
