/* @flow */

import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,Dimensions
} from 'react-native';
import ImageCarousel from 'react-native-image-carousel';
import React, { Component } from 'react';

const urls = [
  'https://d919ce141ef35c47fc40-b9166a60eccf0f83d2d9c63fa65b9129.ssl.cf5.rackcdn.com/images/67003.max-620x600.jpg',
  'https://d919ce141ef35c47fc40-b9166a60eccf0f83d2d9c63fa65b9129.ssl.cf5.rackcdn.com/images/51681.max-620x600.jpg',
  'https://d919ce141ef35c47fc40-b9166a60eccf0f83d2d9c63fa65b9129.ssl.cf5.rackcdn.com/images/66812.max-620x600.jpg',
  'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1438960604-925d1997518b66f8508c749f36810793.jpeg',
];
const width = Dimensions.get('window').width

class App extends Component {

  componentWillMount() {
    StatusBar.setBarStyle('dark-content');
  }

  captureImageCarousel = (imageCarousel) => {
    this.imageCarousel = imageCarousel;
  };

  handleHeaderPress = () => (this.imageCarousel).close();

  renderHeader = () => (
    <TouchableWithoutFeedback onPress={this.handleHeaderPress}>
      <View>
        <Text style={styles.closeText}>Exit</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  renderFooter = () => (
    <Text style={styles.footerText}>Footer!</Text>
  );

  renderImage = (idx) => (
    <Image
      style={StyleSheet.absoluteFill}
      resizeMode="contain"
      source={{ uri: urls[idx] }}
    />
  );
  getActiveIndex = (idx) => {
   // alert(idx)
    console.log('idx', idx)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>IMAGES</Text>
        <View>
          <ImageCarousel
            ref={this.captureImageCarousel}
            renderContent={this.renderImage}
            renderHeader={this.renderHeader}
            renderFooter={this.renderFooter}
            getActiveIndex={this.getActiveIndex}
          >
            {urls.map(url => (
              <Image
                style={styles.image}
                key={url}
                source={{ uri: url, width: width }}
                resizeMode="cover"
              />
            ))}
          </ImageCarousel>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  closeText: {
    color: 'white',
    textAlign: 'right',
    padding: 10,
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
  },
  image: {
    marginRight: 2,
    height: 100,
    backgroundColor : 'red'
  },
});

export default App;