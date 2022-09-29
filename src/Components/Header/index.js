import { Text, View, TouchableWithoutFeedback } from 'react-native'
import Svg, { Circle, Rect, Path } from 'react-native-svg'
import { tw } from '../../../tailwind'
import { LogoIcon, BellIcon, SettingsIcon } from './Assets'

export default function Header({ navigation }) {
  return (
    <View style={tw`bg-primary flex flex-row justify-between p-page items-center bg-[#21272E]`}>
      <LogoIcon />
      <View style={tw`flex flex-row items-center`}>
        <BellIcon />
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Settings')
          }}
        >
          <View style={tw`ml-4`}>
            <SettingsIcon />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}
