import { SafeAreaView, ScrollView, StyleSheet, RefreshControl, Dimensions, Pressable } from 'react-native'
import React, { useState, useRef, useCallback, useEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { convertToDate } from '../components/Functions'
import FormData from '../components/ScreenSections/FormData'
import axios from '../components/api/axios'

import { Text, View } from '../components/Themed'
import { getUserId } from '../components/api/GetUserData'


//Refresh control
const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function TabTwoScreen() {
    

    const [date, setDate] = useState(new Date())
    const [foodList, setFoodList] = useState<any>([])  
    const [refreshing, setRefreshing] = useState(false)
    const [key, setKey] = useState(0)
    const [UserId, setUserId] = useState("")

    useEffect(() => {
        getFoods()
    }, [])
    
    const getFoods = async() => {
        let Id = await getUserId()
		setUserId(Id)
        const response = await axios.get(`nutrition/get-nutrition/${UserId}`)
        setFoodList(response.data)
    }

    // Get food data corresponding to the day selected
    const filterFood = foodList.find((f: any) => { 
        return f.date == date.toDateString()
    })
    
    //Date picker code
    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate
        setDate(currentDate)
    }

    const showMode = (currentMode: any) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        })
    }
    
    const showDatepicker = () => {
        showMode('date')
    }

    //Refresh control
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setKey((prevKey) => prevKey + 1)
        wait(2000).then(() => setRefreshing(false))
    }, [date])


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.date}>
                    {convertToDate(date)}
                </Text>
                <Pressable onPress={showDatepicker}>
                    <FontAwesome name='calendar' color='#F68712' size={25} style={{ margin: 10 }} />
                </Pressable>
            </View>
        
            <ScrollView 
                style={styles.formContent}
                key={key}
                refreshControl={
                    <RefreshControl
                    colors={['#6B0079']}
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                }

            >
                
                {
                    <FormData date={date.toDateString()} selectedFood={filterFood} UserId={UserId} />
                }
            
            </ScrollView>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 10,
        backgroundColor: '#FEEDE2',
        height: Dimensions.get('window').height
    },
    date: {
        color: '#F68712',
        fontSize: 18,
        padding: 15,
        fontWeight: 'bold',
    },
    formContent: {
        marginTop: 15,
        margin: 10
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 6,
        elevation: 1,
        marginBottom: 10,
        borderRightWidth: 5,
        borderEndColor: '#F68712',
        paddingTop: 10,
        paddingBottom: 15
    },
    title: {
        fontSize: 16,
        color: 'black'
    }
})