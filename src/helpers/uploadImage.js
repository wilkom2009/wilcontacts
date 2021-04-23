import storage from '@react-native-firebase/storage';

export default file => onSuccess => onError => {
  const arr = file.path.split('/');
  const path = 'contact-pictures/user/777' + arr[arr.length - 1];
  //console.log('PATH ==== : ', path);
  const ref = storage().ref(path);

  const task = ref.putFile(file.path);

  task
    .then(async () => {
      const url = await ref.getDownloadURL();
      onSuccess(url);
    })
    .catch(error => {
      onError(error);
    });
};
