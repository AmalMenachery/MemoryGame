import { TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./card.styles";

interface CardProps {
  card: Card;
  onPress: Function;
}

export const Card: React.FC<CardProps> = ({ card, onPress }) => (
  <TouchableOpacity
    style={[styles.card, card.visible && styles.cardVisible]}
    onPress={() => !card.visible && onPress(card)}
  >
    {card.visible ? (
      <Image style={styles.cardImg} source={card.image} />
    ) : (
      <Text style={styles.textStyle}>?</Text>
    )}
  </TouchableOpacity>
);
