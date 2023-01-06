import { FlatList, View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from '../api/axios'
import FoodBox from '../FoodBox'

const FoodsEaten = () => {

    const [foodEaten, setFoodEaten] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        const response = await axios.get(`nutrition/get-nutrition/${'63b6c873a6f874ba525c8ba7'}`)
        setFoodEaten(response.data)
    }

    return (

        <FlatList
            data={foodEaten}
            renderItem={({ item }) => <FoodBox date={`${item.date}`} name={`${item.foods}`} />}
            keyExtractor={item => item._id}
            numColumns={2}
        />      
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