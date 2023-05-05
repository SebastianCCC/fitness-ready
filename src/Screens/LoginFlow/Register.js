import { View, Text, TouchableHighlight, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { tw } from '../../../tailwind'
import NavigationHeader from '../../Components/Header/NavigationHeader'
import db, { auth } from '../../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { CommonActions } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../../schema/RegisterSchema'
import { LinearGradient } from 'expo-linear-gradient'

export default function Register({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const RegisterUser = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error.message)
    })
  }
  return (
    <>
      <NavigationHeader navigation={navigation} />
      <View style={tw`flex-1 bg-screen p-page`}>
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
                    keyboardType="email-address"
                    keyboardAppearance="dark"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Email Address"
                    placeholderTextColor="#BCC3CD"
                    style={tw`w-full p-page bg-secondary/25 rounded-md text-white border ${
                      errors.email ? 'border-warning' : 'border-screen'
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
                    keyboardAppearance="dark"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Password"
                    placeholderTextColor="#BCC3CD"
                    style={tw`w-full p-page bg-secondary/25 rounded-md text-white border ${
                      errors.password ? 'border-warning' : 'border-screen'
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
                    keyboardAppearance="dark"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Confirm Password"
                    placeholderTextColor="#BCC3CD"
                    style={tw`w-full p-page bg-secondary/25 rounded-md text-white border ${
                      errors.confirmPassword ? 'border-warning' : 'border-screen'
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
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#4630EB', '#6453E2']}
              style={tw`w-[100%] m-auto mt-[30px] rounded-md`}
            >
              <TouchableHighlight onPress={handleSubmit(RegisterUser)} style={tw`p-page`}>
                <Text style={tw`text-tertiary uppercase text-base font-bold italic text-center`}>
                  Register
                </Text>
              </TouchableHighlight>
            </LinearGradient>
          </KeyboardAvoidingView>
        </View>
      </View>
    </>
  )
}
