import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { icCustomBack } from 'common/globalIcon'
import styles from './styles'

const zoomHeader = (props) => {
  const { showHeader, index, data, animationEnd, onClickBack } = props
  const showData = (
    <View style={styles.mainHeaderContainer} >
      <Animatable.View onAnimationEnd={animationEnd} style={styles.animatedView} animation='fadeOut' duration={1000} delay={3000}>
        <TouchableOpacity onPress={onClickBack} activeOpacity={1} style={styles.backBtn}>
          {icCustomBack}
        </TouchableOpacity>
        <Animatable.Text animation='fadeOut' delay={3000} duration={1000} style={styles.indexText}>{(index + 1) + ' of ' + data.length}</Animatable.Text>
        <View style={styles.rightView}></View>
      </Animatable.View>
    </View>
  )
  const hideData = (<View style={styles.mainHeaderContainer}/>)
  return (
    showHeader ? showData : hideData

  )
}
export default (zoomHeader)
