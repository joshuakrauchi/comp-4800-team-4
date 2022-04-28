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
        paddingVertical: 22,
        marginBottom: 30
    },
    text: {
        textAlign: 'center',
        color: 'rgb(64, 104, 142)'
    }
});