import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/modules/home";
import Start from "./src/modules/start";

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* In a real project you would create a navigation folder, its an overkill for this context */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Start">
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Game" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
