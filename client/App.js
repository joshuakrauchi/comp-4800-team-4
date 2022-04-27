import { SafeAreaView, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

import InfoBox from './components/InfoBox';
import LearnMore from './components/LearnMore';

export default function App() {
  return (
    <SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
      <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
        <Text style={tailwind('text-white font-semibold text-lg')}>
          Hello Tailwind 👋 POG
        </Text>
      </View>
      <InfoBox/>
      <LearnMore/>
    </SafeAreaView>
  );
}
