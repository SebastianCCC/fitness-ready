import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { tw } from '../../../tailwind'
import { LinearGradient } from 'expo-linear-gradient'

export default function Button({
  children,
  disabled = false,
  loading = false,
  type,
  bgColor = '#FFFFFF',
  style,
  handlePress,
}) {
  const typeOfButton = () => {
    switch (type) {
      case 'linear': {
        return (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#4630EB', '#6453E2']}
            style={tw`p-page rounded-md w-full ${style}`}
          >
            {children}
          </LinearGradient>
        )
      }
      default: {
        return <View style={tw`bg-[${bgColor}] p-page rounded-md w-full ${style}`}>{children}</View>
      }
    }
  }

  return (
    <View style={tw`relative`}>
      {disabled && <View style={tw`absolute inset-0 bg-primary/60 z-10`} />}
      <TouchableOpacity onPress={disabled || loading ? null : handlePress} style={tw`w-full`}>
        {typeOfButton()}
      </TouchableOpacity>
    </View>
  )
}
