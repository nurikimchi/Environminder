import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Button} from 'react-native'

export default function AddReminder({submitHandler}) {
    const [text, setText] = useState('')
    const changeHandler = (value) => {
        setText(value)
    }

    return (
        <View>
            <TextInput 
                clearButtonMode="always"
                style={styles.input}
                placeholder='Type here to add a reminder:'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='add reminder' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
        borderColor: "black",
        fontSize: 24,
        height: 50,
        width: "95%",
    }
})