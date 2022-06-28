import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function ReminderItem({item, pressHandler}) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginTop: 14,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 5,
        fontSize: 20,
        flexWrap: 'wrap',
        backgroundColor: "#00d400"
    }
})