import {makeAutoObservable} from "mobx";

export default class SettingsStore {
    constructor() {
        this._tarifInfo = ''
        this._purchasedFunctions = ''
        this._extraFunctionsToBuy = ' '
        this._allTarifs = ''
        this._bankInfo = ''
        this._extraFunctions = ''
        this._isChanged = ''
        this._allUserInfos = ''
        this._adminInfo = ''
        makeAutoObservable(this)
    }

    setTarifInfo(tarifInfo) {
        this._tarifInfo = tarifInfo
    }

    get tarifInfo() {
        return this._tarifInfo
    }

    setAdminInfo(adminInfo) {
        this._adminInfo = adminInfo
    }

    get adminInfo() {
        return this._adminInfo
    }

    setAllUserInfos(allUserInfos) {
        this._allUserInfos = allUserInfos
    }

    get allUserInfos() {
        return this._allUserInfos
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

    setExtraFunctionsToBuy(extraFunctionsToBuy) {
        this._extraFunctionsToBuy = extraFunctionsToBuy
    }

    get extraFunctionsToBuy() {
        return this._extraFunctionsToBuy
    }

    setIsChanged(isChanged) {
        this._isChanged = isChanged
    }

    get isChanged() {
        return this._isChanged
    }
}
