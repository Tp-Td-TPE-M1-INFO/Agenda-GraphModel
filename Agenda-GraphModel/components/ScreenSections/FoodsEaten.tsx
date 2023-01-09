import { FlatList, View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from '../api/axios'
import FoodBox from '../FoodBox'


const FoodsEaten = ({UserId}: {UserId: string}) => {

    const [foodEaten, setFoodEaten] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        const response = await axios.get(`nutrition/get-nutrition/${UserId}`)
        console.log(response.data)
        setFoodEaten(response.data)
        setIsLoading(false)
    }

    return (
        <>
            {
                isLoading ? <ActivityIndicator size="large" color='#F68712' style={{ marginTop: 20 }} /> 
                : 
                <FlatList
                    data={foodEaten}
                    renderItem={({ item }) => <FoodBox data={item} date={`${item.date}`} name={`${item.foods}`} />}
                    keyExtractor={item => item._id}
                    numColumns={2}
                />
            }
        </>      
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