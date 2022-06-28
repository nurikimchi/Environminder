import React from 'react'
import {Text, StyleSheet, SafeAreaView} from 'react-native'

export default function InformationScreen() {
    return (
        <SafeAreaView style={{backgroundColor: "#000000", flexDirection: "column", height: "100%"}}>
            
            <Text style={styles.heading}>What is Environminder?</Text>
            <Text style={styles.paragraph}>
                Environminder is a mobile app that reminds users to practice environmentally helpful practices.
                Users can add a reminder item and delete it after completing it.
            </Text>
            <Text style={styles.heading}>How do you make a reminder?</Text>
            <Text style={styles.paragraph}>
                Go back to the "Home" screen. Then click on the "Remind Me" button. After, click on the text box with the text placeholder and type in your reminder. Click on the reminder box to delete it.
            </Text>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        color: "#FFFFFF",
        margin: 30,
        marginBottom: -10
    },
    paragraph: {
        textAlign: "left",
        fontSize: 24,
        color: "#FFFFFF",
        margin: 30
    }
})