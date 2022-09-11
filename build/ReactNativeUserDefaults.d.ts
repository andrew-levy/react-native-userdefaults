export default class UserDefaults {
    private suiteName;
    private isStandard;
    static standard: UserDefaults;
    constructor(suiteName?: string);
    get(forKey: any): Promise<any>;
    set(forKey: any, value: any): Promise<any>;
    remove(forKey: any): Promise<any>;
    getAll(): Promise<any>;
    removeAll(): Promise<any>;
}
