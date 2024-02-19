import { View , Text } from "react-native";
export const smallbtn = (label) => {
    return(
      <View style = {{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 36,
        borderRadius: 40,
        elevation: 3,
        backgroundColor: 'black',
      }}>
      <Text style = {{
      fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      }}>
       {label}
      </Text>
      </View>
    )
  }

export const bigbtn = (label) => {
    return(
      <View style = {{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        paddingHorizontal: 45,
        borderRadius: 40,
        elevation: 5,
        backgroundColor: 'black',
        marginRight:80,
        marginVertical:-50,
      }}>
      <Text style = {{
      fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      }}>
       {label}
      </Text>
      </View>

    )
  }

