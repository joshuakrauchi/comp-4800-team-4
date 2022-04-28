import { SafeAreaView, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import UserMap from "./UserMap/UserMap"
import { WebView } from 'react-native-webview';
import { renderToString } from 'react-dom/server'


export default function App() {
  return (
    <SafeAreaView style={tailwind("flex-1 items-center justify-center")}>
      <UserMap />
      
      <View style={tailwind("bg-blue-500 px-5 py-3 rounded-full")}>
        <Text style={tailwind("text-white font-semibold text-lg")}>Hello Tailwind 👋 POG</Text>
      </View>
    </SafeAreaView>
  );
}
