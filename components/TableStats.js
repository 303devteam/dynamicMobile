import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup } from 'victory-native';
import useCustomFonts from '../assets/fonts/expo-fonts';
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import axios, { Axios } from "axios";


export default function TableStats({ navigation}) {
    const [tableData, setTableData] = useState([])
    
    
    useEffect(() => {
        const fetchTableData = async () => {
            const newData = [];
            for (let i = 1; i <= 10; i++) {
                try {
                    const response = await axios.get(`https://dynamic-routes-f4txc.ondigitalocean.app/table/${i}`);
                    newData.push({ id: i, total_revenue: response.data.total_revenue });
                } catch (error) {
                    console.log('oh no');
                }
            }
            setTableData(newData);
        };
        fetchTableData();
    }, []);


    
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={{ width: 60, height: 60, marginLeft: 20 }}
                    source={require('../assets/images/stats2.png')}
                />

                <Text style={styles.headerText}>TABLE STATS</Text>
            </View>

            <View style={styles.chartContainer}>
                <Text style={styles.containerText}>TABLE REVENUE</Text>
                <VictoryChart>
                    <VictoryAxis label='Tables' />
                    <VictoryAxis dependentAxis label='Income' />
                    <VictoryGroup offset={20}>
                        <VictoryBar
                            animate={{
                                duration: 2000,
                                onLoad: { duration: 1000 }
                            }}
                            data={tableData.map(table => ({ x: table.id, y: table.total_revenue }))}
                            style={{
                                data: {
                                    fill: '#EC4C56'
                                }
                            }}
                        >
                        </VictoryBar>
                    </VictoryGroup>
                </VictoryChart>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#201E21',
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        width: '100%',
        height: '20%',
        alignItems: 'center',



    },

    headerText: {

        color: 'white',
        fontSize: 30,
        paddingLeft: 10,
        fontFamily: 'Montserrat'
    },

    chartContainer: {
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 20,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 90,
        marginLeft: 11,
        width: 370,
        height: 400
    },

    containerText: {
        fontSize: 25,
        fontFamily: 'Montserrat'
    }



})