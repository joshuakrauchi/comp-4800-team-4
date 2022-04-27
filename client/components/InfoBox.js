import { View, Text } from 'react-native';
import tailwind from 'tailwind-rn';

export default function InfoBox() {
    return (
        <View style={tailwind('bg-black')}>
            <Text>Yo</Text>
        </View>
    );
}