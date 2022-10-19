import { View, TouchableHighlight, Text } from 'react-native'
import React from 'react'
import { tw } from '../../../tailwind'
import { LinearGradient } from 'expo-linear-gradient'

export default function WorkoutCard({ data, navigate }) {
  return (
    <View style={tw`w-[155px] mr-2`}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#4630EB', '#6453E2']}
        style={tw`rounded-md`}
      >
        <TouchableHighlight
          onPress={() => navigate('WorkoutDetail', { data })}
          style={tw`px-page py-space`}
        >
          <Text style={tw`text-white text-base uppercase italic font-bold`}>
            {data.name.length >= 12 ? data.name.slice(0, 12) + '...' : data.name}
          </Text>
        </TouchableHighlight>
      </LinearGradient>
    </View>
  )
}
