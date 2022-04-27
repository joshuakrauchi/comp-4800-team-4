import { StyleSheet, SafeAreaView, View } from 'react-native';
import tailwind from 'tailwind-rn';

import InfoBox from './components/InfoBox';
import { InfoBoxItem_1 } from './utilities/constants';
import LearnMore from './components/LearnMore';

export default function App() {
  return (
    <SafeAreaView style={tailwind('flex-auto items-center justify-end flex-col')}>
      <View style={styles.infoview}>
        <InfoBox information={InfoBoxItem_1}/>
        <LearnMore />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  infoview: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 10
  }
});