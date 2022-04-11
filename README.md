# UserDefaults

An interface to the user’s defaults database, where you store key-value pairs persistently across launches of your app.

:white_check_mark: Built with [Expo's Module API](https:docs.expo.dev/modules/module-api/)
:white_check_mark: Written in TypeScript and Swift

## Installation

```console
yarn add react-native-userdefaults
```

Install pods

## Example

The most commonly used feature is the standard defaults system. You can access the standard defaults system using the static property `UserDefaults.standard` or by creating a new `UserDefaults` instance with no arguments.

```tsx
import { Button, View } from "react-native";
import UserDefaults from "react-native-userdefaults";

const standardDefaults = UserDefaults.standard;
// or: const standardDefaults = new UserDefaults();

function App() {
  return (
    <View>
      <Button
        title="Set Value"
        onPress={async () => {
          await standardDefaults.set("myKey", "myValue");
        }}
      />
      <Button
        title="Get Value"
        onPress={async () => {
          const value = await standardDefaults.get("myKey");
          console.log(value);
        }}
      />
    </View>
  );
}
```

Sometimes when you want to share user defaults accross different apps contained in the same App Group, you'll need to provide a suite name, which acts as a namespace for your UserDefaults.

```tsx
import { Button, View } from "react-native";
import UserDefaults from "react-native-userdefaults";

const groupDefaults = new UserDefaults("group.com.example.app");

function App() {
  return (
    <View>
      <Button
        title="Set Value"
        onPress={async () => {
          await groupDefaults.set("myKey", "myValue");
        }}
      />
      <Button
        title="Get Value"
        onPress={async () => {
          const value = await groupDefaults.get("myKey");
          console.log(value);
        }}
      />
    </View>
  );
}
```

## API
