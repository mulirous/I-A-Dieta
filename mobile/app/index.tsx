import { Text, View, Image, StyleSheet, Pressable } from 'react-native'
import { colors } from '../constants/colors' 
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')}/>

      <Text style={styles.title}>IA <Text style={{ color: colors.green }}>Dieta</Text></Text>

      <Text style={styles.text}>Sua Dieta Inteligente</Text>

      <Link href="/screens/home" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Gerar Dieta</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent:  'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  title: {
    color: colors.white,
    fontSize: 50,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 24,
    color: colors.white,
    width: 240,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: colors.blue,
    width: 120,
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold'
  }
})