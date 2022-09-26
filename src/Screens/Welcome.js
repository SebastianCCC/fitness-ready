import { StatusBar, Text, TouchableHighlight, View } from 'react-native'
import { tw } from '../../tailwind'
import { LogoIcon } from '../../assets'

export default function Welcome({ navigation: { navigate } }) {
  return (
    <View style={tw`flex-1 bg-[#21272E] p-page`}>
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
        <TouchableHighlight
          onPress={() => navigate('Register')}
          style={tw`w-[90%] bg-additional p-page m-auto mb-[10px] mt-9 rounded-md`}
        >
          <Text style={tw`text-tertiary uppercase text-base font-bold italic text-center`}>
            Register
          </Text>
        </TouchableHighlight>
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
