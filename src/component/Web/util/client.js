import sdk, {IndexedDBStore} from "matrix-js-sdk"
let currentClient;
let isClientCreated = false;

const getClient = async () => {
    if(isClientCreated === true){
        console.log("client is preCreated");
        return currentClient;
    }
    else{
        console.log("creating fresh client");
        let store = new IndexedDBStore({
            indexedDB: window.indexedDB,
        });
        await store.startup();
        currentClient = sdk.createClient({
            accessToken: window.localStorage.access_token,
            userId: window.localStorage.user_id,
            deviceId: window.localStorage.device_id,
            baseUrl: window.localStorage.base_url,
            store: store,
        });
        isClientCreated = true;
        return currentClient;
    }
}

export default getClient;