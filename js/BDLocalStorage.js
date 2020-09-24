export default class LocalStorage {
    constructor(){
      this.stogare = localStorage
    }
    save = (name, data) => {
      const result = this.getLocalStorage(name)
      result.push(data)
      this.stogare.setItem(name, JSON.stringify(result))
    }
  
    getLocalStorage = (name) => {
      let data
      if (this.stogare.getItem(name) === null) {
        data = []
      } else {
        data = JSON.parse(this.stogare.getItem(name))
      }
      return data
    }
    static getInstance = () => this.instance || (this.instance = new this())
  }
  