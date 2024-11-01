import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="startActivity" onPress={startActivity} />
    </View>
  );
}

import * as ReactNativeWidgetExtension from "react-native-widget-extension";

function startActivity() {
  if (ReactNativeWidgetExtension.areActivitiesEnabled()) {
    const quarter = 3;
    const scoreLeft = 1;
    const scoreRight = 6;
    const bottomText = "드가자";
    ReactNativeWidgetExtension.startActivity(
      quarter,
      scoreLeft,
      scoreRight,
      bottomText
    );
  }
}
