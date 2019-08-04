import React from 'react';
import{ Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {

    return (
        <View>
            <Text> {props.album.title} </Text>
        </View>
    );
};


export default AlbumDetail;