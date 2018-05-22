import React, { Component } from "react";
import { View, Modal, TouchableNativeFeedback, Text , Dimensions } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import * as Animatable from 'react-native-animatable';
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
    modalVisible: true,
    showHeader : true
  };

   componentWillReceiveProps = (nextProps) => {
    nextProps.modalVisible && this.setState({ modalVisible : nextProps.modalVisible}) 
  }
  animationEnd = () => {
    this.setState({
      showHeader: false
    })
  }
  renderHeader = () => {
      //  <Text style={{ width: width, marginTop: 20, color: 'white', alignSelf: 'center', textAlign: 'center', backgroundColor: 'black' }}>{index}</Text>
       const {showHeader , index} = this.state
       console.log("index", index)
      return (
        <View style={{ width: width, paddingHorizontal :30, marginTop : 30,alignSelf: 'center', backgroundColor: 'red', opacity: 1 }}>
       { (showHeader) ? 
           // <Animatable.View onAnimationEnd={this.animationEnd} animation='fadeOut' delay= {3000} duration={10}  style={{ width: width, alignSelf: 'center', backgroundColor: 'red' }}>
            <Animatable.Text onAnimationEnd={this.animationEnd} animation='fadeOut' delay= {3000} duration={10} style={{ width: width, color: 'white', alignSelf: 'center', textAlign: 'center', backgroundColor: 'black', opacity: 1 }}>{index}</Animatable.Text>
          // </Animatable.View>
          : <Text style={{ width: width, color: 'white', alignSelf: 'center', textAlign: 'center', backgroundColor: 'black' ,opacity : 0 }}>{index}</Text>
       }  
       </View>
      )
  }
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
          <ImageViewer imageUrls={images} index={this.state.index} renderHeader={(index) =>this.renderHeader()} 
          renderIndicator = {() => {}}
          onChange = {(index)=> this.setState({index  : index, showHeader :true})}
          onSwipeDown={() => {this.setState({ modalVisible: false })} }
            onClick={() => { this.setState({ showHeader: true })} }
            renderFooter={(index) => this.renderHeader()} 
            
            />
        </Modal>
        <Text> AAAAAAAAAAA</Text>
      </View>
    );
  }
}