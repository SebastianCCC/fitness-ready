import { StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import { tw } from '../../../tailwind'
import { PlusIcon } from './Assets'

export default function ExerciseCard({ func, id }) {
  const [display, setDisplay] = useState(true)
  const [name, setName] = useState(null)
  const [optionOne, setOptionOne] = useState(null)
  const [optionTwo, setOptionTwo] = useState(null)
  useEffect(() => {
    name && func((prev) => ({ ...prev, [id]: { name, option: { optionOne, optionTwo } } }))
  }, [name, optionOne, optionTwo])
  return (
    <View style={tw`flex flex-row my-[4px]`}>
      <TextInput
        onChangeText={(value) => setName(value)}
        keyboardAppearance="dark"
        placeholder="NAME YOUR EXERCISE"
        placeholderTextColor="#BCC3CD"
        style={tw`w-[55%] p-page bg-secondary rounded-md text-tertiary uppercase font-bold italic`}
      />
      {display ? (
        <TouchableHighlight
          onPress={() => setDisplay(!display)}
          style={tw`w-[20%] p-[6px] bg-secondary rounded-md mx-[8px]`}
        >
          <Text style={tw`text-tertiary text-center`}>
            <View>
              <PlusIcon />
            </View>
          </Text>
        </TouchableHighlight>
      ) : (
        <TextInput
          onChangeText={(value) => setOptionOne(value)}
          keyboardType="numeric"
          keyboardAppearance="dark"
          contextMenuHidden={true}
          autoCorrect={false}
          autoFocus={true}
          style={tw`text-tertiary text-center text-lg font-bold italic w-[20%] p-[6px] bg-secondary rounded-md mx-[8px]`}
        />
      )}
      {display ? (
        <TouchableHighlight
          onPress={() => setDisplay(!display)}
          style={tw`w-[20%] p-[6px] bg-secondary rounded-md`}
        >
          <Text style={tw`text-tertiary text-center`}>
            <View>
              <PlusIcon />
            </View>
          </Text>
        </TouchableHighlight>
      ) : (
        <TextInput
          onChangeText={(value) => setOptionTwo(value)}
          keyboardType="numeric"
          keyboardAppearance="dark"
          contextMenuHidden={true}
          autoCorrect={false}
          style={tw`text-tertiary text-center text-lg font-bold italic w-[20%] p-[6px] bg-secondary rounded-md`}
        />
      )}
    </View>
  )
}
