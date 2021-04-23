import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  name: {
    fontSize: 17,
  },

  lastname: {
    fontSize: 17,
    paddingLeft: 10,
  },

  phoneNumber: {
    opacity: 0.6,
    fontSize: 14,
    paddingVertical: 5,
  },

  floatingActionButton: {
    backgroundColor: colors.danger,
    width: 55,
    height: 55,
    position: 'absolute',
    bottom: 45,
    right: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
