import React, { Component } from 'react'
import ZoomHeader from './subHeader'
import ZoomPage from './page'
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
      this.forceUpdate()
    }
    animationEnd = () => {
      this.setState({
        showHeader: false
      }, () => {
        this.forceUpdate()
      })
    }

    onClickBack = () => {
    // call  onSelectedIndex from carousel component detail service product
      const { onSelectedIndex } = this.props
      this.setState({ modalVisible: false })
      onSelectedIndex && onSelectedIndex(this.state.index)
      this.forceUpdate()
    }

    onRequestClose = () => this.setState({ modalVisible: false })

    renderHeader = () => {
      const { showHeader, index } = this.state
      const { data } = this.props
      return (
        <ZoomHeader
          showHeader= {showHeader}
          data= {data}
          index= {index}
          animationEnd ={this.animationEnd}
          onClickBack = {this.onClickBack}
        />
      )
    }
     onChangeImage = (index) => {
       console.log('onChangeImage', index)
       this.setState({ index: index, showHeader: true })
       this.forceUpdate()
     }

    onSwipeDown = () => {
      const { onSelectedIndex } = this.props
      this.setState({ modalVisible: false })
      onSelectedIndex && onSelectedIndex(this.state.index)
      this.forceUpdate()
    }

    onClickImage = () => {
      console.log('onCLickImage')
      this.setState({ showHeader: true })
      this.forceUpdate()
    }
    render () {
      const { data } = this.props
      const { modalVisible, index } = this.state
      const { onRequestClose, renderHeader, onChangeImage, onSwipeDown, onClickImage } = this
      return (
        <ZoomPage
          modalVisible={modalVisible}
          onRequestClose={onRequestClose}
          data={data}
          index={index}
          renderHeader={renderHeader}
          onChangeImage={onChangeImage}
          onSwipeDown={onSwipeDown}
          onClickImage={onClickImage}
        />
      )
    }
}
