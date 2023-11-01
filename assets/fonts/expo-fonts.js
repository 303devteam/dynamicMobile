import * as Font from 'expo-font'

export default async function useCustomFonts() {
  return await Font.loadAsync({
    Montserrat: require('./Montserrat.otf')
  })
}