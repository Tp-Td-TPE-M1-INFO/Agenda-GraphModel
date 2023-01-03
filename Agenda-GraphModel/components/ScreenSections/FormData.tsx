import React, { useState, useEffect, useMemo } from 'react'
import { Text, View, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import axios from 'axios'

import InputText from '../InputText'
import Button from '../ButtonBg'


const FormData = ({date, selectedFood}: {date: any, selectedFood?: any}) => {
    
    const [foodName, setFoodName] = useState('')
    const [healthProblem, setHealthProblem] = useState('')
    const [numberTimesEaten, setNumberTimesEaten] = useState(0)
    const [qWater, setQWater] = useState(0)
    const [qLiquid, setQLiquid] = useState(0)
    const [sportDuration, setSportDuration] = useState(0)
    const [fruits, setFruits] = useState(false)

    const toggleSwitch = () => setFruits((previousState: boolean) => !previousState);

    useEffect(() => {

        if (selectedFood && selectedFood?.date==date) {
            setFoodName(selectedFood.food_name);
            setNumberTimesEaten(selectedFood.number_times_eaten.toString());
            setQWater(selectedFood.q_water);
            setQLiquid(selectedFood.q_liquid);
            setSportDuration(selectedFood.sport_duration.toString());
            setHealthProblem(selectedFood.health_problem);
            setFruits(selectedFood.eat_fruit == 1 ? true:false);
        } else {
            setFoodName("");
            setNumberTimesEaten(0);
            setQWater(0);
            setQLiquid(0);
            setSportDuration(0);
            setHealthProblem("");
            setFruits(false);
        }
        
    }, [selectedFood])

    const updateData = async() => {
        const data = {
            foodName,
            healthProblem,
            numberTimesEaten,
            qWater,
			qLiquid,
            sportDuration,
            fruits
		}
        
        try{
            const response = await axios.put('', data)
			
            if(response.status===200 || response.status===201){
                alert('Data edited successfully !')
            }																																																																																																																																																																																																																																																																																																		
        
        }catch(error){
			console.log(data)
            alert('Update Failed');
			console.log(error)
        }
    }

    const insertData = async() => {
        const data = {
            foodName,
            healthProblem,
            numberTimesEaten,
            qWater,
			qLiquid,
            sportDuration,
            fruits
		}
        
        try{
            const response = await axios.post('', data)
			
            if(response.status===200 || response.status===201){
                alert('Data saved successfully !')
            }																																																																																																																																																																																																																																																																																																		
        
        }catch(error){
			console.log(data)
            alert('Post Failed');
			console.log(error)
        }
    }

    // Form content
    const renderContent = () => {

        return(
            <View style={styles.formContent}>
                    <InputText 
                        title='Food eaten' value={foodName} icon='food-turkey' type='text' placeholder='Enter food eaten' 
                        onChange={(food: string) => {setFoodName(food)}} 
                    />
                    <InputText 
                        title='Number times food eaten' value={numberTimesEaten} icon='food-drumstick' type='phone-pad' placeholder='Enter number' 
                        onChange={(food: number) => {setNumberTimesEaten(food)}} 
                    />
                    <InputText 
                        title='Quantity of water drank (Glass of water)' value={qWater} icon='cup-water' type='phone-pad' placeholder='Enter Quantity' 
                        onChange={(food: number) => {setQWater(food)}} 
                    />
                    <InputText 
                        title='Quantity of other liquid drank (Glass of water)' value={qLiquid} icon='food-fork-drink' type='phone-pad' placeholder='Enter Quantity' 
                        onChange={(food: number) => {setQLiquid(food)}} 
                    />

                    <View style={styles.line}>
                        <Text style={styles.title}>
                            <Text style={{ marginRight: 10 }}>
                                <MaterialCommunityIcons name='food-apple-outline' color='#6B0079' size={25} />
                            </Text>
                            {'\t'}
                            Eating fruit and vegetebles ?
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "fc94af" }}
                            thumbColor={fruits ? "#CE0670" : "#fc94af"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={fruits}
                        />
                    </View>

                    <InputText 
                        title='Sport duration (in minutes)' value={sportDuration} icon='run-fast' type='phone-pad' placeholder='Enter duration' 
                        onChange={(food: number) => {setSportDuration(food)}} 
                    />
                    <InputText 
                        title='Health problem' value={healthProblem} icon='emoticon-sick-outline' type='text' placeholder='Enter your actual health problem' 
                        onChange={(food: string) => {setHealthProblem(food)}} 
                    />
                
            </View>
        )
    }

    return (
        <View style={styles.container}>

            { renderContent() }

            <View style={{ marginTop: 15, marginBottom: 30 }}>
                <Button color='violet' onPress={selectedFood ? updateData : insertData}>Save data</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        display: 'flex',
    },

    formContent: {
        marginTop: 30,
    },
    
    line: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 6,
        elevation: 1,
        marginBottom: 10,
        borderRightColor: '#CE0670',
        borderRightWidth: 5
    },
    title: {
        fontSize: 16,
        color: 'black'
    },
})

export default FormData