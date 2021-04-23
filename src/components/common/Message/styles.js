import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 45,
    paddingHorizontal: 5,
    paddingVertical: 13,
    marginVertical: 5,
    borderRadius: 4,
  },

  inputContainer: {
    paddingVertical: 12,
  },

  loadingSection: {
    flexDirection: 'row',
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
