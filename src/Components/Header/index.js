import { Text, View } from 'react-native'
import Svg, { Circle, Rect, Path } from 'react-native-svg'
import { tw } from '../../../tailwind'
import { LogoIcon, BellIcon } from './Assets'

export default function AddWorkout() {
  return (
    <View style={tw`bg-primary flex flex-row justify-between p-page items-center bg-[#21272E]`}>
      <LogoIcon />
      <BellIcon />
    </View>
  )
}
