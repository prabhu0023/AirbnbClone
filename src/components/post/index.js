import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../../components/post/styles';

const Post = ( props) => {
    console.log("check the post value",props)
    const post = props.post
    return(
        <View style={styles.container}>
            <Image style={styles.image}
                source={{ uri:  post.image }} />

            <Text style={styles.bedroom}>{post.bed} bed { post.bedroom} bedroom</Text>
            <Text style={styles.description} numberOfLines={2}>{post.title}</Text>

            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice} </Text>
                <Text style={styles.price}> ${post.newPrice}</Text>
                / night
            </Text>

            <Text style={styles.total}>${post.totalPrice} total</Text>
        </View>
    )
}

export default Post;
