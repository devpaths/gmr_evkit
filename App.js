import React,{ useState } from "react";
import { View , Text , Image , StyleSheet , TouchableOpacity  } from "react-native";
import LottieView from "lottie-react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import {COLORS, SIZES} from './src/constants/theme';
import {enableLatestRenderer} from 'react-native-maps';
import {smallbtn,bigbtn} from './Components/buttons';
import PopupScreen from "./Components/popup";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
 enableLatestRenderer();
const slides =[ 
{
  id:1,
  title : 'Navigate charging stations easily',
  description: 'Search for nearby charging station and prebook your charging slots',
  image:require('./src/assets/2nd.jpeg')
},
{
  id:2,
  title : 'Charge your EV',
  description: "That's it! charge your vehicle without any hassle ",
  image:require('./src/assets/3rd.jpeg')
}

]
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 900,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });



export  default function App() {
  const [showHomePage , setShowHomePage] = useState(false);

 

  if(!showHomePage)
  {
    return(
      <AppIntroSlider
      data={slides}
      renderItem={({item}) => {
        return(
          <View style = {{
            flex: 1,
            alignItems: 'center',
            padding:15,
            paddingTop:100,
      }}>
          <Image
          source={item.image}
          style={{
            width:SIZES.width -80,
            height:350,
          }}
          resizeMode="contain"
          />
          <Text style={{
            fontWeight:'bold',
            color:COLORS.title,
            fontSize:SIZES.h1,
          }}>
          {item.title}
          </Text>
          <Text style={{
            textAlign:"center",
            paddingTop:5,
            color:COLORS.title
          }}>
            {item.description}
          </Text>
          </View>
        )
      }}

      dotStyle={{
        backgroundColor:'rgba(237,231,225,0.8)',
        marginHorizontal:10,
        width:50,
        marginTop:-300,
       
      }}
      activeDotStyle={{
        
        backgroundColor:COLORS.title,
        width:50,
        marginRight:20,
        marginTop:-300
      }}
      showSkipButton
      renderNextButton={() => smallbtn("Next")}
      renderSkipButton={() => smallbtn("Skip")}
      renderDoneButton={() => bigbtn("Get Started")}
      onDone={() => {
        setShowHomePage(true);
      }}
      />
    )
  }
  else


  return (
/* <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 28.433203,
            longitude: 77.547457,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
         
        </MapView>
      </View>*/
      <View>
      <TouchableOpacity onPress={PopupScreen} style={bigbtn}>
      <Text style={styles.container}>Open Pop-up</Text>
    </TouchableOpacity>
    </View>
  )
};
