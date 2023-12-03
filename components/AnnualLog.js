import { useState, useEffect } from "react"
import { StyleSheet, View, ScrollView, Text, Image } from "react-native"
import axios, { Axios } from "axios";
import useCustomFonts from "../assets/fonts/expo-fonts"

export default function AnnualLog({navigation}) {
    const [fontLoaded, setFontLoaded] = useState(false)
    const [annual, setAnnual] = useState([])
    
    const [grandTotal, setGrandTotal] = useState(0)

    useEffect(() => {
        useCustomFonts().then(() => {
          setFontLoaded(true)
        })
        
        axios.get('https://dynamic-routes-f4txc.ondigitalocean.app/annualLog')
            .then(response => {
                setAnnual(response.data)
                const total = response.data.reduce((acc, log) => acc + log.commercial_revenue + log.private_member_revenue + log.member_revenue, 0)
                setGrandTotal(total);
            })

            .catch(response => {
                console.error('Error fetching data');
            })
    
    
    }, [])
  
      if (!fontLoaded) {
        return null
      }



    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={require('../assets/images/calendar2.png')}
                    style={{width: 53, height: 53}}
                />
                <Text style={styles.headerText}>ANNUAL LOG</Text>
            </View>
            <ScrollView style={styles.innerContainer} stickyHeaderIndices={[0]}>
                <View>
                    <View style={styles.tableHead}>
                        <Text style={styles.tableHeadText}>{'Year'}</Text>
                        <Text style={styles.tableHeadText}>{'Commercial\nRevenue'}</Text>
                        <Text style={styles.tableHeadText}>{'Member\nRevenue'}</Text>
                        <Text style={styles.tableHeadText}>{'Private\nMember\nRevenue'}</Text>
                        <Text style={styles.tableHeadTextv2}>TOTAL</Text>
                    </View>
                </View>
                
                {annual.map((log) => (
                    <View style={styles.tableEntry} key={log.id}>
                        <Text style={styles.tableEntryText}>{log.year}</Text>
                        <Text style={styles.tableEntryText}>{log.commercial_revenue}KM</Text>
                        <Text style={styles.tableEntryText}>{log.member_revenue}KM</Text>
                        <Text style={styles.tableEntryText}>{log.private_member_revenue}KM</Text>
                        <Text style={styles.tableEntryText}>{log.commercial_revenue + log.private_member_revenue + log.member_revenue}KM</Text>
                    </View>
                ))}

            </ScrollView>
            <View style={styles.tableFooter}>
                <Text style={{fontSize: 15, fontFamily: 'Montserrat-Bold'}}>TOTAL:</Text>
                <Text style={{fontSize: 15, fontFamily: 'Montserrat-Bold'}}>{grandTotal}KM</Text>
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