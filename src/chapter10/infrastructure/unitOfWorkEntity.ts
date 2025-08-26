export enum EntityState {
    New,
    Dirty,
    Clean,
    Deleted
}

export abstract class EntityBase {
    private _state: EntityState = EntityState.New;

    get state(): EntityState {
        return this._state;
    }

    markNew() {
        this._state = EntityState.New;
    }

    markDirty() {
        this._state = EntityState.Dirty;
    }

    markClean() {
        this._state = EntityState.Clean;
    }

    markDeleted() {
        this._state = EntityState.Deleted;
    }
}
