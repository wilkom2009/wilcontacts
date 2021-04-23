import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  pickerOption: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
  },
  optionsWrapper: {
    paddingHorizontal: 20,
  },

  inputContainer: {
    paddingVertical: 12,
  },

  text: {
    fontSize: 17,
    paddingLeft:17
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
