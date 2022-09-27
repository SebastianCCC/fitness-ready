import { View, Text, TouchableHighlight, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { tw } from '../../tailwind'
import NavigationHeader from '../Components/Header/NavigationHeader'
import db, { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { CommonActions } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schema/RegisterSchema'

export default function LogIn({ navigation }) {
  const [err, setErr] = useState(null)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const SignUserIn = ({ email, password }) => {
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
        console.log(error.code)
        setErr(error.code)
        setTimeout(() => setErr(null), 5000)
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
            {(Boolean(Object.keys(errors).length) ||
              err == 'auth/user-not-found' ||
              err == 'auth/wrong-password') && (
              <Text style={tw`mt-[10px] text-warning`}>
                {errors.email?.message || errors.password?.message || 'Wrong password or email'}
              </Text>
            )}
            <TouchableHighlight
              onPress={handleSubmit(SignUserIn)}
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
