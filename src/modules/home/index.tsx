import React, { useEffect, useState } from "react";
import { View, FlatList, Alert } from "react-native";
import styles from "./home.styles";
import { Title } from "../../components/atoms/title";
import Button from "../../components/atoms/button";
import {
  generateCards,
  isVisibleCardsEven,
  shuffleCards,
} from "../../utils/cardUtils";
import { Card } from "../../components/molecules/card";
import {
  Bela,
  Liva,
  Mila,
  NTester,
  RefreshIcon,
  Rega,
  Tera,
  Vera,
  Vita,
} from "../../assets/img";

const cardData = [
  { image: NTester, itemValue: "NTester", visible: false },
  { image: Tera, itemValue: "Tera", visible: false },
  { image: Bela, itemValue: "Bela", visible: false },
  { image: Vita, itemValue: "Vita", visible: false },
  { image: Vera, itemValue: "Vera", visible: false },
  { image: Rega, itemValue: "Rega", visible: false },
  { image: Mila, itemValue: "Mila", visible: false },
  { image: Liva, itemValue: "Liva", visible: false },
];

const Home: React.FC = ({ route }) => {
  const { difficulty } = route.params;
  const [cards, setCards] = useState<Card[]>(
    generateCards(cardData, difficulty)
  );
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const resetGame = () => {
    setCards(shuffleCards(generateCards(cardData, difficulty)));
    setSelectedCard(null);
  };
  let timer: NodeJS.Timeout | undefined;

  const isFlipDisabled = () =>
    selectedCard !== null && isVisibleCardsEven(cards);

  const updateCards = (card: Card) => {
    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, visible: true } : c
    );
    setCards(updatedCards);
    return updatedCards;
  };

  const flipCard = (card: Card) => {
    if (!card.visible && selectedCard !== null && !selectedCard.visible) {
      // Flips the second card
      const updatedCards = updateCards(card);

      if (card.itemValue !== selectedCard.itemValue) {
        // Flip both cards back after 2 sec
        timer = setTimeout(() => {
          const resetCards = updatedCards.map((c) =>
            c.id === card.id || c.id === selectedCard.id
              ? { ...c, visible: false }
              : c
          );
          setCards(resetCards);
          setSelectedCard(null);
        }, 2000);
      } else {
        setSelectedCard(null);
      }
    } else if (!card.visible) {
      // Flips the first card
      updateCards(card);
      setSelectedCard(card);
    }
  };

  const allCardsFlipped = cards.every((card) => card.visible);

  useEffect(() => {
    if (allCardsFlipped) {
      Alert.alert("Congratulations!", "You won the Game !", [
        {
          text: "Start New Game",
          onPress: () => resetGame(),
        },
      ]);
    }
  }, [allCardsFlipped]);

  useEffect(() => {
    resetGame(); // Reset the game when the component mounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Title>Memory Game</Title>
      <View style={styles.resetView}>
        <Button label="New Game" onPress={resetGame} icon={<RefreshIcon />} />
      </View>
      {/* We could use a cards.maps() and use flexbox to style it.
       Because its 8/12/16 cards and no need of optimized rendering of view port content. */}
      <FlatList
        data={cards}
        numColumns={difficulty}
        keyExtractor={(item) => `${item.id} ${item.itemValue}`}
        renderItem={({ item }) => (
          <Card
            onPress={() => !item.visible && flipCard(item)}
            card={item}
            disabled={isFlipDisabled()}
          />
        )}
        disableVirtualization
      />
    </View>
  );
};

export default Home;
