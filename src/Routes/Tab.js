import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AddWorkout from '../Screens/AddWorkout'
import Home from '../Screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import { tw } from '../../tailwind'

const Tab = createMaterialBottomTabNavigator()

function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#4630EB"
        barStyle={{ backgroundColor: '#21272E' }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: <Text style={tw`text-[12px] font-extrabold uppercase italic`}>Home</Text>,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="AddWorkout"
          component={AddWorkout}
          options={{
            tabBarLabel: (
              <Text style={tw`text-[12px] font-extrabold uppercase italic`}>Add Workout</Text>
            ),
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Status"
          component={AddWorkout}
          options={{
            tabBarLabel: (
              <Text style={tw`text-[12px] font-extrabold uppercase italic`}>Status</Text>
            ),
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="fire" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Tabs
