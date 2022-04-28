import { StyleSheet, View, Text } from 'react-native';

export default function InfoBox(props) {
    return (
        <View style={styles.view}>
            {(() => props.information.map((i, index) => {
                return (<Text style={styles.text} key={index}>{i}</Text>);
            }))()}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'rgb(243, 245, 246)',
        width: '70%',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingTop: 22,
        paddingBottom: 11,
        marginBottom: 30
    },
    text: {
        textAlign: 'center',
        color: 'rgb(64, 104, 142)',
        paddingBottom: 11,
        fontSize: 16
    }
});