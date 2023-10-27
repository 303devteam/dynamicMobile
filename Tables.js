import { useCustomFonts } from "./assets/fonts/expo-fonts";
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Tables({navigation}) {
    useCustomFonts()

    return(
        <>
        <Image
            source={require('./assets/images/dynamiclogo.png')}
            style={styles.logo}
        />
        

        </>
    );
       
}