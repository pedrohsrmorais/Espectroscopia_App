import { View, Text, StyleSheet } from "react-native";

export function Home(){
    return(
        <View style={styles.container}>

        <Text style={styles.text1}> Bem vindo, </Text>
        <Text style={styles.text1}> Pedro </Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b4bed2',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '48',
      fontWeight: '900',
    },
    text1:{
        fontSize: 36,
        fontWeight: '900',
    }
  });