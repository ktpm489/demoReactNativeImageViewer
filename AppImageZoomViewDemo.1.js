import React, { Component } from "react";
import { View, Modal, TouchableNativeFeedback, Text , Dimensions } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

const images = [
  {
    url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
    props : {
       renderHeader:  () =>  <Text style={{ width: 20, height: 20, color: 'white', backgroundColor: 'white' ,marginTop : 10 }}>AAAA</Text> 
    }
  },
  {
    url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460"
  },
  {
    url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460"
  }
];
const width = Dimensions.get('window').width
export default class Main extends Component {
  state = {
    index: 0,
    modalVisible: true
  };

  render() {
    return (
      <View
        style={{
          padding: 10
        }}
      >
        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          onRequestClose={() => this.setState({ modalVisible: false })}
        >
          <ImageViewer imageUrls={images} index={this.state.index} renderHeader={(index) => <Text style={{ width: width, marginTop : 20, color: 'white',alignSelf :'center', textAlign :'center' ,backgroundColor: 'black' }}>{index}</Text>} 
          renderIndicator = {() => {}}
          onSwipeDown={() => {this.setState({ modalVisible: false })} }
          onClick={() => { this.setState({ modalVisible: false })} }/>
        </Modal>
        <Text> AAAAAAAAAAA</Text>
      </View>
    );
  }
}