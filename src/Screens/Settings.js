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
import NavigationHeader from '../Components/Header/NavigationHeader'
import { LinearGradient } from 'expo-linear-gradient'

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
    <>
      <NavigationHeader navigation={navigation} />
      <View style={tw`flex-1 bg-primary`}>
        <Text style={tw`text-white uppercase text-sm font-bold p-page`}>Account Information</Text>
        <KeyboardAvoidingView behavior="padding">
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#4630EB', '#6453E2']}
            style={tw`px-page`}
          >
            <View style={tw`flex flex-row justify-between items-center`}>
              <Text style={tw`text-tertiary text-base uppercase font-bold italic`}>Username</Text>
              <TextInput
                onChangeText={(text) => setUsername(text)}
                value={username ? username : null}
                placeholder={!username ? 'Change Username' : null}
                placeholderTextColor="#BCC3CD"
                autoFocus={false}
                style={tw`w-[75%] text-tertiary text-right font-bold italic py-space`}
              />
            </View>
          </LinearGradient>
          <View
            style={tw`bg-secondary/50 px-page py-space mt-[10px] flex-row justify-between items-center`}
          >
            <Text style={tw`text-tertiary text-base uppercase font-bold italic`}>Email</Text>
            <Text style={tw`text-tertiary italic`}>{user.email}</Text>
          </View>
        </KeyboardAvoidingView>
        <View style={tw`mt-[30px]`}>
          <View style={tw`bg-secondary/50 px-page py-space flex-row justify-between items-center`}>
            <Text style={tw`text-tertiary text-base uppercase font-bold italic`}>User Id</Text>
            <Text style={tw`text-tertiary italic`}>{user.uid}</Text>
          </View>
          <View
            style={tw`bg-secondary/50 px-page py-space mt-[10px] flex-row justify-between items-center`}
          >
            <Text style={tw`text-tertiary text-base uppercase font-bold italic`}>Anonymous</Text>
            <Text style={tw`text-tertiary italic`}>{user.isAnonymous.toString()}</Text>
          </View>
          <View
            style={tw`bg-secondary/50 px-page py-space mt-[10px] flex-row justify-between items-center`}
          >
            <Text style={tw`text-tertiary text-base uppercase font-bold italic`}>Os</Text>
            <Text style={tw`text-tertiary italic`}>{Platform.Version}</Text>
          </View>
        </View>
        <View style={tw`flex-1 justify-end mb-[30px]`}>
          <TouchableHighlight
            onPress={SignUserOut}
            style={tw`bg-warning px-page py-space mt-[30px]`}
          >
            <Text style={tw`text-white uppercase font-bold italic text-center`}>Log out</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={DeleteAccount}
            style={tw`bg-secondary px-page py-space mt-[10px]`}
          >
            <Text style={tw`text-white uppercase font-bold italic text-center`}>
              delete account
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  )
}
