import { StyleSheet, View, Text, Pressable } from 'react-native'

export default function Button(props) {
  return (
    <View style={styles.view}>
      <Pressable style={styles.button} onPress={() => console.log('pressed')}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'rgb(66, 162, 175)',
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 82,
    paddingVertical: 12
  }
});