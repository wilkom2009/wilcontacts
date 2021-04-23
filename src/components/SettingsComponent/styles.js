import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },

  container: {
    backgroundColor: colors.white,
  },
  itemTitle: {
    fontSize: 17,
  },
  itemSubTitle: {
    fontSize: 14,
    color: colors.black,
    opacity: 0.6,
    paddingTop: 5,
  },

  modalTouch: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
  },
});
