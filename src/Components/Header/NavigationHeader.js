import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { tw } from '../../../tailwind'
import { BackButton } from './Assets'

export default function NavigationHeader({ navigate }) {
  return (
    <View style={tw`w-full bg-primary flex flex-row p-page items-center bg-[#21272E] text-white`}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigate('Welcome')
        }}
      >
        <View>
          <BackButton />
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}
