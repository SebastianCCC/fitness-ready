import { View, Text, Modal as FRModal, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import React from 'react'
import { tw } from '../../../tailwind'

export default function Modal({
  children,
  animation,
  transparent = true,
  toggleVisibility = false,
  handleModal,
}) {
  return (
    <FRModal
      animationType={animation}
      transparent={transparent}
      visible={toggleVisibility}
      onRequestClose={() => {}}
    >
      <TouchableWithoutFeedback onPress={() => handleModal(false)}>
        <View style={tw`w-full h-full`}>
          <View style={tw`w-full min-h-full justify-end`}>
            <View style={tw`bg-screen px-page pt-[35px] pb-[50px] rounded-md h-1/3`}>
              {children}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </FRModal>
  )
}
