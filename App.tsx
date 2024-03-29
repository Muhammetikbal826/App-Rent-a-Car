import React from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const winWidth = Dimensions.get('window').width;

const AnaSayfa = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('./resim/togg.png')}
            style={styles.headerImage}
          />
          <View style={styles.lineContainer}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Hoş Geldiniz</Text>
            <Text style={styles.descriptionText}>Ana Sayfa</Text>
          </View>
          <View style={styles.iconRow}>
            <View style={styles.iconContainer}>
              <Image
                source={require('./resim/togg.png')}
                style={styles.iconImage}
              />
              <Text style={styles.iconText}>İkon 1</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image
                source={require('./resim/togg.png')}
                style={styles.iconImage}
              />
              <Text style={styles.iconText}>İkon 2</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image
                source={require('./resim/togg.png')}
                style={styles.iconImage}
              />
              <Text style={styles.iconText}>İkon 3</Text>
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
    justifyContent: 'space-between',
    marginTop: 20,
  },
  iconContainer: {
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  iconImage: {
    width: winWidth * 0.1,
    height: winWidth * 0.1,
    margin: 5,
  },
  iconText: {
    color: 'black',
    fontSize: 14,
    marginTop: 5,
  },
});

export default AnaSayfa;
