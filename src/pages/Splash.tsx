import React from "react";
import { Image, View, ScrollView, Text, StyleSheet, Dimensions, Linking } from 'react-native';
import logoImage from "../images/logo.png";

export default function SplashScreen(){

    const styles = StyleSheet.create({
        logo: {
            position:"absolute",
            width: 500,
            height: 500,
            left: -63,
            top: 156,

            background: logoImage

        }
    });

return ( 
    <View style={styles.logo}>
        
    </View>
);
};