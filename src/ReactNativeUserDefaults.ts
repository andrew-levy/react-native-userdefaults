import { requireNativeModule } from "expo-modules-core";

const ReactNativeUserDefaults = requireNativeModule("ReactNativeUserDefaults");

export default class UserDefaults {
  private suiteName: string;
  private isStandard: boolean;

  static standard = new UserDefaults();

  constructor(suiteName?: string) {
    this.isStandard = suiteName === undefined;
    this.suiteName = suiteName || "";
  }

  async get(forKey: string) {
    const result = await ReactNativeUserDefaults.get(
      forKey,
      this.suiteName,
      this.isStandard
    );
    return result === null ? undefined : result;
  }
  async set(forKey: string, value: any) {
    if (value === undefined || value === null) {
      return await this.remove(forKey);
    }
    switch (typeof value) {
      case "string":
        return await ReactNativeUserDefaults.setString(
          forKey,
          value,
          this.suiteName,
          this.isStandard
        );
      case "number":
        return await ReactNativeUserDefaults.setNumber(
          forKey,
          value,
          this.suiteName,
          this.isStandard
        );
      case "boolean":
        return await ReactNativeUserDefaults.setBool(
          forKey,
          value,
          this.suiteName,
          this.isStandard
        );
      case "object":
        if (Array.isArray(value)) {
          return await ReactNativeUserDefaults.setArray(
            forKey,
            value,
            this.suiteName,
            this.isStandard
          );
        }
        return await ReactNativeUserDefaults.setObject(
          forKey,
          value,
          this.suiteName,
          this.isStandard
        );
    }
  }

  async remove(forKey: string) {
    return await ReactNativeUserDefaults.remove(
      forKey,
      this.suiteName,
      this.isStandard
    );
  }
  async getAll() {
    return await ReactNativeUserDefaults.getAll(
      this.suiteName,
      this.isStandard
    );
  }
  async removeAll() {
    return await ReactNativeUserDefaults.removeAll(
      this.suiteName,
      this.isStandard
    );
  }
}
