import { SafeAreaView, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from '../api/axios'

import FoodBox from '../FoodBox'


const RecomandedFoods = ({UserId}: {UserId: string}) => {

    const [recommandedFood1, setRecommandedFood1] = useState([])
    const [recommandedFood2, setRecommandedFood2] = useState([])
    const [recommandedFood3, setRecommandedFood3] = useState([])
    const [recommandedFood4, setRecommandedFood4] = useState([])
    //const [recommandedFood, setRecommandedFood] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        const response = await axios.get(`food/recommend/${UserId}`)
        setRecommandedFood1(response.data[0])
        setRecommandedFood2(response.data[1])
        setRecommandedFood3(response.data[2])
        setRecommandedFood4(response.data[3])
        setIsLoading(false)
    }

    return (
        <>
            {
                isLoading ? <ActivityIndicator size="large" color='#F68712' style={{ marginTop: 20, alignItems: 'center' }} /> 
                :
                <ScrollView style={styles.container} horizontal>
                    <FlatList
                        data={recommandedFood1}
                        renderItem={({ item }) => <FoodBox data={item} date='' name={`${item.name}`} />}
                        keyExtractor={item => item._id}
                        numColumns={80}
                    />
                    <FlatList
                        data={recommandedFood2}
                        renderItem={({ item }) => <FoodBox data={item} date='' name={`${item.name}`} />}
                        keyExtractor={item => item._id}
                        numColumns={80}
                    />
                    <FlatList
                        data={recommandedFood3}
                        renderItem={({ item }) => <FoodBox data={item} date='' name={`${item.name}`} />}
                        keyExtractor={item => item._id}
                        numColumns={80}
                    />
                    <FlatList
                        data={recommandedFood4}
                        renderItem={({ item }) => <FoodBox data={item} date='' name={`${item.name}`} />}
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