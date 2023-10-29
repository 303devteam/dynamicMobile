import { useCustomFonts } from "./assets/fonts/expo-fonts";
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Tables({navigation}) {
    useCustomFonts()

    return(
        <>
            <Image
                source={require('./assets/images/dynamiclogo.png')}
            />

            <View style={styles.container}>
                <View style={styles.tablePic}>
                <Image
                    source={require('./assets/images/poolTable.png')}
                />
                </View>
            </View>

        </>
    );
       
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#201E21',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100
      },

    tablePic: {
        width: 60,
        
    }

})