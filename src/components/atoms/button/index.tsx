import React, { ReactElement } from "react";

import { View, Text, Pressable } from "react-native";

import styles from "./button.styles";
interface ButtonProps {
  label?: string;
  btnStyle?: object;
  labelStyle?: object;
  onPress?: any;
  isDisabled?: boolean;
  icon?: ReactElement;
}
const Button: React.FC<ButtonProps> = ({
  label,
  labelStyle,
  btnStyle,
  onPress,
  isDisabled = false,
  icon,
}) => {
  return (
    <Pressable onPress={onPress} disabled={isDisabled}>
      <View style={[styles.wrapper, btnStyle]}>
        <View style={styles.iconContainer}>{icon}</View>
        <View style={styles.textContainer}>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default Button;
