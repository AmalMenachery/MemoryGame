import { TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./card.styles";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface CardProps {
  card: Card;
  onPress: Function;
}

export const Card: React.FC<CardProps> = ({ card, onPress }) => {
  const animStyle = useAnimatedStyle(() => {
    const spinVal = card.visible ? 180 : 0;
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  });

  return (
    <Animated.View style={animStyle}>
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
    </Animated.View>
  );
};
