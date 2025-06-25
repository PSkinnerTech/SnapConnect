import { NavigationContext } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';

export default function BlurTabBarBackground() {
  return (
    <BlurView
      // System chrome material automatically adapts to the system's theme
      // and matches the native tab bar appearance on iOS.
      tint="systemChromeMaterial"
      intensity={100}
      style={StyleSheet.absoluteFill}
    />
  );
}

export function useBottomTabOverflow() {
  const navigation = useContext(NavigationContext);
  
  // Check if we have navigation context and if we're in a tab navigator
  if (!navigation) {
    return 0;
  }
  
  const state = navigation.getState();
  const isInTabNavigator = state?.type === 'tab' || 
    state?.routes?.some(route => route.state?.type === 'tab');
  
  // If we're not in a tab navigator, return 0
  if (!isInTabNavigator) {
    return 0;
  }
  
  // For iOS tab bars, we'll use a typical height value
  // This is a safe fallback that matches most iOS tab bar heights
  return 83; // Standard iOS tab bar height with safe area
}
