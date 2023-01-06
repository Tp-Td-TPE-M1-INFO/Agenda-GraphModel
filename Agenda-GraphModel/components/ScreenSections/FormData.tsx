import React, { useState, useEffect, useMemo } from 'react'
import { Text, View, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'
import MultiSelect from 'react-native-multiple-select'
import axios from '../api/axios'

import InputText from '../InputText'
import Button from '../ButtonBg'


const FormData = ({date, selectedFood}: {date: any, selectedFood?: any}) => {
    
    const [foodName, setFoodName] = useState([])
    const [healthProblem, setHealthProblem] = useState('')
    const [numberTimesEaten, setNumberTimesEaten] = useState(selectedFood?.nbEaten)
    const [qWater, setQWater] = useState(0)
    const [qLiquid, setQLiquid] = useState(0)
    const [sportDuration, setSportDuration] = useState(0)
    const [fruits, setFruits] = useState(false)

    const [foods, setFoods] = useState([])
    const [selectedItems, setSlectedItems] = useState([]) // Foods selected in form
    let selectedItemsId: any[] = [] // Id of Foods selected in form

    const toggleSwitch = () => setFruits((previousState: boolean) => !previousState);

    useEffect(() => {

        if (selectedFood && selectedFood?.date==date) {
            setFoodName(selectedFood.foods);
            setNumberTimesEaten(selectedFood.nbEaten);
            setQWater(selectedFood.qtyWater);
            setQLiquid(selectedFood.qLiquid);
            setSportDuration(selectedFood.nbMovement);
            setHealthProblem(selectedFood.healthProblem[0]);
            setFruits(selectedFood.eatenFruit);
        } else {
            setFoodName([]);
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
            date,
            foods: selectedItems,
            healthProblem,
            nbEaten: numberTimesEaten,
            qtyWater: qWater,
			//qLiquid,
            nbMovement: sportDuration,
            eatenFruit: fruits
		}
        
        try{
            const response = await axios.put(`nutrition/update-nutrition/${'63b6c873a6f874ba525c8ba7'}`, data)
			
            if(response.status===200 || response.status===201){
                console.log(data)
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
            date,
            foods: selectedItems,
            healthProblem,
            nbEaten: numberTimesEaten,
            qtyWater: qWater,
			//qLiquid,
            nbMovement: sportDuration,
            eatenFruit: fruits
		}
        
        try{
            const response = await axios.post(`nutrition/post-nutrition/${'63b6c873a6f874ba525c8ba7'}`, data)
			
            if(response.status===200 || response.status===201){
                console.log(data)
                alert('Data saved successfully !')
            }																																																																																																																																																																																																																																																																																																		
        
        }catch(error){
			console.log(data)
            alert('Post Failed');
			console.log(error)
        }
    }

    useEffect(() => {
        getFoods()
    }, [])
    
    const getFoods = async() => {
        const response = await axios.get('food/getfood')
        setFoods(response.data)
    }    

    // When user select foods eaten
    const onSelectedItemsChange = (selectedItems: any) => {
        setSlectedItems(selectedItems);
    }

    // Get selected foods id 
    foods.forEach(food => {
        
        for(let i=0; i<selectedFood?.foods.length; i++){
            food.name == selectedFood?.foods[i] ? selectedItemsId.push(food._id) : null
        }
    })

    // Form content
    const renderContent = () => {

        return(
            <View style={styles.formContent}>
                    <View style={styles.line}>
                        <Text style={styles.title}>
                            <Text style={{ marginRight: 10 }}>
                                <MaterialCommunityIcons name='food-turkey' color='#6B0079' size={25} />
                            </Text>
                            {'\t'}
                            Select foods eaten today
                        </Text>
                        {/* <SelectDropdown
                            data={foodList}
                            onSelect={(selectedItem, index) => {
                                setFoodName(selectedItem)
                            }}
                            buttonTextStyle={{ color: '#7E7E7E', textAlign: 'justify', marginLeft: 0, fontSize: 15 }}
                            buttonStyle={{ backgroundColor: 'transparent' }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                        /> */}
                        <MultiSelect
                            hideTags
                            items={foods}
                            uniqueKey="_id"
                            onSelectedItemsChange={onSelectedItemsChange}
                            selectedItems={selectedFood ? selectedItemsId : selectedItems}
                            selectText="Pick Foods"
                            searchInputPlaceholderText="Search Foods..."
                            onChangeInput={ (text)=> console.log(text)}
                            tagRemoveIconColor="#CCC"
                            tagBorderColor="#CCC"
                            tagTextColor="#CCC"
                            selectedItemTextColor="#F68712"
                            selectedItemIconColor="#F68712"
                            itemTextColor="#000"
                            displayKey="name"
                            textColor='#5B5B5B'
                            searchInputStyle={{ color: '#6B0079' }}
                            submitButtonColor="#F68712"
                            submitButtonText="Save"
                        />
                    </View>
                    <InputText 
                        title='Number times food eaten' value={numberTimesEaten} icon='food-drumstick' type='phone-pad' placeholder='Enter number' 
                        onChange={(food: number) => {setNumberTimesEaten(food)}} 
                    />
                    <InputText 
                        title='Quantity of water drank (Glass of water)' value={qWater} icon='cup-water' type='phone-pad' placeholder='Enter Quantity' 
                        onChange={(food: number) => {setQWater(food)}} 
                    />
                    {/* <InputText 
                        title='Quantity of other liquid drank (Glass of water)' value={qLiquid} icon='food-fork-drink' type='phone-pad' placeholder='Enter Quantity' 
                        onChange={(food: number) => {setQLiquid(food)}} 
                    /> */}

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
        borderRightColor: '#F68712',
        borderRightWidth: 5
    },
    title: {
        fontSize: 16,
        color: 'black'
    },
})

export default FormData