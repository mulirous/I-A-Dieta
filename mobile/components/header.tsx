import { 
         Text,
         View,
         Image, 
         StyleSheet, 
         Pressable, 
         SafeAreaView, 
         Platform,
         StatusBar
        } from 'react-native'
import { colors } from '../constants/colors' 
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'

type HeaderProps = {
    preview: string; // Define o tipo da prop
}

export default function Header({ preview }: HeaderProps) {
    return(
        <SafeAreaView style={styles.container}> 
            <View style={styles.return}>
                <View style={styles.row}>
                    <Link href={`../${preview}`}>
                        <Pressable>
                            <Feather name="arrow-left" size={24} color="#000"/>
                        </Pressable>
                    </Link>

                    <Text style={styles.text}>
                        Passo 1  
                        <Feather name="loader" size={16} color="#000"/>
                    </Text>
                </View>
            </View>

            <Text style={styles.title}>Vamos Começar</Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        marginBottom: 34,
        padding: Platform.OS === 'android' ? StatusBar.currentHeight! + 34 : 54,
    },
    return: {
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 34,
    },
    row: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    title: {
        color: colors.background,
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 20,
        paddingLeft: 18
    }
})