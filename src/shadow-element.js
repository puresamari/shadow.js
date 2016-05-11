export class ShadowElement {
    constructor(element) {
        this.element = element;
        this.update();
        this.addObserver();
    }
    get Matrix() {
        let matrix = this.getStyle('transform');
        return new WebKitCSSMatrix(matrix);
    }
    updateShadow() {
        let shadowVal = Math.round(this.Matrix.m43);
        
        let alpha = this.getClamp(shadowVal, [0, 100]) / 100;
        
        let shadowPos = '0 ' + Math.round(shadowVal / 3) + 'px ' + shadowVal + 'px',
            colors = {
                fore: 'rgba(0,0,0,' + alpha + ')',
                back: 'rgba(0,0,0,' + alpha + ')',
            };

        let concatenated = shadowPos + ' ' + colors.fore + ', ' + shadowPos + ' ' + colors.back;
        this.setStyle('box-shadow', concatenated);
    }
    update() {
        this.updateShadow();
    }
    
    addObserver() {
        let _this = this,
            observer = new MutationObserver(mutations => { mutations.forEach(mutation => {
                let checkval = mutation.attributeName;
                if(checkval == 'class' || checkval == 'style') {
                    _this.update();
                }
        }); });
        observer.observe(this.element, { attributes: true, childList: false, characterData: true });
    }
    
    getClamp(val, boundry) {
        let val2 = val;
        Math.min(val2, boundry[0]);
        Math.max(val2, boundry[1]);
        return val2;
    }
    setStyle(attr, val) {
        this.element.style[attr] = val;
    }
    getStyle(attr) {
        return window.getComputedStyle(this.element, null)[attr];
    }
}