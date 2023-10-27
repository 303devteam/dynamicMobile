import { useCustomFonts } from "./assets/fonts/expo-fonts";
import { StyleSheet, Text, View, Image } from 'react-native';

export default function MainMenu({navigation}) {
    useCustomFonts()

    return(
        <>
            <Image
                source={require('./assets/images/dynamiclogo.png')}
                style={styles.logo}
            />
            <View style={styles.container}>
                <View style={styles.menuButton}>
                <Image
                    source={require('./assets/images/poolTable.png')}
                    style={{width: 60, height: 57}}
                />
                <Text style={styles.menuButtonText}>TABLES</Text>
                </View>
                <View style={styles.menuButton}>
                <Image
                    source={require('./assets/images/table.png')}
                    style={{width: 53, height: 53}}
                />
                <Text style={styles.menuButtonText}>DAILY LOG</Text>
                </View>
                <View style={styles.menuButton}>
                <Image
                    source={require('./assets/images/stats.png')}
                    style={{width: 48, height: 48}}
                />
                <Text style={styles.menuButtonText}>TABLE STATS</Text>
                </View>
                <View style={styles.buttonsSection}>
                <View style={styles.smallButton}>
                    <Image
                    source={require('./assets/images/calendar.png')}
                    style={{width: 38, height: 40}}
                    />
                    <Text style={styles.smallButtonText}>MONTHLY {'\n'} LOG</Text>
                </View>
                <View style={styles.smallButton}>
                    <Image
                    source={require('./assets/images/calendar.png')}
                    style={{width: 38, height: 40}}
                    />
                    <Text style={styles.smallButtonText}>ANNUAL {'\n'} LOG</Text>
                </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#201E21',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 100
    },
    menuButton: {
      width: 315,
      height: 100,
      backgroundColor: "white",
      opacity: 0.7,
      borderRadius: 20,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      justifyContent: "center",
      alignItems: "center",
      margin: 20,
    },
    menuButtonText: {
      color: "#201E21",
      fontSize: 23,
      marginTop: 7,
      fontFamily: "Montserrat"
    },
    buttonsSection: {
      width: 315,
      height: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20
    },
    smallButton: {
      width: 144,
      height: 116,
      backgroundColor: "white",
      opacity: 0.7,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    smallButtonText: {
      color: "#201E21",
      fontSize: 18,
      textAlign: 'center',
      marginTop: 10,
      fontFamily: "Montserrat"
    }
  });