import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Sandwich() {
    return (
        <View>
            <Text>This is the sandwich page 🥪</Text>
            <Link href="/caesar-salad">Take me to the salad page, please</Link>
        </View>
    )
}

