import React from 'react';
import { Text } from 'react-native';
import { styles } from './title.styles';

export const Title: React.FC = props => {
  return <Text {...props} style={styles.fontStyles} />;
};
