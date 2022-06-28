import React from 'react'
import {View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity, Button} from 'react-native'

export default function WelcomeScreen({navigation}) {
    return (
        <SafeAreaView style={{justifyContent: "center", alignItems: "center", backgroundColor: "#000000", height: "100%"}}>
            <View style={{marginTop: 0}}>
                <Text style = {{color: "#FFFFFF", fontSize: 60, textAlign: "center", marginBottom: 40}}>Environminder</Text>
                <Text style={{color: "#FFFFFF", marginTop: -40, textAlign: "center", fontSize: 30}}>Remind yourself to save the environment!</Text> 
                <Image
                    style = {{marginTop: 0, marginLeft: "auto", marginRight: "auto", height: 260, width: 260}}
                    source={{
                        uri: "https://pngimg.com/uploads/earth/earth_PNG25.png"
                    }}
                />

                <View style = {{marginTop: -240}}>
                    <TouchableOpacity style = {styles.button} onPress={() => {
                        navigation.navigate("Reminder")
                    }}>
                        <Text style = {{fontSize: 30, color: "white"}}>Remind Me</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {() => {
                        navigation.navigate("Information")
                    }}>
                        <Text style = {{fontSize: 30, color: "white"}}>How Does It Work?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        fontWeight: 'bold',
        width: '85%',
        marginHorizontal: 'auto',
        borderRadius: 30,
        backgroundColor: "#00B300",
        marginTop: 40,
        padding: 20,
        alignSelf: "center",
        alignItems: 'center',
        borderColor: "black",
        borderWidth: 2
    }
})