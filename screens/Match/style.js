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
});

export default style;
