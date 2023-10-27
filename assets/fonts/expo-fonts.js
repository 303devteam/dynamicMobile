import { useFonts } from 'expo-font';

export const useCustomFonts = () =>
  useFonts({
    Montserrat: require('./Montserrat.otf')
  });