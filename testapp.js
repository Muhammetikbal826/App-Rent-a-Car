import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const winWidth = Dimensions.get('window').width;

const NewWork = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('./indir.png')}
            style={styles.headerImage}
          />
          <View style={styles.lineContainer}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Living Room</Text>
            <Text style={styles.descriptionText}>Ayarlarınızı yapın</Text>
          </View>
          <View style={styles.iconRow}>
            <View style={styles.iconContainer}>
              <Image
                source={require('./indir.png')}
                style={styles.iconImage}
              />
              <View style={styles.iconTextContainer}>
                <Text style={styles.iconText}>Control</Text>
                <View style={styles.statusContainer}>
                  <View style={styles.statusCircle}></View>
                </View>
                
              </View>
            </View>
            <View style={styles.iconContainer}>
              <Image
                source={require('./indir.png')}
                style={styles.iconImage}
              />
              <View style={styles.iconTextContainer}>
                <Text style={styles.iconText}>Control</Text>
                <View style={styles.statusContainer}>
                  <View style={styles.statusCircle}></View>
                </View>
                
              </View>
            </View>
            <View style={styles.iconContainer}>
              <Image
                source={require('./indir.png')}
                style={styles.iconImage}
              />
              <View style={styles.iconTextContainer}>
                <Text style={styles.iconText}>Control</Text>
                <View style={styles.statusContainer}>
                  <View style={styles.statusCircle}></View>
                </View>
                
              </View>
            </View>
          </View>
          <View style={styles.iconRow}>
            <View style={styles.iconContainer}>
              <Image
                source={require('./indir.png')}
                style={styles.iconImage}
              />
              <View style={styles.iconTextContainer}>
                <Text style={styles.iconText}>Control</Text>
                <View style={styles.statusContainer}>
                  <View style={styles.statusCircle}></View>
                </View>
                
              </View>
            </View>
            <View style={styles.iconContainer}>
              <Image
                source={require('./indir.png')}
                style={styles.iconImage}
              />
              <View style={styles.iconTextContainer}>
                <Text style={styles.iconText}>Control</Text>
                <View style={styles.statusContainer}>
                  <View style={styles.statusCircle}></View>
                </View>
                
              </View>
            </View>
            <View style={styles.iconContainer}>
              <Image
                source={require('./indir.png')}
                style={styles.iconImage}
              />
              <View style={styles.iconTextContainer}>
                <Text style={styles.iconText}>Control</Text>
                <View style={styles.statusContainer}>
                  <View style={styles.statusCircle}></View>
                </View>
                
              </View>
            </View>
          </View>
          
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  headerImage: {
    width: winWidth * 0.75,
    height: winWidth * 1,
    borderRadius: 30,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  line: {
    flex: 0.07,
    height: 4,
    backgroundColor: '#F86B76',
    marginHorizontal: 5,
  },
  textContainer: {
    width: winWidth * 0.75,
    alignItems: 'flex-start',
    marginTop: 15,
  },
  titleText: {
    color: 'black',
    fontSize: 27,
    fontWeight: '800',
  },
  descriptionText: {
    color: 'black',
    marginTop: 5,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent:  'space-between',
    marginTop: 20,
  },
  iconContainer: {
    backgroundColor: '#EEEEEE',
    width: 100,
    height: 100,
    borderRadius: 20,
    
  },
  iconImage: {
    width: winWidth * 0.1,
    height: winWidth * 0.1,
    margin: 5,
    
    marginLeft:'auto',
    marginRight:'auto',
    opacity: 0.5,
  },
  
  iconTextContainer: {
    marginLeft: 5,
    
  },
  iconText: {
    color: 'black',
    fontSize: 14,
    marginLeft: 5,
    marginLeft:'auto',
    marginRight:'auto',
  },
  statusContainer: {
    backgroundColor: '#D9D9D9',
    width: 50,
    height: 25,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 5,
  },
  statusCircle: {
    backgroundColor: 'white',
    width: 25,
    height: 25,
    borderRadius: 40,
  },
  offButton: {
    width: winWidth * 0.1,
    height: winWidth * 0.1,
    marginLeft: 20,
    marginTop: 5,
  },
});

export default NewWork;
