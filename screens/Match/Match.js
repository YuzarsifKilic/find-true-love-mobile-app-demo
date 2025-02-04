import {Image, Text, View} from 'react-native';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleUp} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize} from '../../assets/styles/scaling';
import ActionIcon from '../../components/ActionIcon/ActionIcon';

const Match = props => {
  const profiles = [
    {
      id: 1,
      name: 'Pim',
      age: 44,
      imagePath: '../../assets/images/profile_image.jpeg',
    },
    {
      id: 2,
      name: 'Yusuf',
      age: 24,
      imagePath: '../../assets/images/profile_image.jpeg',
    },
  ];

  return (
    <View style={style.imageContainer}>
      <View>
        <Image
          source={require('../../assets/images/profile_image.jpeg')}
          style={style.profileImage}
          resizeMode={'cover'}
        />
        <View style={style.infoOverlay}>
          <View style={style.contentHeaderContainer}>
            <View>
              <Text style={style.nameText}>Pim, 44</Text>
              <Text style={style.distanceText}>2 miles away</Text>
            </View>
            <View style={style.iconContainer}>
              <FontAwesomeIcon
                icon={faCircleUp}
                size={scaleFontSize(24)}
                color={'#FFFFFF'}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={style.actionIconsContainer}>
        <ActionIcon type={'heart'} />
        <ActionIcon type={'cancel'} />
      </View>
    </View>
  );
};

export default Match;
