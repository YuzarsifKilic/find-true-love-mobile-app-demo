import {Animated, Image, PanResponder, Text, View} from 'react-native';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleUp} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize} from '../../assets/styles/scaling';
import ActionIcon from '../../components/ActionIcon/ActionIcon';
import {useRef, useState} from 'react';

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

  const [profileIndex, setProfileIndex] = useState(0);
  const pan = useRef(new Animated.ValueXY()).current;

  const nextProfile = () => {
    setProfileIndex(prevIndex =>
      prevIndex + 1 < profiles.length ? prevIndex + 1 : 0,
    );
    pan.setValue({x: 0, y: 0});
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (e, gesture) => {
      if (gesture.dx > 120) {
        Animated.timing(pan, {
          toValue: {x: 500, y: 0},
          duration: 300,
          useNativeDriver: false,
        }).start(() => nextProfile());
      } else if (gesture.dx < -120) {
        Animated.timing(pan, {
          toValue: {x: -500, y: 0},
          duration: 300,
          useNativeDriver: false,
        }).start(() => nextProfile());
      } else {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      }
    },
  });

  // Kart döndürme açısını belirleme
  const rotate = pan.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-20deg', '0deg', '20deg'],
    extrapolate: 'clamp',
  });

  const likeOpacity = pan.x.interpolate({
    inputRange: [30, 100], // Eşik değerleri düşürüldü
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const dislikeOpacity = pan.x.interpolate({
    inputRange: [-100, -30], // Eşik değerleri düşürüldü
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={style.imageContainer}>
      <Animated.View
        {...panResponder.panHandlers}
        style={{transform: [{rotate}, ...pan.getTranslateTransform()]}}>
        <Image
          source={require('../../assets/images/profile_image.jpeg')}
          style={style.profileImage}
          resizeMode={'cover'}
        />
        <Animated.Text style={[style.likeLabel, {opacity: likeOpacity}]}>
          Liked
        </Animated.Text>
        <Animated.Text style={[style.dislikeLabel, {opacity: dislikeOpacity}]}>
          Disliked
        </Animated.Text>
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
      </Animated.View>
      <View style={style.actionIconsContainer}>
        <ActionIcon type={'heart'} />
        <ActionIcon type={'cancel'} />
      </View>
    </View>
  );
};

export default Match;
