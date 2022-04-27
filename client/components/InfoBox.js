import { StyleSheet, View, Text } from 'react-native';

export default function InfoBox(props) {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>
                {props.information[0]}
            </Text>
            <Text style={styles.text}>
                {props.information[1]}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'rgb(243, 245, 246)',
        width: '70%',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 30,
        borderColor: 'blue',
        borderStyle: 'solid',
        borderWidth: 1
    },
    text: {
        textAlign: 'center',
        color: 'rgb(64, 104, 142)'
    }
})