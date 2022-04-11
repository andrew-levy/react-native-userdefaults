# UserDefaults

An interface to the user’s defaults database, where you store key-value pairs persistently across launches of your app.

- :white_check_mark: Built with [Expo's Module API](https:docs.expo.dev/modules/module-api/)
- :white_check_mark: Written in TypeScript and Swift
- :apple: Currently iOS only

## Installation

1. Install the package

```console
yarn add react-native-userdefaults
```

2. Install pods

```console
npx pod-install
```

## Usage

### Standard Defaults

The most commonly used feature is the standard defaults system. You can access the standard defaults system using the static property `UserDefaults.standard` or by creating a new `UserDefaults` instance with no arguments.

```tsx
UserDefaults.standard;
```

or equivalently

```tsx
new UserDefaults();
```

### Defaults with Suite Name

Sometimes when you want to share user defaults accross different apps contained in the same [App Group](https://developer.apple.com/documentation/xcode/configuring-app-groups?changes=_3), you'll need to provide a suite name to the constructor.

```tsx
new UserDefaults("group.com.example.app");
```

### Example

```tsx
import { Button, View } from "react-native";
import UserDefaults from "react-native-userdefaults";

const standardDefaults = UserDefaults.standard;
const groupDefaults = new UserDefaults("group.com.example.app");

function App() {
  return (
    <View>
      <Button
        title="Set Values"
        onPress={async () => {
          await standardDefaults.set("darkMode", true);
          await groupDefaults.set("coolNumbers", [3.14, 2.71, 1.41]);
        }}
      />
      <Button
        title="Get Values"
        onPress={async () => {
          const darkMode = await standardDefaults.get("darkMode");
          const coolNumbers = await groupDefaults.get("coolNumbers");
        }}
      />
    </View>
  );
}
```

## API

```typescript
interface UserDefaults {
  /* Convenience standard defaults static property */
  standard: UserDefaults;
  /* Get the value for a given key */
  get(forKey: string): Promise<any>;
  /* Set a value for a given key */
  set(forKey: string, value: any): Promise<void>;
  /* Remove a value for a given key */
  remove(forKey: string): Promise<void>;
  /* Clear all user default values */
  clear(): Promise<void>;
  /* Returns a dictionary represenation of the user defaults */
  dictionaryRepresentation(): Promise<{ [key: string]: any }>;
}
```
