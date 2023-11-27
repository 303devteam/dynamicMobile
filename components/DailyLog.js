import { View, Image, Text } from "react-native";
import { StyleSheet } from "react-native";
import useCustomFonts from "../assets/fonts/expo-fonts";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import axios, { Axios } from "axios";

export default function DailyLog({navigation}) {
    

   
    const [dailyLogs, setDailyLogs] = useState([]);

    useEffect(() =>{
        axios.get('https://dynamic-routes-f4txc.ondigitalocean.app/dailyLog')
            .then(response => {
                setDailyLogs(response.data);
            })

            .catch(response => {
                console.error('Error fetching data');
            })
    })
    

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={require('../assets/images/table2.png')}
                    style={{width: 53, height: 53}}
                />
                <Text style={styles.headerText}>DAILY LOG</Text>
            </View>
            <ScrollView style={styles.innerContainer} stickyHeaderIndices={[0]}>
                <View>
                    <View style={styles.tableHead}>
                        <Text style={styles.tableHeadText}>{'Table\nNumber'}</Text>
                        <Text style={styles.tableHeadText}>{'Game\nTime'}</Text>
                        <Text style={styles.tableHeadText}>{'Player\nType'}</Text>
                        <Text style={styles.tableHeadText}>Revenue</Text>
                    </View>
                </View>
                {dailyLogs.map(log => ( 
                <View style={styles.tableEntry}>
                    <Text style={styles.tableEntryText}>{log.table_id}</Text>
                    <Text style={styles.tableEntryText}>{log.game_time}</Text>
                    <Text style={styles.tableEntryText}>{log.player_type}</Text>
                    <Text style={styles.tableEntryText}>{log.revenue}KM</Text>
                </View>
                ))}
                <View style={styles.tableEntry}>
                    <Text style={styles.tableEntryText}>1</Text>
                    <Text style={styles.tableEntryText}>1:15</Text>
                    <Text style={styles.tableEntryText}>Member</Text>
                    <Text style={styles.tableEntryText}>15KM</Text>
                </View>
                <View style={styles.tableEntry}>
                    <Text style={styles.tableEntryText}>1</Text>
                    <Text style={styles.tableEntryText}>1:15</Text>
                    <Text style={styles.tableEntryText}>Member</Text>
                    <Text style={styles.tableEntryText}>15KM</Text>
                </View>
                <View style={styles.tableEntry}>
                    <Text style={styles.tableEntryText}>1</Text>
                    <Text style={styles.tableEntryText}>1:15</Text>
                    <Text style={styles.tableEntryText}>Member</Text>
                    <Text style={styles.tableEntryText}>15KM</Text>
                </View>
                <View style={styles.tableEntry}>
                    <Text style={styles.tableEntryText}>1</Text>
                    <Text style={styles.tableEntryText}>1:15</Text>
                    <Text style={styles.tableEntryText}>Member</Text>
                    <Text style={styles.tableEntryText}>15KM</Text>
                </View>
            </ScrollView>
            <View style={styles.tableFooter}>
                <Text style={{fontSize: 15, fontFamily: 'Montserrat-Bold'}}>TOTAL:</Text>
                <Text style={{fontSize: 15, fontFamily: 'Montserrat'}}>90KM</Text>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
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
        backgroundColor: 'white',
        marginTop: 50,
        width: '100%',
        minHeight: 500,
        maxHeight: 500,
        position: 'relative'
    },
    tableHead: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderBottomColor: '#C0C0C0',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: 'white'
    },
    tableHeadText: {
        display: 'flex',
        width: '25%',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Montserrat',
        color: '#676767'
    },
    tableEntry: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 15,
        paddingTop: 15,
        borderBottomColor: '#C0C0C0',
        borderBottomWidth: 1
    },
    tableEntryText: {
        width: '25%',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 15,
    },
    tableFooter: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15,
        paddingTop: 15,
        paddingRight: 10,
        paddingLeft: 20,
        backgroundColor: 'white',
        borderTopColor: '#C0C0C0',
        borderTopWidth: 1,
    }

})