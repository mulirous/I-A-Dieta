import { Text, View, Image, StyleSheet, Pressable } from 'react-native'
import { colors } from '../../constants/colors'
import Header from '../../components/header' 

export default function Home() {
    return (
        <View>
            <Header preview="index"/>
            <Text>Home</Text>
        </View>
    );
}