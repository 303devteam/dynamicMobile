import { useState } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native"
import SelectDropdown from "react-native-select-dropdown";


export default function MonthlyLog({navigation}) {
    const date = new Date()
    const months = ["January", "February", "March", "June", "July", "August", "September", "October", "November", "December"];
    const years = ["2023", "2024"]
    const [year, setYear] = useState(date.getFullYear())
    const [month, setMonth] = useState(date.getMonth()+1) 
    
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
                    defaultButtonText="October"
                    
                    
                />
                
                <SelectDropdown
                    data = {years}
                    buttonStyle={styles.yearButton}
                    defaultButtonText="2023"

                />
                
            </View>

            <ScrollView style={styles.table} stickyHeaderIndices={[0]}>
                <View>
                    <View style={styles.tableHead}>
                        <Text style={styles.tableHeadText}>Date</Text>
                        <Text style={styles.tableHeadText}>Comm</Text>
                        <Text style={styles.tableHeadText}>Member</Text>
                        <Text style={styles.tableHeadText}>Private</Text>
                        <Text style={styles.tableHeadText}>Total</Text>
                    </View>

                    <View style={styles.tableEntry}>
                        <Text style={styles.tableEntryText}>01/10/23</Text>
                        <Text style={styles.tableEntryText}>523KM</Text>
                        <Text style={styles.tableEntryText}>300KM</Text>
                        <Text style={styles.tableEntryText}>700KM</Text>
                        <Text style={styles.tableEntryText}>1500KM</Text>
                    </View>
                    <View style={styles.tableEntry}>
                        <Text style={styles.tableEntryText}>01/10/23</Text>
                        <Text style={styles.tableEntryText}>523KM</Text>
                        <Text style={styles.tableEntryText}>300KM</Text>
                        <Text style={styles.tableEntryText}>700KM</Text>
                        <Text style={styles.tableEntryText}>1500KM</Text>
                    </View>
                    <View style={styles.tableEntry}>
                        <Text style={styles.tableEntryText}>01/10/23</Text>
                        <Text style={styles.tableEntryText}>523KM</Text>
                        <Text style={styles.tableEntryText}>300KM</Text>
                        <Text style={styles.tableEntryText}>700KM</Text>
                        <Text style={styles.tableEntryText}>1500KM</Text>
                    </View>
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
        fontFamily: 'MontSerrat',
        
    },

    dropdowns:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 340
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
        marginLeft: 10
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
        backgroundColor: 'white',
        paddingRight:90,
        
    },

    tableHeadText: {
        display: 'flex',
        width: '28%',
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
        borderBottomWidth: 1,
        paddingRight: 65
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
    },
    

})