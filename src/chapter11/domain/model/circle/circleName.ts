export class CircleName {
    constructor(private value: string) {
        if(value == null){
            throw new Error("CircleName cannot be null or undefined");
        }
        if(value.length < 3){
            throw new Error("CircleName must be at least 3 characters long");
        }
        if(value.length > 20){
            throw new Error("CircleName must be at most 20 characters long");
        }
    }

    getValue(): string {
        return this.value;
    }

    equals(other: CircleName): boolean {
        if(other == null){
            throw new Error("CircleName cannot be null or undefined");
        }
        return this.value === other.value;
    }

    getHashCode(): number {
        let hash = 17;
        for (let i = 0; i < this.value.length; i++) {
            hash = hash * 31 + this.value.charCodeAt(i);
        }
        return hash;
    }
}
