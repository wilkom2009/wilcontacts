import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 45,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
