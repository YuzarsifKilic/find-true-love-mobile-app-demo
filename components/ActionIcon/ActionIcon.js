import {View} from 'react-native';
import {faHeart, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {scaleFontSize} from '../../assets/styles/scaling';
import style from './style';

const ActionIcon = props => {
  const getIcon = () => {
    switch (props.type) {
      case 'heart':
        return faHeart;
      case 'cancel':
        return faXmark;
    }
  };

  const getColor = () => {
    switch (props.type) {
      case 'heart':
        return '#22C55E';
      case 'cancel':
        return '#FF0000';
    }
  };

  return (
    <View style={style.iconContainer}>
      <FontAwesomeIcon
        icon={getIcon()}
        size={scaleFontSize(24)}
        color={getColor()}
      />
    </View>
  );
};

export default ActionIcon;
