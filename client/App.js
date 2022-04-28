import { StyleSheet, SafeAreaView, View } from 'react-native';
import tailwind from 'tailwind-rn';

import InfoBox from './components/InfoBox';
import { InfoBoxItem_1 } from './utilities/constants';
import Button from './components/Button';
import IconButton from './components/IconButton';

export default function App() {
  return (
    <SafeAreaView style={[tailwind('flex-auto items-center justify-end flex-col'), styles.safeview]}>
      <View style={styles.infoview}>
        <IconButton title={'Find Badge'}></IconButton>
        <InfoBox information={InfoBoxItem_1}/>
        <Button title={'Learn More'}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeview: {
    backgroundColor: 'rgb(228, 242, 255)'
  },
  infoview: {
    marginBottom: 10
  }
});