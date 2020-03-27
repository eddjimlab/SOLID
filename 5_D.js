//Dependency inversion principle
//верхний уровень модулей не должен зависеть от абстракций нижнего уровня
class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json())
        return Promise.resolve('data from fetch', url)
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage'
        return dataFromLocalStorage
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    getClient(key) {
      return  this.fetch.request(key)
    }
}

class LocalClient {
    constructor() {
        this.local = new LocalStorage()
    }

    getClient(key) {
      return  this.local.get(key)
    }
}
class Database {
    constructor(client) {
        this.client = client
    }
    getData(key) {
        return this.client.getClient(key)
    }
}

const db  = new Database(new FetchClient())
console.log(db.getData('new key'))

const localDb  = new Database(new LocalClient())
console.log(localDb.getData('local key'))
