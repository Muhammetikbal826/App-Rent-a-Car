import {StyleSheet, Text, View, Dimensions, Image, ScrollView} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const testApp3 = () => {
  return (
    <ScrollView>
    <View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingTop: windowWidth * 0.1,
        }}>
        <View>
          <Image
            style={{
              width: windowWidth * 0.2,
              height: windowWidth * 0.08,
              marginLeft: windowWidth * 0.04,
            }}
            source={require('./tesla.png')}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text
              style={{
                color: 'purple',
                fontSize: 32,
              }}>
              Model
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: 'blue',
                fontSize: 32,
              }}>
              Y
            </Text>
          </View>
        </View>
        <View>
          <Image
            style={{
              width: windowWidth * 0.2,
              height: windowWidth * 0.1,
              marginRight: windowWidth * 0.04,
            }}
            source={require('./tesla.png')}
          />
        </View>
      </View>
      <View style={{alignItems: 'center', paddingTop: windowWidth * 0.1}}>
      
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View style={{paddingTop: windowWidth * 0.04}}>
          <Image
            style={{width: windowWidth * 1, height: windowWidth * 0.6}}
            source={require('./tesla.png')}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              backgroundColor: 'blue',
              width: windowWidth * 0.02,
              height: windowWidth * 0.02,
              borderRadius: 15,
              marginRight: windowWidth * 0.01,
            }}></View>
          <View
            style={{
              backgroundColor: 'blue',
              width: windowWidth * 0.02,
              height: windowWidth * 0.02,
              borderRadius: 15,
              marginRight: windowWidth * 0.01,
            }}></View>
          <View
            style={{
              backgroundColor: 'blue',
              width: windowWidth * 0.06,
              height: windowWidth * 0.02,
              borderRadius: 15,
              marginRight: windowWidth * 0.01,
            }}></View>
          <View
            style={{
              backgroundColor: 'blue',
              width: windowWidth * 0.02,
              height: windowWidth * 0.02,
              borderRadius: 15,
              marginRight: windowWidth * 0.01,
            }}></View>
          <View
            style={{
              backgroundColor: 'blue',
              width: windowWidth * 0.02,
              height: windowWidth * 0.02,
              borderRadius: 15,
            }}></View>
        </View>
      </View>
      <View>
        <View
          style={{
            backgroundColor: '#EDEDED',
            width: windowWidth * 1,
            height: windowWidth * 1,
            marginTop: windowWidth * 0.07,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: windowWidth * 0.08,
            }}>
            <View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 30,
                  color: 'blue',
                  paddingLeft: windowWidth * 0.04,
                }}>
                Tesla Model Y
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: windowWidth * 0.04,
              }}>
              <View>
                <Image
                  style={{
                    width: windowWidth * 0.06,
                    height: windowWidth * 0.06,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={require('./tesla.png')}
                />
              </View>
              <View>
                <Text>(4,5)</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingLeft: windowWidth * 0.04,
              paddingTop: windowWidth * 0.03,
            }}>
            <Text style={{fontWeight: '300', color: 'blue', fontSize: 16}}>
              Arabanızın özelliklerini aşağıdan seçebilirsiniz
            </Text>
          </View>
          <View
            style={{
              paddingLeft: windowWidth * 0.04,
              flexDirection: 'row',
              paddingTop: windowWidth * 0.05,
              alignItems: 'center',
            }}>
            <View>
              <Text>Ekstralar</Text>
            </View>
            <View
              style={{
                backgroundColor: '#40C1DE',
                width: windowWidth * 0.15,
                height: windowWidth * 0.1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: windowWidth * 0.07,
                marginLeft: windowWidth * 0.03,
              }}>
              <Text style={{color: 'black'}}>ekstra1</Text>
            </View>
            <View style={{marginRight: windowWidth * 0.07}}>
              <Text style={{fontWeight: '500', fontSize: 16, color: 'black'}}>
                ekstra2
              </Text>
            </View>
            <View style={{marginRight: windowWidth * 0.07}}>
              <Text style={{fontWeight: '500', fontSize: 16, color: 'black'}}>
                ekstra3
              </Text>
            </View>
            <View style={{marginRight: windowWidth * 0.07}}>
              <Text style={{fontWeight: '500', fontSize: 16, color: 'black'}}>
                ekstra4
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: windowWidth * 0.04,
              paddingLeft: windowWidth * 0.04,
            }}>
            <View>
              <Text>Renk Seçiniz</Text>
            </View>
            <View
              style={{
                backgroundColor: 'yellow',
                width: windowWidth * 0.05,
                height: windowWidth * 0.05,
                borderRadius: 30,
                marginLeft: windowWidth * 0.07,
              }}></View>
            <View
              style={{
                backgroundColor: 'red',
                width: windowWidth * 0.05,
                height: windowWidth * 0.05,
                borderRadius: 30,
                marginLeft: windowWidth * 0.07,
              }}></View>
            <View
              style={{
                backgroundColor: 'pink',
                width: windowWidth * 0.05,
                height: windowWidth * 0.05,
                borderRadius: 30,
                marginLeft: windowWidth * 0.07,
              }}></View>
            <View
              style={{
                backgroundColor: 'blue',
                width: windowWidth * 0.05,
                height: windowWidth * 0.05,
                borderRadius: 30,
                marginLeft: windowWidth * 0.07,
              }}></View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: 'white',
                width: windowWidth * 1,
                height: windowWidth * 0.4,
                marginTop: windowWidth * 0.1,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: windowWidth * 0.08,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: windowWidth * 0.06,
                  }}>
                  <Text style={{color: 'black', fontWeight: '600'}}>$</Text>
                  <Text
                    style={{fontWeight: '800', fontSize: 35, color: 'black'}}>
                    50.000
                  </Text>
                </View>
                <View
                  style={{
                    width: windowWidth * 0.3,
                    height: windowWidth * 0.11,
                    backgroundColor: '#EDEDED',
                    borderRadius: 30,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginLeft: windowWidth * 0.3,
                  }}>
                  <Image
                    style={{
                      width: windowWidth * 0.06,
                      height: windowWidth * 0.06,
                    }}
                    source={require('./tesla.png')}
                  />
                  <Text style={{color: 'blue'}}>Add To Card</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default testApp3;

const styles = StyleSheet.create({});