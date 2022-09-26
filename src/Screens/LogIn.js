import { View, Text, TouchableHighlight, KeyboardAvoidingView, TextInput } from 'react-native'
import React from 'react'
import { tw } from '../../tailwind'
import NavigationHeader from '../Components/Header/NavigationHeader'

export default function LogIn({ navigation: { navigate } }) {
  return (
    <>
      <NavigationHeader navigate={navigate} />
      <View style={tw`flex-1 bg-[#21272E] p-page`}>
        <Text style={tw`text-white uppercase text-base font-bold italic text-center`}>
          Welcome Back
        </Text>
        <View style={tw`pt-[30px]`}>
          <Text style={tw`text-white uppercase text-sm font-bold`}>Account Information</Text>
          <KeyboardAvoidingView behavior="padding">
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#BCC3CD"
              style={tw`w-full p-page mt-[10px] bg-secondary/25 rounded-md text-white`}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#BCC3CD"
              style={tw`w-full p-page mt-[10px] bg-secondary/25 rounded-md text-white`}
              secureTextEntry
            />
            <TouchableHighlight
              onPress={() => navigate('MainApp')}
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
