import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Title } from "../../components/atoms/title";
import Button from "../../components/atoms/button";

const Start: React.FC = ({ navigation }) => {
  const difficulties = [
    { label: "EASY", columns: 2 },
    { label: "MEDIUM", columns: 3 },
    { label: "HARD", columns: 4 },
  ];
  const navigateToGameScreen = (difficulty: number) => {
    navigation.navigate("Game", { difficulty });
  };
  return (
    <View style={styles.container}>
      <Title>Memory Game</Title>
      <View style={styles.content}>
        <Text style={styles.title}>Select Difficulty</Text>
        <View style={styles.selectionContainer}>
          {difficulties.map((level) => (
            <Button
              label={level.label}
              key={level.columns}
              onPress={() => navigateToGameScreen(level.columns)}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  content: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  selectionContainer: { marginTop: 10, flex: 1 },
});

export default Start;
