import {
  Platform,
  View,
  Text,
  TouchableHighlight,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native'
import { tw } from '../../tailwind'
import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../Util/StateContext'
import { signOut, deleteUser } from 'firebase/auth'
import { CommonActions } from '@react-navigation/native'
import { auth } from '../../firebase'

export default function Settings({ navigation }) {
  const { user } = useContext(StateContext)
  const [username, setUsername] = useState(user.displayName)

  const SignUserOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('Welcome')
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'Welcome' }],
          })
        )
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const DeleteAccount = () => {
    deleteUser(auth.currentUser)
      .then(() => {
        navigation.navigate('Welcome')
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'Welcome' }],
          })
        )
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return (
    <View style={tw`flex-1 bg-primary p-page`}>
      <KeyboardAvoidingView behavior="padding">
        <View style={tw`mt-[10px]`}>
          <TextInput
            onChangeText={(text) => setUsername(text)}
            value={username ? username : null}
            placeholder={!username ? 'Change Username' : null}
            placeholderTextColor="#ffffff"
            autoFocus={false}
            style={tw`w-full p-page bg-additional text-center rounded-md text-white text-base font-bold italic`}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={tw`mt-[30px]`}>
        <View style={tw`bg-secondary/50 p-page flex-row justify-between items-center rounded-md`}>
          <Text style={tw`text-tertiary text-base uppercase font-bold italic`}>User Id</Text>
          <Text style={tw`text-tertiary italic`}>{user.uid}</Text>
        </View>
        <View
          style={tw`bg-secondary/50 p-page mt-[10px] flex-row justify-between items-center rounded-md`}
        >
          <Text style={tw`text-tertiary text-base uppercase font-bold italic`}>Email</Text>
          <Text style={tw`text-tertiary italic`}>{user.email}</Text>
        </View>
        <View
          style={tw`bg-secondary/50 p-page mt-[10px] flex-row justify-between items-center rounded-md`}
        >
          <Text style={tw`text-tertiary text-base uppercase font-bold italic`}>Anonymous</Text>
          <Text style={tw`text-tertiary italic`}>{user.isAnonymous.toString()}</Text>
        </View>
        <View
          style={tw`bg-secondary/50 p-page mt-[10px] flex-row justify-between items-center rounded-md`}
        >
          <Text style={tw`text-tertiary text-base uppercase font-bold italic`}>Os</Text>
          <Text style={tw`text-tertiary italic`}>{Platform.Version}</Text>
        </View>
      </View>
      <TouchableHighlight
        onPress={SignUserOut}
        style={tw`bg-secondary p-page mt-[30px] rounded-md`}
      >
        <Text style={tw`text-white uppercase text-base font-bold italic text-center`}>Log out</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={DeleteAccount}
        style={tw`bg-warning p-page mt-[10px] rounded-md`}
      >
        <Text style={tw`text-white uppercase text-base font-bold italic text-center`}>
          delete account
        </Text>
      </TouchableHighlight>
    </View>
  )
}
