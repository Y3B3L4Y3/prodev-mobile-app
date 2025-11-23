import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '@/styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants';

export default function Home() {
  return (
    <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
      <View style={styles.logoContainer}>
        <Image source={HEROLOGO} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Welcome to ProDev</Text>
        <Text style={styles.titleSubText}>Build your skills and projects</Text>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => console.log('Join Pressed')}>
          <Text style={styles.buttonPrimaryText}>Join Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary} onPress={() => console.log('Sign In Pressed')}>
          <Text style={styles.buttonSecondaryText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
