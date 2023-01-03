import { StyleSheet, ScrollView } from 'react-native'

import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import SearchBar from '../components/SearchBar'
import TitleRow from '../components/TitleRow'
import RecomandedFoods from '../components/ScreenSections/RecomandedFoods'
import FoodsEaten from '../components/ScreenSections/FoodsEaten'


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
	
	return (
		<>
			<View style={styles.header}>
				<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'transparent', marginBottom: 20, marginTop: 10 }}>
					<Text style={styles.text}>Hello, </Text> 
					<Text style={[{ fontWeight: 'bold' }, styles.text]}>Jugalux</Text>
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
		fontSize: 24
	},
	box: {
		backgroundColor: 'transparent',
		marginBottom: 50
	}
});
