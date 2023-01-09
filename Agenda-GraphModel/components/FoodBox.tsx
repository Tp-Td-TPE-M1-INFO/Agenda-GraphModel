import { View, Text, StyleSheet, ImageBackground, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import Popup from './Popup'


const FoodBox = ({name, date, data}: {name: string, date: string, data: any}) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const openPopup = () => {
        setIsPopupOpen(true);
    }
    
    const closePopup = () => {
        setIsPopupOpen(false);
    }

    return (
        <ImageBackground source={require('../assets/images/images.jpeg')} style={styles.image} imageStyle={{ borderRadius: 15}}>
            <Pressable onPress={openPopup} style={styles.container}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.text}>{name}</Text>
            </Pressable>
            <Popup isOpen={isPopupOpen} title="Food Details" closePopup={closePopup}>

                <View style={styles.content}>
                    {
                        data.glucide != null ? 
                            <>
                                <View style={styles.line}>
                                    <Text style={{ fontWeight: 'bold' }}>Nom : </Text>
                                    <Text>{data.name}</Text>
                                </View>
                                <View style={styles.line}>
                                    <Text style={{ fontWeight: 'bold' }}>Score glucide : </Text>
                                    <Text>{data.glucide} /100</Text>
                                </View>
                                <View style={styles.line}>
                                    <Text style={{ fontWeight: 'bold' }}>Score lipide : </Text>
                                    <Text>{data.lipide} /100</Text>
                                </View>
                                <View style={styles.line}>
                                    <Text style={{ fontWeight: 'bold' }}>Score protéine : </Text>
                                    <Text>{data.proteine} /100</Text>
                                </View>
                                <View style={styles.line}>
                                    <Text style={{ fontWeight: 'bold' }}>Score sel : </Text>
                                    <Text>{data.sel} /100</Text>
                                </View>
                            </>
                        : 
                            <>
                                <View style={styles.line}>
                                    <Text style={{ fontWeight: 'bold' }}>Date : </Text>
                                    <Text>{data.date}</Text>
                                </View>
                                <View style={styles.line}>
                                    <Text style={{ fontWeight: 'bold' }}>Eating fruits : </Text>
                                    <Text>{data.eatingFruit == false ? 'No' : 'yes'}</Text>
                                </View>
                                <View style={styles.line}>
                                    <Text style={{ fontWeight: 'bold' }}>Health problem : </Text>
                                    <Text>{data.healthProblem[0]}</Text>
                                </View>
                                <View style={styles.line}>
                                    <Text style={{ fontWeight: 'bold' }}>Nb movement : </Text>
                                    <Text>{data.nbMovement} min</Text>
                                </View>
                                <View style={styles.line}>
                                    <Text style={{ fontWeight: 'bold' }}>Qty water : </Text>
                                    <Text>{data.qtyWater} ml</Text>
                                </View>
                                <View style={styles.line}>
                                    <Text style={{ fontWeight: 'bold' }}>Foods : </Text>
                                    <Text>{data.foods}</Text>
                                </View>
                                <View style={styles.line}>
                                    <Text style={{ fontWeight: 'bold' }}>Number times food eaten : </Text>
                                    <Text>{data.nbEaten} times</Text>
                                </View>
                            </>
                    }
                </View>
            </Popup>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: 120,
        backgroundColor: 'rgba(107, 0, 121, .4)',
        borderRadius: 15
    },
    image: {
        width: Dimensions.get('screen').width/2.2,
        height: 120,
        padding: 0,
        margin: 3
    },
    text: {
        color: '#fff6ff',
        marginTop: 'auto',
        marginLeft: 'auto',
        fontWeight: 'bold'
    },
    date: {
        color: '#fff6ff',
        marginLeft: 'auto',
        fontWeight: '400'
    }, 
    content: {
        marginVertical: 15
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4
    }
})

export default FoodBox