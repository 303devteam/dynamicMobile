
import { useCustomFonts } from "./assets/fonts/expo-fonts";
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Tables({navigation}) {
    useCustomFonts()

    return(
        <>
            
            <View style={styles.header}>
                <View style={styles.leftContent}>
                    <Image
                        source={require('./assets/images/dynamiclogo.png')}
                        style={{ width: 100, height: 100 }}
                    />
                </View>

                <View style={styles.rightContent}>
                    <Text style={styles.headerText}>Tables</Text>
                    <View style={styles.poolTable}>
                        <Image
                            source={require('./assets/images/poolTable.png')}
                            style={{ width: 60, height: 57 }}
                        />
                    </View>
                </View>

            </View>


            <View style={styles.container}>
                
            </View>

        </>
    );
       
}


const styles = StyleSheet.create({
    
    headerText:{
        flex: 1,
        color: '#FFFFFF',
        fontSize: 30,

        
    },
    header:{
        backgroundColor: '#201E21',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16
        
    },

   
    leftContent: {
        flexDirection: 'row', 
        alignItems: 'center',
      },


    container: {
        flex: 1,
        backgroundColor: '#201E21',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100
      },

    poolTable: {
       
    }

})