import React from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/theme/colors';
import Icon from '../Icon';
import styles from './styles';
import ImagePickerCropper from 'react-native-image-crop-picker';

const ImagePicker = React.forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take from camera',
      icon: (
        <Icon type="material" name="camera" color={colors.grey} size={21} />
      ),
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
          cropping: true,
        })
          .then(images => {
            onFileSelected(images);
          })
          .catch(error => {
            console.log('ERROR IMG : ', error);
          });
      },
    },
    {
      name: 'Choose from gallery',
      icon: <Icon type="material" name="image" color={colors.grey} size={21} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 300,
          cropping: true,
        })
          .then(images => {
            onFileSelected(images);
          })
          .catch(error => {
            console.log('ERROR IMG : ', error);
          });
      },
    },
  ];
  return (
    <RBSheet
      ref={ref}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}>
      <View style={styles.optionsWrapper}>
        {options.map(({name, onPress, icon}) => (
          <TouchableOpacity
            key={name}
            onPress={onPress}
            style={styles.pickerOption}>
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
