import React, {useState} from 'react'
import {StyleSheet, Text, SafeAreaView, View, FlatList, Alert} from 'react-native'
import ReminderItem from './Components/ReminderItem.js'
import AddReminder from './Components/AddReminder.js'

export default function ReminderScreen() {
    const [reminders, setreminders] = useState ([
        {text: 'Avoid using extra gas.', key: 1}
    ])

    const pressHandler = (key) => {
        setreminders((prevreminders) => {
            return prevreminders.filter(reminder => reminder.key != key)
        })
    }

    const submitHandler = (text) => {
        if (text.length > 1) {
            setreminders((prevreminders) => {
                return [
                    {text: text, key: Math.random().toString()},
                    ...prevreminders
                ]
            })
        } else {
            Alert.alert(
                'Error:', 'Please do not submit an empty reminder!',
                [
                    {
                        text: 'OK',
                        onPress: () => console.log('Alert dismissed.')
                    }
                ]
            )
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>List of Reminders</Text>
                <AddReminder submitHandler={submitHandler}/>
                <View style={styles.list}>
                    <FlatList 
                        data={reminders}
                        renderItem={({item}) => (
                            <ReminderItem item={item} pressHandler={pressHandler}/>
                        )}
                    />
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        textAlign: "center",
        margin: 5,
    },  
    container: {
        margin: 10
    }
})