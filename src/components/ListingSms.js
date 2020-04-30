import React from 'react';
import { Text, FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import allStyles from '../styles/allStyles';
import { flatListItemSeparator } from './ListingCalls';

/**
 *
 * @param {*} props
 * @returns {*} UI
 */
const ListingSms = ({ FlatListItems }) => {
  ListingSms.propTypes = {
    FlatListItems: PropTypes.func.isRequired,
  };

  return (
    <View style={allStyles.listingMainContainer}>
      <FlatList
        data={FlatListItems}
        ItemSeparatorComponent={flatListItemSeparator}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={allStyles.listingItem}>
              SMS ID:
              {' '}
              {item._id}
              {'\n\n'}
              Address :
              {' '}
              {item.address}
              {'\n\n'}
              Date:
              {' '}
              {new Date(item.date).toString()}
              {'\n\n'}
              Type:
              {' '}
              {item.type}
              {'\n\n'}
              Body :
              {item.body}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListingSms;
