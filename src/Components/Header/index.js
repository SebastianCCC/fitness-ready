import { Text, View, TouchableWithoutFeedback } from 'react-native'
import Svg, { Circle, Rect, Path } from 'react-native-svg'
import { tw } from '../../../tailwind'
import { LogoIcon, BellIcon, SettingsIcon, MenuIcon } from './Assets'

export default function Header({ navigate, toggle }) {
  return (
    <View style={tw`bg-primary flex flex-row justify-between p-page items-center bg-screen`}>
      <LogoIcon />
      <View style={tw`flex flex-row items-center`}>
        {toggle && (
          <TouchableWithoutFeedback onPress={() => toggle((prev) => !prev)}>
            <View>
              <MenuIcon />
            </View>
          </TouchableWithoutFeedback>
        )}
        <View style={tw`mx-4`}>
          <BellIcon />
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            navigate('Settings')
          }}
        >
          <View>
            <SettingsIcon />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}
