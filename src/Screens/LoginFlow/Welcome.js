import { StatusBar, Text, TouchableHighlight, View } from 'react-native'
import { tw } from '../../../tailwind'
import { LogoIcon } from '../../../assets'
import { LinearGradient } from 'expo-linear-gradient'

export default function Welcome({ navigation: { navigate } }) {
  return (
    <View style={tw`flex-1 bg-screen p-page`}>
      <View style={tw`flex-1 flex-row justify-center items-center`}>
        <LogoIcon />
        <Text style={tw`text-white uppercase text-[22px] font-bold italic text-center p-page`}>
          Fitness Ready
        </Text>
      </View>
      <View style={tw`mt-80`}>
        <Text style={tw`text-additional uppercase text-base font-bold italic text-center p-page`}>
          Welcome to Fitness Ready
        </Text>
        <Text style={tw`text-secondary uppercase text-[13px] font-bold italic text-center`}>
          Try Fitness Ready and start tracing your progress
        </Text>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#4630EB', '#6453E2']}
          style={tw`w-[90%] m-auto mb-[10px] mt-9 rounded-md`}
        >
          <TouchableHighlight onPress={() => navigate('Register')} style={tw`p-page`}>
            <Text style={tw`text-tertiary uppercase text-base font-bold italic text-center`}>
              Register
            </Text>
          </TouchableHighlight>
        </LinearGradient>
        <TouchableHighlight
          onPress={() => navigate('LogIn')}
          style={tw`w-[90%] bg-secondary p-page m-auto rounded-md`}
        >
          <Text style={tw`text-tertiary uppercase text-base font-bold italic text-center`}>
            Login
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}
