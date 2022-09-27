import { View, Text, TouchableHighlight, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { tw } from '../../tailwind'
import NavigationHeader from '../Components/Header/NavigationHeader'
import db, { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { CommonActions } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schema/RegisterSchema'

export default function Register({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const RegisterUser = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
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
          Welcome To Fitness Ready
        </Text>
        <View style={tw`pt-[30px]`}>
          <Text style={tw`text-white uppercase text-sm font-bold`}>Register An Account</Text>
          <KeyboardAvoidingView behavior="padding">
            <View style={tw`mt-[10px]`}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Email Address"
                    placeholderTextColor="#BCC3CD"
                    style={tw`w-full p-page bg-secondary/25 rounded-md text-white border ${
                      errors.email ? 'border-warning' : 'border-[#21272E]'
                    }`}
                  />
                )}
                name="email"
              />
            </View>
            <View style={tw`mt-[10px]`}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Password"
                    placeholderTextColor="#BCC3CD"
                    style={tw`w-full p-page bg-secondary/25 rounded-md text-white border ${
                      errors.password ? 'border-warning' : 'border-[#21272E]'
                    }`}
                    secureTextEntry
                  />
                )}
                name="password"
              />
            </View>
            <View style={tw`mt-[10px]`}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Confirm Password"
                    placeholderTextColor="#BCC3CD"
                    style={tw`w-full p-page bg-secondary/25 rounded-md text-white border ${
                      errors.confirmPassword ? 'border-warning' : 'border-[#21272E]'
                    }`}
                    secureTextEntry
                  />
                )}
                name="confirmPassword"
              />
            </View>
            {Boolean(Object.keys(errors).length) && (
              <Text style={tw`mt-[10px] text-warning`}>
                {errors.email?.message ||
                  errors.password?.message ||
                  errors.confirmPassword?.message}
              </Text>
            )}
            <TouchableHighlight
              onPress={handleSubmit(RegisterUser)}
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
