import { StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native'
import React from 'react'
import { tw } from '../../../tailwind'
import { PlusIcon } from './Assets'

export default function ExerciseCard({ func, id }) {
  function handleChange(value) {
    func((prev) => ({ ...prev, [id]: { name: value } }))
  }
  return (
    <View style={tw`flex flex-row my-[4px]`}>
      <TextInput
        onChangeText={handleChange}
        keyboardAppearance="dark"
        placeholder="NAME YOUR EXERCISE"
        placeholderTextColor="#BCC3CD"
        style={tw`w-[55%] p-page bg-secondary rounded-md text-tertiary uppercase font-bold italic`}
      />
      <TouchableHighlight style={tw`w-[20%] p-[6px] bg-secondary rounded-md mx-[8px]`}>
        <Text style={tw`text-tertiary text-center`}>
          <View>
            <PlusIcon />
          </View>
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={tw`w-[20%] p-[6px] bg-secondary rounded-md`}>
        <Text style={tw`text-tertiary text-center`}>
          <View>
            <PlusIcon />
          </View>
        </Text>
      </TouchableHighlight>
    </View>
  )
}
