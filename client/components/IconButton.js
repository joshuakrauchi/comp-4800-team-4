import { StyleSheet, View, Image } from 'react-native';

import Button from './Button';
import Ellipse from '../images/Ellipse.png';

export default function IconButton(props) {
    return (
        <View style={styles.view}>
            <Image style={styles.image} source={Ellipse}/>
            <Button style={styles.button} title={props.title}/>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 26
    },
    image: {
        zIndex: 10,
        marginRight: '-15%'
    }
});