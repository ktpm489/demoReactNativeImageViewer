import React, { Component } from 'react'
import { View, Modal, TouchableOpacity, StatusBar } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'
import * as Animatable from 'react-native-animatable'
import {icCustomBack} from 'common/globalIcon'
import styles from './stylesZoom'
export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: props.indexActive || 0,
      modalVisible: props.modalVisible,
      showHeader: true
    }
  }

    componentWillReceiveProps = (nextProps) => {
      nextProps.modalVisible !== null && this.setState({ modalVisible: nextProps.modalVisible })
      nextProps.index !== null && this.setState({ index: nextProps.index })
    }
    animationEnd = () => {
      this.setState({
        showHeader: false
      }, () => {
        this.forceUpdate()
      })
    }

    onClickBack = () => {
      const { onSelectedIndex } = this.props
      this.setState({ modalVisible: false })
      onSelectedIndex(this.state.index)
      this.forceUpdate()
    }

    renderHeader = () => {
      const { showHeader, index } = this.state
      const { data } = this.props
      let length = data.length
      const showData = (
        <View style={styles.mainHeaderContainer} >
          <Animatable.View onAnimationEnd={this.animationEnd} style= { styles.animatedView} animation='fadeOut' duration={1000} delay={3000}>
            <TouchableOpacity onPress={this.onClickBack} activeOpacity={1} style={styles.backBtn}>
              {icCustomBack}
            </TouchableOpacity>
            <Animatable.Text animation='fadeOut' delay={3000} duration={1000} style={styles.indexText}>{(index + 1) + ' of ' + length}</Animatable.Text>
            <View style={styles.rightView}></View>
          </Animatable.View>
        </View>
      )
      const hideData =
      (
        <View style={styles.mainHeaderContainer}>
        </View>
      )
      return (
        showHeader ? showData : hideData

      )
    }

    render () {
      const { data, onSelectedIndex } = this.props
      const others = { alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: '#303030', flex: 1 }
      return (
        <View style={styles.mainContainer}>
          <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
          <View
            style={styles.subMainContainer}>
            <Modal
              visible={this.state.modalVisible}
              transparent={true}
              onRequestClose={() => this.setState({ modalVisible: false })}
            >
              <ImageViewer imageUrls={data} index={this.state.index}
                renderHeader={(index) => this.renderHeader()}
                renderIndicator={() => {} }
                onChange={(index) => this.setState({ index: index, showHeader: true })}
                onSwipeDown={() => { this.setState({ modalVisible: false }); onSelectedIndex(this.state.index); this.forceUpdate() }}
                onClick={() => { this.setState({ showHeader: true }); this.forceUpdate() }}
                {...others}
              />
            </Modal>
          </View>
        </View>
      )
    }
}
