import React from 'react';
import { 
  Image, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View, 
  Dimensions, 
  ScrollView,
  TextInput // Arama çubuğunu eklemek için TextInput eklenmeli
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const testApp7 = () => {
  return (
    <SafeAreaView>
      <View>
        {/* Arama çubuğu */}
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            paddingLeft: 10,
            margin: 10,
          }}
          placeholder="Ara..."
        />
        <Image
          source={require('./tesla.png')}
          style={{
            alignItems: 'center',
            width: windowWidth * 1,
            height: windowWidth * 0.65,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            marginTop: windowWidth * 0.06,
          }}
        >
          
          
          <View style={{marginLeft: windowWidth * 0.55, flexDirection: 'row'}}>
            
            <View style={{marginLeft: windowWidth * 0.06}}>
              
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          backgroundColor: 'white',
          width: windowWidth * 1,
          height: windowHeight * 0.55,
        }}
      >
        <View
          style={{
            marginLeft: windowWidth * 0.08,
            marginTop: windowWidth * 0.01,
          }}
        >
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Categories
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: windowWidth * 0.01,
          }}
        >
          <View
            style={{
              width: windowWidth * 0.18,
              marginLeft: windowWidth * 0.05,
              height: windowWidth * 0.18,
              backgroundColor: '#e0e673',
              borderRadius: windowWidth * 0.02,
            }}
          >
            <Image
              style={{
                marginLeft: windowWidth * 0.02,
                width: windowWidth * 0.12,
                height: windowWidth * 0.12,
                marginTop: windowWidth * 0.035,
              }}
              source={require('./tesla.png')}
            />
            <View
              style={{
                marginTop: windowWidth * 0.08,
                marginLeft: windowWidth * 0.05,
              }}
            >
              <Text style={{color: 'black'}}>HYBRİD</Text>
            </View>
          </View>
          <View
            style={{
              width: windowWidth * 0.18,
              height: windowWidth * 0.18,
              backgroundColor: '#f09060',
              borderRadius: windowWidth * 0.02,
            }}
          >
            <Image
              style={{
                marginLeft: windowWidth * 0.03,
                width: windowWidth * 0.12,
                height: windowWidth * 0.12,
                marginTop: windowWidth * 0.035,
              }}
              source={require('./tesla.png')}
            />
            <View
              style={{
                marginTop: windowWidth * 0.08,
                marginLeft: windowWidth * 0.05,
              }}
            >
              <Text style={{color: 'black'}}>Elektrik </Text>
            </View>
          </View>
          <View
            style={{
              width: windowWidth * 0.18,
              height: windowWidth * 0.18,
              backgroundColor: '#d8b8f2',
              borderRadius: windowWidth * 0.02,
            }}
          >
            <Image
              style={{
                marginLeft: windowWidth * 0.025,
                width: windowWidth * 0.12,
                height: windowWidth * 0.12,
                marginTop: windowWidth * 0.035,
              }}
              source={require('./tesla.png')}
            />
            <View
              style={{
                marginTop: windowWidth * 0.08,
                marginLeft: windowWidth * 0.05,
              }}
            >
              <Text style={{color: 'black'}}>BENZİN</Text>
            </View>
          </View>
          <View
            style={{
              width: windowWidth * 0.18,
              marginRight: windowWidth * 0.05,
              height: windowWidth * 0.18,
              backgroundColor: '#b0e8c4',
              borderRadius: windowWidth * 0.02,
            }}
          >
            <Image
              style={{
                marginLeft: windowWidth * 0.025,
                width: windowWidth * 0.12,
                height: windowWidth * 0.12,
                marginTop: windowWidth * 0.035,
              }}
              source={require('./tesla.png')}
            />
            <View
              style={{
                marginTop: windowWidth * 0.08,
                marginLeft: windowWidth * 0.028,
              }}
            >
              <Text style={{color: 'black'}}>DİZEL</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            width: windowWidth * 1,
            height: windowHeight * 0.25,
            backgroundColor: '#ebf1fa',
            borderRadius: windowWidth * 0.08,
            marginTop: windowWidth * 0.13,
          }}
        >
          <View>
            <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
              Markalar
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: windowWidth * 0.08,
              marginLeft: windowWidth * 0.065,
            }}
          >
            <View
              style={{
                width: windowWidth * 0.18,
                marginRight: windowWidth * 0.05,
                height: windowWidth * 0.18,
                backgroundColor: '#ffdee6',
                borderRadius: windowWidth * 0.02,
              }}
            >
              <Image
                source={require('./tesla.png')}
                style={{
                  marginTop: windowWidth * 0.02,
                  marginLeft: windowWidth * 0.02,
                  width: windowWidth * 0.13,
                  height: windowWidth * 0.13,
                }}
              />
            </View>
            <View
              style={{
                width: windowWidth * 0.18,
                marginRight: windowWidth * 0.05,
                height: windowWidth * 0.18,
                backgroundColor: '#b0e8c4',
                borderRadius: windowWidth * 0.02,
              }}
            >
              <Image
                source={require('./tesla.png')}
                style={{
                  marginTop: windowWidth * 0.02,
                  marginLeft: windowWidth * 0.02,
                  width: windowWidth * 0.13,
                  height: windowWidth * 0.13,
                }}
              />
            </View>
            <View
              style={{
                width: windowWidth * 0.18,
                marginRight: windowWidth * 0.05,
                height: windowWidth * 0.18,
                backgroundColor: '#f7a1b6',
                borderRadius: windowWidth * 0.02,
              }}
            >
              <Image
                source={require('./tesla.png')}
                style={{
                  marginTop: windowWidth * 0.02,
                  marginLeft: windowWidth * 0.02,
                  width: windowWidth * 0.13,
                  height: windowWidth * 0.13,
                }}
              />
            </View>
            <View
              style={{
                width: windowWidth * 0.18,
                marginRight: windowWidth * 0.05,
                height: windowWidth * 0.18,
                backgroundColor: '#9ebdf0',
                borderRadius: windowWidth * 0.02,
              }}
            >
              <Image
                source={require('./tesla.png')}
                style={{
                  marginTop: windowWidth * 0.02,
                  marginLeft: windowWidth * 0.02,
                  width: windowWidth * 0.13,
                  height: windowWidth * 0.13,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            width: windowWidth * 1,
            height: windowWidth * 0.8,
            backgroundColor: 'white',
          }}
        >
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                marginTop: windowWidth * 0.04,
                marginLeft: windowWidth * 0.03,
                width: windowWidth * 0.12,
                height: windowHeight * 0.06,
              }}
              source={require('./tesla.png')}
            />
            <View style={{marginLeft: windowWidth * 0.05}}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
                Tesla
              </Text>
              <Text style={{fontSize: 12}}>20 min ago</Text>
            </View>
          </View>
          <View>
            <Image
              source={require('./tesla.png')}
              style={{
                width: windowWidth * 0.9,
                height: windowWidth * 0.55,
                marginLeft: windowWidth * 0.057,
                borderRadius: windowWidth * 0.08,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default testApp7;

const styles = StyleSheet.create({});
