import React from 'react'
import { TouchableWithoutFeedback, View, Text } from 'react-native'
import { tw } from '../../../tailwind'
import { BackButton } from './Assets'
import { CommonActions } from '@react-navigation/native'

export default function NavigationHeader({ navigation, userName, currentUsername, save }) {
  return (
    <View
      style={tw`w-full bg-primary flex flex-row justify-between p-page items-center bg-[#21272E] text-white`}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.dispatch(CommonActions.goBack())
        }}
      >
        <View>
          <BackButton />
        </View>
      </TouchableWithoutFeedback>
      {currentUsername !== userName && (
        <TouchableWithoutFeedback onPress={save}>
          <View>
            <Text style={tw`text-white`}>Save</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  )
}
