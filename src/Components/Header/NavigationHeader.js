import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { tw } from '../../../tailwind'
import { BackButton } from './Assets'
import { CommonActions } from '@react-navigation/native'

export default function NavigationHeader({ navigation }) {
  return (
    <View style={tw`w-full bg-primary flex flex-row p-page items-center bg-[#21272E] text-white`}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.dispatch(CommonActions.goBack())
        }}
      >
        <View>
          <BackButton />
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}
