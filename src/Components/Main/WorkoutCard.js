import { View, TouchableHighlight, Text } from 'react-native'
import React from 'react'
import { tw } from '../../../tailwind'
import { LinearGradient } from 'expo-linear-gradient'
import Button from './Button'
import { addOpacity } from '../../Util/AddOpacity'

export default function WorkoutCard({ data, navigate }) {
  const MAX_TRUNCATE_LENGTH = 25

  return (
    <View style={tw`h-[80px] mb-3 border-2 border-white/10 rounded-lg`}>
      <Button
        handlePress={() => navigate('WorkoutDetail', { data })}
        style="justify-center items-center h-full"
        bgColor={addOpacity('#FFFFFF', 4)}
      >
        <Text style={tw`text-white text-base uppercase italic font-bold`}>
          {data.name.length >= MAX_TRUNCATE_LENGTH
            ? data.name.slice(0, MAX_TRUNCATE_LENGTH) + '...'
            : data.name}
        </Text>
      </Button>
    </View>
  )
}
