import React from "react";
import { Image, View, ScrollView, Text, StyleSheet, Dimensions, Linking } from 'react-native';


export default function SplashScreen(){

    const styles = StyleSheet.create({
        logo: {
            position:"absolute",
            width: 222,
            height: 389,
            left: 83,
            top: 212,
        }
    });

return ( 
    <View>
        <Image style={styles.logo}
        source={require('../images/Logo.png')} />
    </View>
);
};

