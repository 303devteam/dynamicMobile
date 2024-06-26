import { useState, useEffect } from 'react';
import useCustomFonts from "../assets/fonts/expo-fonts";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import axios from "axios";

export default function Tables({navigation}) {
    const [fontLoaded, setFontLoaded] = useState(false)
    const [tables, setTables] = useState([])

    useEffect(() => {
        axios.get('https://dynamic-routes-f4txc.ondigitalocean.app/tables').then(res => {
            setTables(res.data)
        })
        useCustomFonts().then(() => {
            setFontLoaded(true)
        })
    }, [])

    if (!fontLoaded) {
      return null
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={require('../assets/images/poolTable2.png')}
                    style={{width: 60, height: 55}}
                />
                <Text style={styles.headerText}>TABLES</Text>
            </View>
            <ScrollView style={styles.innerContainer}>
                {Array(10).fill().map((_, index) => (
                        <View key={index}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.button}
                            >
                                <View style={styles.textContainer}>
                                    <Text style={styles.squareText}>Table: {index + 1}</Text>
                                </View>
                                {
                                    tables[index]?.status == 'Free' ? (
                                        <>
                                            <View style={styles.circle}></View>
                                            <Text style={styles.availabilityText}>Free</Text>
                                        </>
                                    ) : (
                                        <>
                                            <View style={styles.circle2}></View>
                                            <Text style={styles.availabilityText2}>Occupied</Text>
                                        </>
                                    )
                                }
                            </TouchableOpacity>
                            
                        </View>
                    ))}
            </ScrollView>
        </View>
    );
       
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#201E21',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        width: '100%',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'Montserrat',
        color: '#FFFFFF',
        fontSize: 30,
        paddingLeft: 8       
    },
    innerContainer: {
        width: '100%',
        marginTop: 50
    },
    textContainer:{
        flex:1 
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 55,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 21
    },
    squareText:{
        textAlign: "left",
        marginLeft: 12,
        marginTop: 13,
        fontSize: 20,
        fontFamily: 'Montserrat'
    },
    circle:{
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: 'green',
        marginLeft: 150,
        marginTop: 26,
        textAlign: "center",
        justifyContent: "center",   
    },
    availabilityText:{
        fontSize: 14,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 20,
        color: 'green',
        fontFamily: 'Montserrat'
    },
    availabilityText2:{
        fontSize: 14,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 20,
        color: 'red',
        fontFamily: 'Montserrat'
    },
    circle2:{
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: 'red',
        marginLeft: 150,
        marginTop: 26,
        textAlign: "center",
        justifyContent: "center",   
    },
    modal: {
        display: 'flex',
        width: 335,
        height: 180,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 20,
    },
    dialogTitle:{
        textAlign: 'center',
        justifyContent:'center',
        fontFamily: 'Montserrat'
    },
    dialogText: {
        textAlign: 'left',
        marginBottom: 10,
        marginTop: 10,
        fontFamily: 'Montserrat',
        fontSize: 16
    }
})