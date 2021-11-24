/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable } from 'react-native';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class PlayButton extends React.PureComponent {
    render() {
        return (
            <Pressable>
                <Icon name={'play-circle'} size={50} color="black" />
            </Pressable>
        );
    }
}

export default PlayButton;
