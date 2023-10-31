
import { StatusBar } from 'expo-status-bar';
import { useCustomFonts } from "./assets/fonts/expo-fonts";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Modal from '@mui/joy/Modal';


export default function Tables({navigation}) {
    useCustomFonts()

    return(
        
        <>
    	    <StatusBar backgroundColor='#201E21'></StatusBar>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.poolTable}>
                        <Image
                            source={require('./assets/images/poolTable.png')}
                            style={{ width: 60, height: 57 }} />
                    </View>
                    <Text style={styles.headerText}>Tables</Text>
                </View>
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: '#201E21' }}>
                <View style={styles.container}>
                    <View style={styles.stack}>
                        {Array(10).fill().map((_, index) => (
                            <TouchableOpacity 
                                key={index} 
                                style={styles.button} 
                                onPress={() => popupModal(index+1)}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.squareText}>Table: {index + 1}</Text>
                                </View>
                                <View style={styles.circle}></View>
                                <Text style={styles.availabilityText}>Free</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </>
      

    );
       
}

const styles = StyleSheet.create({

    headerText:{
        flex: 1,
        color: '#FFFFFF',
        fontSize: 30,
        paddingRight: 10,
        paddingTop: 5,
        paddingLeft: 8        
    },
    header:{    
        backgroundColor: '#201E21',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginTop: 32     
    },

    textContainer:{
        flex:1   
    },
    
    headerContent:{
        flexDirection:'row',
        display: 'flex',
        justifyContent: 'space-between',
    },

    container: {
        flex: 1,
        backgroundColor: '#201E21',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40
      },

    button: {
        display: 'flex',
        flexDirection: 'row',
        width: 349,
        height: 55,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 21
    },

    squareText:{
        textAlign: "left",
        marginLeft: 12,
        marginTop: 13,
        fontSize: 20
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
        color: 'green'
    }
})