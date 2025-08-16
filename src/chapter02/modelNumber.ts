class ModelNumber {
    constructor(
        private productCode: string,
        private branch: string,
        private lot: string
    ) {
        if(productCode == null) {
            throw new Error("Invalid product code");
        }
        if(branch == null) {
            throw new Error("Invalid branch");
        }
        if(lot == null) {
            throw new Error("Invalid lot");
        }
    }

    // 意味のある製造番号として表現する
    public toString(): string {
        return `${this.productCode}-${this.branch}-${this.lot}`;
    }
}
