import React from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({
  title,
  loading,
  disabled,
  primary,
  secondary,
  danger,
  onPress,
  ...props
}) => {
  
  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }

    if (secondary) {
      return colors.secondary;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}
      onPress={onPress}>
      <View style={[styles.loadingSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <Text
            style={{
              color: disabled ? colors.black : colors.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {loading ? 'Please wait ...' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
