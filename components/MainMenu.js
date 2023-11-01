import  useCustomFonts  from '../assets/fonts/expo-fonts';
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function MainMenu({navigation}) {
    const [fontLoaded, setFontLoaded] = useState(false)

    useEffect(() => {
      useCustomFonts().then(() => {
        setFontLoaded(true)
      })
    })

    if (!fontLoaded) {
      return null
    }

    return(
          <View style={styles.container}>
            <Image
              source={require('../assets/images/dynamiclogo.png')}
              style={styles.logo}
            />
            <View style={styles.innerContainer}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.menuButton}
                  onPress={() => navigation.navigate('Tables')}
                >
                  <Image
                      source={require('../assets/images/poolTable.png')}
                      style={{width: 60, height: 57}}
                  />
                  <Text style={styles.menuButtonText}>TABLES</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuButton}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('DailyLog')}
                >
                  <Image
                      source={require('../assets/images/table.png')}
                      style={{width: 53, height: 53}}
                  />
                  <Text style={styles.menuButtonText}>DAILY LOG</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuButton}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('TableStats')}
                >
                  <Image
                      source={require('../assets/images/stats.png')}
                      style={{width: 48, height: 48}}
                  />
                  <Text style={styles.menuButtonText}>TABLE STATS</Text>
                </TouchableOpacity>
                <View style={styles.buttonsSection}>
                  <TouchableOpacity
                    style={styles.smallButton}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('MonthlyLog')}
                  >
                      <Image
                      source={require('../assets/images/calendar.png')}
                      style={{width: 38, height: 40}}
                      />
                      <Text style={styles.smallButtonText}>MONTHLY {'\n'} LOG</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.smallButton}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate('AnnualLog')}
                  >
                      <Image
                      source={require('../assets/images/calendar.png')}
                      style={{width: 38, height: 40}}
                      />
                      <Text style={styles.smallButtonText}>ANNUAL {'\n'} LOG</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
      )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#201E21',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingTop: 100,
      paddingBottom: 100
    },
    innerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuButton: {
      width: 315,
      height: 100,
      backgroundColor: "white",
      opacity: 0.9,
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
      opacity: 0.9,
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
    },
    logo: {
      position: 'absolute',
      top: 40,
      left: 15,
      width: 250,
      height: 300
    }
  });