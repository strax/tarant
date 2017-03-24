import Navigator from 'native-navigation';

export default function (camera) {
  console.log('shot taken');
  Navigator.present('pictureTakenView');
  const options = {};
  if (camera)
    camera.capture({ metadata: options })
      .then((data) => console.log(data))
      .catch(err => console.error(err));
}; 