import React from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import allStyles from '../styles/allStyles';

/**
 * @returns {*} UI
 */
export const flatListItemSeparator = () => <View style={allStyles.flatlistItemSeparatorStyles} />;

/**
 *
 * @param {*} props
 * @returns {*} UI
 */
export const ListCalls = ({ FlatListItems }) => {
  ListCalls.propTypes = {
    FlatListItems: PropTypes.func.isRequired,
  };
  return (
    <View style={allStyles.listingMainContainer}>
      <FlatList
        data={FlatListItems}
        ItemSeparatorComponent={flatListItemSeparator}
        renderItem={({ item }) => (
          <View>
            <Text style={allStyles.listingItem}>
              Name :
              {' '}
              {item.name ? item.name : 'Unknown'}
              {'\n'}
              DateTime :
              {' '}
              {item.dateTime}
              {'\n'}
              Duration :
              {' '}
              {item.duration}
              {' '}
              Seconds
              {'\n'}
              PhoneNumber :
              {' '}
              {item.phoneNumber}
              {'\n'}
              Type :
              {' '}
              {item.callType}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
