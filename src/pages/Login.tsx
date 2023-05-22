import React from "react";
import { Image, View, ScrollView, Text, StyleSheet, Dimensions, Linking } from 'react-native';

export default function LoginPage(){

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 32,
            gap: 12,
            position: "absolute",
            height: 51,
            left: 16,
            right: 16,
            bottom: 350,
            backgroundColor: "#2CB373",
            borderRadius: 100
        },
    
        description: {
            width: 48,
            height: 19,

            fontStyle: "normal",
            fontSize: 16,
            lineHeight: 19,
            textAlign: "center",
            color: "#FFFFFF",


        }
    });

return ( 
    <View style={styles.container}>
        <Text style={styles.description}>Entrar</Text>
    </View>
);

};