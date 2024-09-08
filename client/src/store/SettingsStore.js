import {makeAutoObservable} from "mobx";

export default class SettingsStore {
    constructor() {
        this._tarifInfo = ''
        this._purchasedFunctions=''
        this._allTarifs=''
        this._bankInfo=''
        this._extraFunctions=''
        makeAutoObservable(this)
    }

    setTarifInfo(tarifInfo) {
        this._tarifInfo = tarifInfo
    }

    get tarifInfo() {
        return this._tarifInfo
    }

    setAllTarifs(allTarifs) {
        this._allTarifs = allTarifs
    }

    get allTarifs() {
        return this._allTarifs
    }

    setPurchasedFunctions(purchasedFunctions) {
        this._purchasedFunctions = purchasedFunctions
    }

    get purchasedFunctions() {
        return this._purchasedFunctions
    }

    setBankInfo(bankInfo) {
        this._bankInfo = bankInfo
    }

    get bankInfo() {
        return this._bankInfo
    }

    setExtraFunctions(extraFunctions) {
        this._extraFunctions = extraFunctions
    }

    get extraFunctions() {
        return this._extraFunctions
    }
}
