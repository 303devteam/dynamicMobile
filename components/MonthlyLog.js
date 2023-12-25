import { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native"
import SelectDropdown from "react-native-select-dropdown";
import axios, { Axios } from "axios";
import useCustomFonts from "../assets/fonts/expo-fonts"


export default function MonthlyLog({navigation}) {
    const date = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const years = ["2023", "2024"]
    const [selectedYear, setYear] = useState(date.getFullYear());
    const [selectedMonth, setMonth] = useState((date.getMonth()+1));
    const [monthlyLog, setMontlyLog] = useState([])
    const [grandTotal, setGrandTotal] = useState(0)
    const [fontLoaded, setFontLoaded] = useState(false)

    useEffect(() => {
        useCustomFonts().then(() => {
            setFontLoaded(true)
          })
        const formattedMonth = String(selectedMonth).padStart(2, '0');
        axios.get(`https://dynamic-routes-f4txc.ondigitalocean.app/monthlyLog/${formattedMonth}/${selectedYear}`)
        .then(response => {
            setMontlyLog(response.data)
            console.log(formattedMonth, selectedYear)
            console.dir(response.data)
            const total = response.data.reduce((acc, log) => acc + log.commercial_revenue + log.private_member_revenue + log.member_revenue, 0)
            setGrandTotal(total);
            
        }).catch(error => {
            console.log('oh ne')
        })
    }, [ , selectedMonth, selectedYear])

    if (!fontLoaded) {
        return null
      }



    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/images/calendar2.png')}
                    style={{width:53, height:53}}
                />
                <Text style={styles.headerText}>MONTHLY LOG</Text>
            </View>
            <View style={styles.dropdowns}>
                <SelectDropdown
                    data = {months}
                    buttonStyle={styles.monthButton}
                    defaultButtonText={months[selectedMonth-1]}
                    buttonTextStyle={{
                        fontFamily: 'Montserrat'
                    }}
                    dropdownStyle={{
                        borderRadius: 10,
                        fontFamily: 'Montserrat'
                    }}
                    onSelect={(selectedMonth, index) => {
                        setMonth(index + 1)
                    }}
                />
                <SelectDropdown
                    data = {years}
                    buttonStyle={styles.yearButton}
                    defaultButtonText={selectedYear}
                    buttonTextStyle={{
                        fontFamily: 'Montserrat'
                    }}
                    dropdownStyle={{
                        borderRadius: 10,
                        fontFamily: 'Montserrat'
                    }}
                    onSelect={(selectedYear, index) => {
                        setYear(parseInt(selectedYear))
                    }}
                />
            </View>

            <ScrollView style={styles.table} stickyHeaderIndices={[0]}>
                <View>
                    <View style={styles.tableHead}>
                        <Text style={styles.tableHeadText}>Date</Text>
                        <Text style={styles.tableHeadText}>Comm</Text>
                        <Text style={styles.tableHeadText}>Member</Text>
                        <Text style={styles.tableHeadText}>Private</Text>
                        <Text style={styles.tableHeadTextv2}>TOTAL</Text>
                    </View>
                </View>
                {monthlyLog.map((log) => (
                    <View style={styles.tableEntry} key={log.id}>
                        <Text style={styles.tableEntryText}>{log.day.split(' ')[0]}</Text>
                        <Text style={styles.tableEntryText}>{(log.commercial_revenue).toFixed(2)}</Text>
                        <Text style={styles.tableEntryText}>{(log.member_revenue).toFixed(2)}</Text>
                        <Text style={styles.tableEntryText}>{(log.private_member_revenue).toFixed(2)}</Text>
                        <Text style={styles.tableEntryText}>{(log.commercial_revenue + log.member_revenue + log.private_member_revenue).toFixed(2)}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.tableFooter}>
                <Text style={{fontSize: 15, fontFamily: 'Montserrat-Bold'}}>TOTAL:</Text>
                <Text style={{fontSize: 15, fontFamily: 'Montserrat'}}>{(grandTotal).toFixed(2)}KM</Text>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1E1E21',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20
    },
    header:{
        flexDirection: 'row',
        width: 380,
        height: 100,
        marginTop: 50,
        marginLeft: 30

    },

    headerText:{
        fontSize: 25,
        color: 'white',
        paddingLeft: 20,
        justifyContent: 'center',
        paddingTop: 13,
        fontFamily: 'Montserrat',
        
    },

    dropdowns:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 340,
       
    },

    monthButton:{
        borderRadius: 20,
        height: 36,
        width: 140,
        marginRight: 10,
        
        
    },
    
    yearButton:{
        borderRadius: 20,
        height: 36,
        width: 140,
        marginLeft: 10,
        
    },


    table:{
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
        width: '20%',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: '#676767'
    },
    tableHeadTextv2: {
        display: 'flex',
        width: '20%',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',
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
        width: '20%',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 15,
        paddingRight: 10,
    },

    tableDate:{
        width: '22.3%',
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
    },
    

})