import { SafeAreaView, TextInput, StyleSheet, Switch, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { addDays } from 'date-fns'
import { DatePicker } from 'react-native-week-month-date-picker'
import { FontAwesome } from '@expo/vector-icons'
import { convertToDate } from '../components/Functions'

import { Text, View } from '../components/Themed'

export default function TabTwoScreen() {
	const minDate = new Date()
    const [food, setFood] = useState('')
    const [healthProblem, setHealthProblem] = useState('')
    const [fruits, setFruits] = useState(false)
    const [selectedDate, setSelectedDate] = React.useState(
        addDays(new Date(), 0)
    )
    const toggleSwitch = () => setFruits(previousState => !previousState);

    const renderContent = () => {

        return(
            <>
                <Text style={styles.date}>
                    {/* <Icon name='calendar' type='font-awesome' color='#fff' /> */}
                    {convertToDate(selectedDate)}
                </Text>
            
                <View style={styles.formContent}>

                    <View style={styles.line}>
                        <Text style={styles.title}>
                            {/* <Icon name='calendar' type='font-awesome' /> */}
                            Food eaten
                        </Text>
                        <TextInput
                            style={{height: 40}}
                            placeholder="Enter food eaten this day"
                            onChangeText={newText => setFood(newText)}
                            defaultValue={food}
                        />
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.title}>
                            {/* <Icon name='calendar' type='font-awesome' /> */}
                            Eating fruits and legumes ?
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "orange" }}
                            thumbColor={fruits ? "#6B0079" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={fruits}
                        />
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.title}>
                            {/* <Icon name='calendar' type='font-awesome' /> */}
                            Health Problem
                        </Text>
                        <TextInput
                            style={{height: 40}}
                            placeholder="Enter your actual health problem"
                            onChangeText={newText => setHealthProblem(newText)}
                            defaultValue={healthProblem}
                        />
                    </View>
                    
                </View>
            </>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <DatePicker
                minDate={minDate}
                maxDate={addDays(minDate, 120)}
                markedDates={[minDate, addDays(new Date(), 2)]}
                selectedDate={selectedDate}
                onDateChange={(date) => setSelectedDate(date)}
                disabledDates={[addDays(new Date(), 1), addDays(new Date(), 3)]}
                allowsPastDates={true}
                theme={{
                    primaryColor: '#6B0079',
                }}
                locale="fr"
                translations={{
                    todayButtonText: "Today",
                }}
            /> */}
                {/* <View style={styles.container}>

                    { renderContent() }

                </View> */}
            {/* </DatePicker> */}
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
        color: '#fff',
        fontSize: 18,
        padding: 15,
        borderRadius: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#6B0079'
    },
    formContent: {
        marginTop: 40,
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
    },
    title: {
        fontSize: 16,

    }
})