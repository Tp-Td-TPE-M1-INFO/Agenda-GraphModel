import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName, Pressable } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import AccountScreen from '../screens/AccountScreen'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types'
import LinkingConfiguration from './LinkingConfiguration'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
		<RootNavigator />
		</NavigationContainer>
	)
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
	  <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
	  <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
		<BottomTab.Screen
			name="TabOne"
			component={TabOneScreen}
			options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
			title: 'Home',
			headerTintColor: '#fff',
			tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
			headerStyle: { backgroundColor: Colors[colorScheme].text },
			headerRight: () => (
				<Pressable
					onPress={() => navigation.navigate('Modal')}
					style={({ pressed }) => ({
						opacity: pressed ? 0.5 : 1,
					})}
				>
				<SimpleLineIcons 
					name="graph" 
					size={25} 
					color={Colors[colorScheme].background}
					style={{ marginRight: 15 }}
				/>
				</Pressable>
			),
			})}
		/>
		<BottomTab.Screen
			name="TabTwo"
			component={TabTwoScreen}
			options={({ navigation }: RootTabScreenProps<'TabTwo'>) => ({
			title: 'Calendar',
			tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
			headerTintColor: '#fff',
			headerStyle: { backgroundColor: Colors[colorScheme].text },
			headerRight: () => (
				<Pressable
				onPress={() => navigation.navigate('Modal')}
				style={({ pressed }) => ({
					opacity: pressed ? 0.5 : 1,
				})}>
				<SimpleLineIcons 
					name="graph" 
					size={25} 
					color={Colors[colorScheme].background}
					style={{ marginRight: 15 }}
				/>
				</Pressable>
			),
			})}
		/>
		<BottomTab.Screen
			name="TabThree"
			component={AccountScreen}
			options={({ navigation }: RootTabScreenProps<'TabThree'>) => ({
			title: 'Account',
			tabBarIcon: ({ color }) => <TabBarIcon name="user-circle" color={color} />,
			headerTintColor: '#fff',
			headerStyle: { backgroundColor: Colors[colorScheme].text },
			headerRight: () => (
				<Pressable
				onPress={() => navigation.navigate('Modal')}
				style={({ pressed }) => ({
					opacity: pressed ? 0.5 : 1,
				})}>
				<SimpleLineIcons 
					name="graph" 
					size={25} 
					color={Colors[colorScheme].background}
					style={{ marginRight: 15 }}
				/>
				</Pressable>
			),
			})}
		/>
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
