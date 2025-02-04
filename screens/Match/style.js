import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profileImage: {
    width: verticalScale(280),
    height: horizontalScale(600),
    borderRadius: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: horizontalScale(20),
    marginVertical: verticalScale(20),
  },
  infoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,

    // Yarı saydam bir katman, siyahın biraz şeffaf hali
    backgroundColor: 'rgba(0,0,0,0.3)',

    // Eğer alt köşelerin de yuvarlak olmasını istiyorsanız:
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    // Bu şekilde overlay'i resmin alt kenarına yaslarsınız
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  nameText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  distanceText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  contentHeaderContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  iconContainer: {
    marginTop: horizontalScale(4),
  },
  actionIconsContainer: {
    flexDirection: 'row',
  },
  likeLabel: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#22C55E',
    transform: [{rotate: '20deg'}],
    borderWidth: 2,
    borderColor: '#22C55E',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  dislikeLabel: {
    position: 'absolute',
    top: 20,
    right: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF0000',
    transform: [{rotate: '-20deg'}],
    borderWidth: 2,
    borderColor: '#FF0000',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default style;
