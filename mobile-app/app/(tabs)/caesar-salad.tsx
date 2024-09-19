import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function CaesarSalad() {
    return (
        <View>
            <Text>This is the salad page 🥗</Text>
            <Link href="/sandwich">Take me to the sandwich page, please</Link>
        </View>
    )
}

