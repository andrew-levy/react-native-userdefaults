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
        return await ReactNativeUserDefaults.get(forKey, this.suiteName, this.isStandard);
    }
    async set(forKey, value) {
        return await ReactNativeUserDefaults.set(forKey, value, this.suiteName, this.isStandard);
    }
    async remove(forKey) {
        return await ReactNativeUserDefaults.remove(forKey, this.suiteName, this.isStandard);
    }
    async dictionaryRepresentation() {
        return await ReactNativeUserDefaults.dictionaryRepresentation(this.suiteName, this.isStandard);
    }
    async clear() {
        return await ReactNativeUserDefaults.clear(this.suiteName, this.isStandard);
    }
}
//# sourceMappingURL=ReactNativeUserDefaults.js.map