import React from 'react'
import { View, Modal, StatusBar } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'
import styles from './styles'

const zoomPage = (props) => {
  const { data, onClickImage, index, modalVisible, onRequestClose, renderHeader, onChangeImage, onSwipeDown } = props
  // call hamm setVisible, ... forceUpdate
  const others = { alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: '#303030', flex: 1 }
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <View
        style={styles.subMainContainer}>
        <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={onRequestClose}
        >
          <ImageViewer imageUrls={data} index={index}
            renderHeader={renderHeader}
            renderIndicator={() => { }}
            onChange={onChangeImage}
            onSwipeDown={onSwipeDown}
            onClick={onClickImage}
            {...others}
          />
        </Modal>
      </View>
    </View>
  )
}
export default (zoomPage)
