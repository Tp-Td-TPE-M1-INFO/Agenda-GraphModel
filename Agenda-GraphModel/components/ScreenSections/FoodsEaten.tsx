import { FlatList, View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import FoodBox from '../FoodBox'

const FoodsEaten = () => {

    let items = [<FoodBox />, <FoodBox />, <FoodBox />, <FoodBox />, <FoodBox />]

    return (
        // <ScrollView style={styles.container} numColumns={2}>
        //     <FoodBox />
        //     <FoodBox />
        //     <FoodBox />
        //     <FoodBox />
        // </ScrollView>

        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({ item }) => item}
                //keyExtractor={items}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        display: 'flex',
        flexDirection: 'row',
    },
    item: {
        backgroundColor: 'silver'
    }
})

export default FoodsEaten