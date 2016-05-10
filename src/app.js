import { ShadowElement } from './shadow-element.js';

export class ShadowManager {
    
    eachElement(fn) {
        var elements = document.querySelectorAll('.'+this.className);
        for (let i = 0; i < elements.length; i++) { 
            fn(elements[i]);
        }
    }
    
    constructor (className = 'shadow') {
        this.className = className;
        this.registeredElements = [];
        let _this = this;
        this.eachElement(el => {
            let shadowElement = new ShadowElement(el);
            _this.registeredElements.push(shadowElement) 
        });
    }

}

module.exports = new ShadowManager();