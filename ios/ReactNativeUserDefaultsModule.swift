import ExpoModulesCore

public class ReactNativeUserDefaultsModule: Module {

  public func definition() -> ModuleDefinition {
    name("ReactNativeUserDefaults")

    function("set") { (forKey: String, value: Any?, suiteName: String, isStandard: Bool) in
        let userDefaults = isStandard ? UserDefaults.standard : UserDefaults(suiteName: suiteName)
        userDefaults?.set(value is NSNull ? nil : value, forKey: forKey)
    }

    function("get") { (forKey: String, suiteName: String, isStandard: Bool) -> Any? in
      let userDefaults = isStandard ? UserDefaults.standard : UserDefaults(suiteName: suiteName)
      return userDefaults?.object(forKey: forKey)
    }
      
    function("dictionaryRepresentation") { (suiteName: String, isStandard: Bool) -> [String : Any] in
      let userDefaults = isStandard ? UserDefaults.standard : UserDefaults(suiteName: suiteName)
      return userDefaults?.dictionaryRepresentation() ??  [:]
    }

    function("remove") { (forKey: String, suiteName: String, isStandard: Bool) in
      let userDefaults = isStandard ? UserDefaults.standard : UserDefaults(suiteName: suiteName)
      userDefaults?.removeObject(forKey: forKey)
    }

    function("clear") { (suiteName: String, isStandard: Bool) in
      let userDefaults = isStandard ? UserDefaults.standard : UserDefaults(suiteName: suiteName)
      userDefaults?.dictionaryRepresentation().forEach { (key: String, value: Any) in
        userDefaults?.removeObject(forKey: key)
      }
    }

  }
}
