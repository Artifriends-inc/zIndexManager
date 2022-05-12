'use strict';

export class zIndexManager {
    static instance = null;
    static getInstance(handler) {
        if (this.instance === null) {
            this.instance = new this();
            this.instance.init(handler);
        } else {
            if(this.instance.handler !== handler) this.instance.init(handler);
        }

        return this.instance;
    }

    handler = null;
    zIndex = 1000;

    constructor() {}

    init(handler) {
        this.handler = handler;
        this.zIndex = 1000;
    }

    getZIndex() { return this.zIndex; }

    setZIndex(num) { this.zIndex += num }
}

