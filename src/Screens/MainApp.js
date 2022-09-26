import { Text, View, StatusBar, SafeAreaView } from 'react-native'
import Header from '../Components/Header'
import Tabs from '../Routes/Tab'

export default function MainApp() {
  return (
    <>
      <Header />
      <Tabs />
    </>
  )
}
