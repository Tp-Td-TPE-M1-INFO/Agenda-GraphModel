import { SafeAreaView, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from '../api/axios'

import FoodBox from '../FoodBox'


const RecomandedFoods = () => {

    const [recommandedFood, setRecommandedFood] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        const response = await axios.get(`food/recommend/${'63b6c873a6f874ba525c8ba7'}`)
        setRecommandedFood(response.data[0])
        setIsLoading(false)
    }
    
    return (
        <>
            {
                isLoading ? <ActivityIndicator size="large" color='#F68712' style={{ marginTop: 20, alignItems: 'center' }} /> 
                :
                <ScrollView style={styles.container} horizontal>
                    <FlatList
                        data={recommandedFood}
                        renderItem={({ item }) => <FoodBox date='' name={`${item.name}`} />}
                        keyExtractor={item => item._id}
                        numColumns={80}
                    />
                </ScrollView>
            } 
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto'
    }
})

export default RecomandedFoods