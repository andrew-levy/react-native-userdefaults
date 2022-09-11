import ExpoModulesCore
import CoreFoundation

public class ReactNativeUserDefaultsModule: Module {
    
    public func definition() -> ModuleDefinition {
        Name("ReactNativeUserDefaults")
        
        AsyncFunction("setString") { (forKey: String, value: String, suiteName: String, isStandard: Bool) in
            let userDefaults = isStandard ? UserDefaults.standard : UserDefaults(suiteName: suiteName)
            userDefaults?.set(value, forKey: forKey)
        }
        
        AsyncFunction("setBool") { (forKey: String, value: Bool, suiteName: String, isStandard: Bool) in
            let userDefaults = isStandard ? UserDefaults.standard : UserDefaults(suiteName: suiteName)
            userDefaults?.set(value, forKey: forKey)
        }
        
        AsyncFunction("setArray") { (forKey: String, value: [Any], suiteName: String, isStandard: Bool) in
            let userDefaults = isStandard ? UserDefaults.standard : UserDefaults(suiteName: suiteName)
            userDefaults?.set(value, forKey: forKey)
        }
        
        AsyncFunction("setObject") { (forKey: String, value: [String: Any], suiteName: String, isStandard: Bool) in
            let userDefaults = isStandard ? UserDefaults.standard : UserDefaults(suiteName: suiteName)
            userDefaults?.set(value, forKey: forKey)
        }
        
        AsyncFunction("setNumber") { (forKey: String, value: Double, suiteName: String, isStandard: Bool) in
            let userDefaults = isStandard ? UserDefaults.standard : UserDefaults(suiteName: suiteName)
            userDefaults?.set(value, forKey: forKey)
        }
        
        AsyncFunction("get") { (forKey: String, suiteName: String, isStandard: Bool) -> Any? in
            let userDefaults = isStandard ? UserDefaults.standard : UserDefaults(suiteName: suiteName)
            return userDefaults?.object(forKey: forKey)
        }
        
        AsyncFunction("getAll") { (suiteName: String, isStandard: Bool) -> [String : Any] in
            let userDefaults = isStandard ? UserDefaults.standard : UserDefaults(suiteName: suiteName)
            return userDefaults?.dictionaryRepresentation() ??  [:]
        }
        
        AsyncFunction("remove") { (forKey: String, suiteName: String, isStandard: Bool) in
            let userDefaults = isStandard ? UserDefaults.standard : UserDefaults(suiteName: suiteName)
            userDefaults?.removeObject(forKey: forKey)
        }
        
        AsyncFunction("removeAll") { (suiteName: String, isStandard: Bool) in
            let userDefaults = isStandard ? UserDefaults.standard : UserDefaults(suiteName: suiteName)
            userDefaults?.dictionaryRepresentation().forEach { (key: String, value: Any) in
                userDefaults?.removeObject(forKey: key)
            }
        }
        
    }
}
