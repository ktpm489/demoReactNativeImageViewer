import { StyleSheet, Platform } from 'react-native'
import { width, heightScale, verticalScale } from 'common/globalStyles'
const ISIOS = Platform.OS === 'ios'
const topNavBarIOS = heightScale(ISIOS ? 3 : 0)
const heightNavBar = heightScale(ISIOS ? 11.5 : 8.5)
const styles = StyleSheet.create({
  mainHeaderContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 10,
    width: width(100),
    justifyContent: 'space-between',
    paddingTop: topNavBarIOS,
    height: heightNavBar,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    zIndex: 9998,
    opacity: 1
  },
  mainContainer: {
    flex: 1
  },
  subMainContainer: {
    padding: 10
  },
  customMainView: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#303030',
    flex: 1
  },
  animatedView: {
    width: width(100),
    justifyContent: 'space-between',
    paddingTop: topNavBarIOS,
    height: heightNavBar,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    zIndex: 9999
  },
  backBtn: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: width(14),
    paddingVertical: heightScale(2),
    top: verticalScale(1.3),
    zIndex: 99999
  },
  indexText: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width(66),
    color: '#FEFEFE',
    alignSelf: 'center',
    textAlign: 'center',
    opacity: 1,
    fontSize: width(6)
  },
  rightView: {
    width: width(14),
    alignItems: 'flex-end',
    opacity: 1
  }
})

export default styles
