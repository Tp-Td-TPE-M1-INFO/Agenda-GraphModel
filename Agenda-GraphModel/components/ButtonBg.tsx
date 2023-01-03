import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const Button = ({ onPress, children, color }:{ onPress: any, children: any, color: string }) => {

    let buttonStyle = styles.violet;
    if(color == "violet"){
        buttonStyle = styles.violet
    }else if(color == "orange"){
        buttonStyle = styles.orange
    }

    return (
        <Pressable onPress={onPress} android_ripple={{color: '#6B0079', borderless: false}} style={{ elevation: 50 }}>
            <Text style={[buttonStyle, styles.button]}>{children}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        textAlign: 'center',
        paddingVertical: 12,
        borderRadius: 8,
        marginVertical: 5,
        fontSize: 18,
        fontWeight: "600",
        letterSpacing: 0.25,
        paddingHorizontal: 16,
    },
    violet: {
        backgroundColor: '#6B0079',
        color: 'white',
    },
    orange: {
        backgroundColor: '#F68712',
        color: 'white',
    },
  });

export default Button