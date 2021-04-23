import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  imageView: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    borderRadius: 100,
  },

  chooseText: {
    color: colors.primary,
    textAlign: 'center',
  },

  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500',
  },

  form: {
    paddingTop: 20,
  },

  createSection: {
    flexDirection: 'row',
  },

  linkBtn: {
    paddingLeft: 20,
    color: colors.primary,
    fontSize: 16,
  },

  infoText: {
    fontSize: 17,
  },
});
