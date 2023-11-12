import { StyleSheet, View, ScrollView, Text, Image } from "react-native"

export default function MonthlyLog({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/images/calendar2.png')}
                    style={{width:53, height:53}}
                />
                <Text style={styles.headerText}>MONTHLY LOG</Text>
                
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
        
    }

})