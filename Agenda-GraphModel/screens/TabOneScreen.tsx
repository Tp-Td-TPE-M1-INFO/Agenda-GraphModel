import { StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import SearchBar from '../components/SearchBar'
import TitleRow from '../components/TitleRow'
import RecomandedFoods from '../components/ScreenSections/RecomandedFoods'
import FoodsEaten from '../components/ScreenSections/FoodsEaten'
import { getUserData } from '../components/api/GetUserData'
import { useEffect } from 'react'


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

	const [userData, setUserData] = useState({
		username:""
	})

	useEffect(()=>{
		getData()
	})

	const getData = async () => {
		const user = await getUserData()
		setUserData({
			username: user.username
		})
	}

	
	return (
		<>
			<View style={styles.header}>
				<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'transparent', marginBottom: 20, marginTop: 10 }}>
					<Text style={styles.text}>Hello, </Text> 
					{ userData? (<Text style={[{ fontWeight: '500' }, styles.text]}>{userData.username}</Text>):("") }
					
				</View>
				<SearchBar />
			</View>

			<ScrollView style={styles.container}>

				<View style={styles.box}>
					<TitleRow title='Recommanded Food' />
					<RecomandedFoods />
				</View>

				<View style={styles.box}>
					<TitleRow title='Foods eaten' />
					<FoodsEaten />
				</View>
				
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		paddingVertical: 25,
		backgroundColor: 'transparent'
	},
	header: {
		backgroundColor: '#6B0079',
		padding: 10,
		paddingBottom: 15,
		borderBottomStartRadius: 25,
		borderBottomEndRadius: 25
	},
	text: {
		color: '#fff',
		fontSize: 22
	},
	box: {
		backgroundColor: 'transparent',
		marginBottom: 50
	}
});
