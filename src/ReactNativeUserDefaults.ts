import { NativeModulesProxy } from "expo-modules-core";

const { ReactNativeUserDefaults } = NativeModulesProxy;

export default class UserDefaults {
  private suiteName: string;
  private isStandard: boolean;

  static standard = new UserDefaults();

  constructor(suiteName?: string) {
    this.isStandard = suiteName === undefined;
    this.suiteName = suiteName || "";
  }

  async get(forKey: string) {
    return await ReactNativeUserDefaults.get(
      forKey,
      this.suiteName,
      this.isStandard
    );
  }

  async set(forKey: string, value: any) {
    return await ReactNativeUserDefaults.set(
      forKey,
      value,
      this.suiteName,
      this.isStandard
    );
  }

  async remove(forKey: string) {
    return await ReactNativeUserDefaults.remove(
      forKey,
      this.suiteName,
      this.isStandard
    );
  }

  async dictionaryRepresentation() {
    return await ReactNativeUserDefaults.dictionaryRepresentation(
      this.suiteName,
      this.isStandard
    );
  }

  async clear() {
    return await ReactNativeUserDefaults.clear(this.suiteName, this.isStandard);
  }
}
