export default class UserDefaults {
    private suiteName;
    private isStandard;
    static standard: UserDefaults;
    constructor(suiteName?: string);
    get(forKey: string): Promise<any>;
    set(forKey: string, value: any): Promise<any>;
    remove(forKey: string): Promise<any>;
    getAll(): Promise<any>;
    removeAll(): Promise<any>;
}
//# sourceMappingURL=ReactNativeUserDefaults.ios.d.ts.map