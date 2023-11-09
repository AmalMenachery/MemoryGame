import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import styles from "./home.styles";
import { Title } from "../../components/atoms/title";
import Button from "../../components/atoms/button";
import { shuffleCards } from "../../utils/cardUtils";
import { Card } from "../../components/molecules/card";
import NTester from "../../assets/img/01_Yara-NTester.png";
import Tera from "../../assets/img/02_YaraTera.png";
import Bela from "../../assets/img/03_YaraBela.png";
import Vita from "../../assets/img/04_YaraVita.png";
import Refresh from "../../assets/svg/refresh.svg";
// import Vera from "../../assets/img/05_YaraVera.png";
// import Rega from "../../assets/img/06_YaraRega.png";
// import Mila from "../../assets/img/07_YaraMila.png";
// import Liva from "../../assets/img/08_YaraLiva.png";

const generateCards = () => {
  // TODO: Handle content in the array while writing the logic for game difficulty level
  const cardData = [
    { image: NTester, itemValue: "NTester", visible: false },
    { image: Tera, itemValue: "Tera", visible: false },
    { image: Bela, itemValue: "Bela", visible: false },
    { image: Vita, itemValue: "Vita", visible: false },
  ];
  const initialCards = shuffleCards([...cardData, ...cardData]);
  return initialCards.map((value, index) => {
    return {
      id: index,
      visible: false,
      ...value,
    };
  });
};

const Home: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(generateCards());
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const resetGame = () => {
    setCards(shuffleCards(generateCards()));
    setSelectedCard(null);
  };

  const flipCard = (card: Card) => {
    if (!card.visible && selectedCard !== null) {
      // Compare the values of the two selected cards
      if (card.itemValue === selectedCard.itemValue) {
        // Cards match, keep them visible
        const updatedCards = cards.map((c) => {
          if (c.id === card.id || c.id === selectedCard.id) {
            return { ...c, visible: true };
          }
          return c;
        });
        setCards(updatedCards);
      } else {
        // Cards don't match, flip them back
        const updatedCards = cards.map((c) => {
          if (c.id === card.id || c.id === selectedCard.id) {
            return { ...c, visible: false };
          }
          return c;
        });
        setCards(updatedCards);
      }
      setSelectedCard(null);
    } else if (!card.visible) {
      // Flips the first card
      const updatedCards = cards.map((c) => {
        if (c.id === card.id) {
          return { ...c, visible: true };
        }
        return c;
      });
      setCards(updatedCards);
      setSelectedCard(card);
    }
  };

  useEffect(() => {
    resetGame(); // Reset the game when the component mounts
  }, []);

  return (
    <View style={styles.container}>
      <Title>Memory Game</Title>
      <View style={styles.resetView}>
        <Button label="New Game" onPress={resetGame} icon={<Refresh />} />
      </View>
      <FlatList
        data={cards}
        numColumns={2}
        keyExtractor={(item) => `${item.id} ${item.itemValue}`}
        renderItem={({ item }) => (
          <Card onPress={() => !item.visible && flipCard(item)} card={item} />
        )}
      />
    </View>
  );
};

export default Home;
