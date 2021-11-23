/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList } from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';
import { ListContainer, TitleContainer, Title } from './styles/List-styles';


const propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};

class List extends React.PureComponent {
  render() {
    const { navigation, title, content } = this.props;
    return (
      <ListContainer>

        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>

        <FlatList
          data={content}
          horizontal={true}
          renderItem={({ item }) => <Card navigation={navigation} item={item} />}
        />

      </ListContainer>
    );
  }
}
List.propTypes = propTypes;

export default List;
