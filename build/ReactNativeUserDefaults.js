import { NativeModulesProxy } from "expo-modules-core";
const { ReactNativeUserDefaults } = NativeModulesProxy;
export default class UserDefaults {
    suiteName;
    isStandard;
    static standard = new UserDefaults();
    constructor(suiteName) {
        this.isStandard = suiteName === undefined;
        this.suiteName = suiteName || "";
    }
    async get(forKey) {
        const result = await ReactNativeUserDefaults.get(forKey, this.suiteName, this.isStandard);
        return result === null ? undefined : result;
    }
    async set(forKey, value) {
        if (value === undefined || value === null) {
            return await this.remove(forKey);
        }
        switch (typeof value) {
            case "string":
                return await ReactNativeUserDefaults.setString(forKey, value, this.suiteName, this.isStandard);
            case "number":
                return await ReactNativeUserDefaults.setNumber(forKey, value, this.suiteName, this.isStandard);
            case "boolean":
                return await ReactNativeUserDefaults.setBool(forKey, value, this.suiteName, this.isStandard);
            case "object":
                if (Array.isArray(value)) {
                    return await ReactNativeUserDefaults.setArray(forKey, value, this.suiteName, this.isStandard);
                }
                else {
                    return await ReactNativeUserDefaults.setObject(forKey, value, this.suiteName, this.isStandard);
                }
        }
    }
    async remove(forKey) {
        return await ReactNativeUserDefaults.remove(forKey, this.suiteName, this.isStandard);
    }
    async getAll() {
        return await ReactNativeUserDefaults.getAll(this.suiteName, this.isStandard);
    }
    async removeAll() {
        return await ReactNativeUserDefaults.removeAll(this.suiteName, this.isStandard);
    }
}
//# sourceMappingURL=ReactNativeUserDefaults.js.map