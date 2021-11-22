/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components';
import Card from './Card';
import PropTypes from 'prop-types';


const ListContainer = styled(View)`

`;

const TitleContainer = styled(View)`

`;

const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;
const propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};

class List extends React.PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <ListContainer>

        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>

        <FlatList
          data={content}
          horizontal={true}
          renderItem={({ item }) => <Card item={item} />}
        />

      </ListContainer>
    );
  }
}
List.propTypes = propTypes;

export default List;
