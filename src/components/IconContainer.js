import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import allStyles from '../styles/allStyles';

/**
 *
 * @param {*} props
 * @returns {*} DashbordScreen
 * @function
 * @description it takes navigation from props and it returns the
 * DashbordScreen UI
 */
const IconContainer = ({ iconSource }) => {
  IconContainer.propTypes = {
    iconSource: PropTypes.string.isRequired,
  };
  // const { iconSource } = props;
  return (
    <View>
      <Image style={allStyles.iconContainer} source={iconSource} />
    </View>
  );
};

export default IconContainer;
