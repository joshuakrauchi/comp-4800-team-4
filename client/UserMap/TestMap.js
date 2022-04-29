import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://infinite.red' }}
        style={{ marginTop: 20,
          width: 400,
          maxHeight: 600,
          height: 200,
          flex: 1 }}
      />
    );
  }
}

export default MyWeb;