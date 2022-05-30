import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./musicCard.style"

const musiccard = (props) => {
    return (
        <View style={styles.container}>

            <Image style={styles.image} source={{ uri: props.song.imageUrl }} />

            <View style={styles.inner_container}>
                <Text style={styles.title}>{props.song.title}</Text>
                <View style={styles.content_container}>
                    <View style={styles.info_container}>
                        <Text style={styles.artist}>{props.song.artist}</Text>
                        <Text style={styles.year}>{props.song.year}</Text>
                    </View>

                    {props.song.is_favorite && (
                        <View style={styles.soldaut_container}>
                            <Text style={styles.text_soldaut_container}>FAVORİTE</Text>
                        </View>
                    )}

                </View>
            </View>
        </View>
    );
}
export default musiccard;
