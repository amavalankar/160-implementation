import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ScanInvenScreen({ navigation }) {
    return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Go to Manage Inventory"
        onPress={() => navigation.navigate("ManageInventory")}
      />
      <StatusBar style="auto" />
    </View>
    );
  }