import { StyleSheet, Text, Pressable } from 'react-native'

export default function LearnMore() {
    return (
        <Pressable style={styles.button} onPress={() => console.log('pressed')}>
            <Text style={styles.text}>Learn More</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgb(66, 162, 175)',
        borderRadius: 10,
        position: 'absolute',
        bottom: 20
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        paddingHorizontal: 82,
        paddingVertical: 12
    }
});