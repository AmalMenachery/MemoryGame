import { TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./card.styles";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface CardProps {
  card: Card;
  onPress: Function;
  disabled: boolean;
}

export const Card: React.FC<CardProps> = ({
  card,
  onPress,
  disabled = false,
}) => {
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
        disabled={disabled}
      >
        {card.visible ? (
          <Image key={card.id} style={[styles.cardImg, { transform: [{ rotateY: '180deg' }] }]} source={card.image} />
        ) : (
          <Text  key={card.id} style={styles.textStyle}>?</Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};
