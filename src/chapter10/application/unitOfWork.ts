export class UnitOfWork {
    registerNew(value: object) {}
    registerDirty(value: object) {}
    registerClean(value: object) {}
    registerDeleted(value: object) {}
    commit() {}
    rollback() {}
}
