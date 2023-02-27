/** @format */

import { StatusBar, View } from "react-native";
import Colors from "./src/assets/theme/Colors";
import AppRoute from "./src/navigation/AppRoute"
function App() {
  return (
    <>
      <StatusBar backgroundColor={'#003297'} barStyle="light-content" />
      <AppRoute />
    </>
  );
}
export default App;
