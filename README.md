# UserDefaults

An interface to the user’s defaults database, where you store key-value pairs persistently across launches of your app. Inspired by [UserDefaults](https://developer.apple.com/documentation/foundation/userdefaults).

- :white_check_mark: Built with [Expo's Module API](https:docs.expo.dev/modules/module-api/)
- :white_check_mark: Written in TypeScript and Swift
- :apple: Currently iOS only

## Installation

1. Install the package

```console
yarn add @alevy97/react-native-userdefaults
```

2. Install pods

```console
npx pod-install
```

## Usage

### Standard Defaults

The most common use case for using `UserDefaults` is to store small chunks of data to the standard defaults system. You can access the standard defaults system using the static property `UserDefaults.standard` or by creating a new `UserDefaults` instance.

```tsx
UserDefaults.standard;
```

or equivalently

```tsx
new UserDefaults();
```

### Defaults with Suite Name

UserDefaults can also be used to store data that can be shared across multiple apps belonging to the same [App Group](https://developer.apple.com/documentation/xcode/configuring-app-groups?changes=_3), also known as a suite. To achieve this, provide a suite name (app group identifier) when creating a `UserDefaults` instance.

```tsx
new UserDefaults("group.com.example.app");
```

### Example

```tsx
import { Button, View } from "react-native";
import UserDefaults from "@alevy97/react-native-userdefaults";

const standardDefaults = UserDefaults.standard; // or new UserDefaults()
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
          console.log(darkMode, coolNumbers);
        }}
      />
    </View>
  );
}
```

## API

```typescript
interface UserDefaults {
  /* Standard user defaults object */
  standard: UserDefaults;
  /* Get the value for a given key */
  get(forKey: string): Promise<any>;
  /* Set a value for a given key */
  set(forKey: string, value: any): Promise<void>;
  /* Remove a value for a given key */
  remove(forKey: string): Promise<void>;
  /* Removes all user default values */
  removeAll(): Promise<void>;
  /* Returns all user default values */
  getAll(): Promise<{ [key: string]: any }>;
}
```
