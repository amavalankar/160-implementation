// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import ManageInvenScreen from '../screens';
// import PublicInvenScreen from '../screens';
// import ScanInvenScreen from '../screens';


// function RootNavigator() {
//     const Stack = createNativeStackNavigator();
//     // const navigation = useNavigation();

// //   const [loading, setLoading] = useState(true)
// //   const [user, setUser] = useState(null)

//   return (
//       <Stack.Navigator initialRouteName="PublicInventory">
//           <Stack.Screen 
//             name="PublicInventory"
//             component={PublicInvenScreen}
//             />
//           <Stack.Screen 
//             name="ManageInventory"
//             component={ManageInvenScreen} 
//             />
//           <Stack.Screen
//             name="ScanInventory"
//             component={ScanInvenScreen} 
//             />
//       </Stack.Navigator>
//   );
// }

// export default function Navigation() {
//     return (
//       <NavigationContainer>
//         <RootNavigator />
//       </NavigationContainer>
//     );
//   }
