let instances: Map<string, any> = new Map();

function resolve<R>(key: string, value: any = undefined): R {
    if (typeof value == "undefined")
        return getProvider(key);
    if (typeof value == "function")
        return saveProviderFuntion(key, value);
    return saveProviderObject(key, value);
}

function getProvider(key: string) {
    return instances.has(key) ? instances.get(key) : undefined;
}

function saveProviderFuntion(key: string, value: any) {
    instances.set(key, value());
    return getProvider(key);
}

function saveProviderObject(key: string, value: any) {
    instances.set(key, value);
    return getProvider(key);
}

export let Provider = {
    resolve
}