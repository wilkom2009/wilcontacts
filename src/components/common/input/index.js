import React from 'react';
import {TextInput, View, Text} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Input = ({
  onChangeText,
  style,
  value,
  icon,
  iconPosition,
  label,
  error,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirectionInput = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }
    if (focused) {
      return colors.primary;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {
            borderColor: getBorderColor(),
            flexDirection: getFlexDirectionInput(),
          },
        ]}>
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
