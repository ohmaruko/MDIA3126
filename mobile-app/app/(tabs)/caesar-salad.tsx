import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function CaesarSalad() {
    return (
        <View>
            <Text className='bg-orange-500 text-center mb-4'>This is the salad page 🥗</Text>
            <Link href="/sandwich">Take me to the sandwich page, please</Link>
        </View>
    )
}

