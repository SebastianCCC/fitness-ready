import { StatusBar, Text, TouchableHighlight, View } from 'react-native'
import { tw } from '../../../tailwind'
import { LogoIcon } from '../../../assets'
import { LinearGradient } from 'expo-linear-gradient'
import Button from '../../Components/Main/Button'
import { addOpacity } from '../../Util/AddOpacity'

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
        <Text style={tw`text-white uppercase text-[13px] font-bold text-center pb-page`}>
          Try Fitness Ready and start tracing your progress today!
        </Text>
        <Button handlePress={() => navigate('Register')} style="w-[90%] m-auto my-3" type="linear">
          <Text style={tw`text-white uppercase text-base font-bold italic text-center`}>
            Register
          </Text>
        </Button>
        <View style={tw`border-2 border-white/10 w-[90%] m-auto rounded-lg`}>
          <Button bgColor={addOpacity('#FFFFFF', 4)} handlePress={() => navigate('LogIn')}>
            <Text style={tw`text-white uppercase text-base font-bold italic text-center`}>
              Login
            </Text>
          </Button>
        </View>
      </View>
    </View>
  )
}
