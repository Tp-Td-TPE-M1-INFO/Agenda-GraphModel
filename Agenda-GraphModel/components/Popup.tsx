import React from 'react'
import { View, Text, Modal, Button, StyleSheet } from 'react-native'

const Popup = ({ isOpen, title, children, closePopup }: { isOpen: boolean, title: string, children: any, closePopup: any }) => {

    return (
        <Modal transparent visible={isOpen} style={styles.popup}>
            <View style={styles.modal}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.content}>
                    {children}
                </View>
                <Button onPress={closePopup} title="Close Popup" color='#F68712' />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        margin: 40,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 4,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#F68712'
    },
    content: {
        alignItems: 'center',
        paddingBottom: 10
    },
    popup: {
        backgroundColor: 'rgba(0, 0, 0, .4)'
    },
  })

export default Popup
