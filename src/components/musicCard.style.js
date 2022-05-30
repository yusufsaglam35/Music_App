import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    content_container: {
        flexDirection: 'row',
    },
    inner_container: {
        padding: 20,
        flex: 1,
    },
    soldaut_container: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        padding: 5,
    },
    text_soldaut_container: {
        color: 'red',
        fontSize: 12,

    },
    info_container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    year: {
        marginLeft: 10,
        color: 'gray',
        fontSize: 12,

    },
    artist: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});