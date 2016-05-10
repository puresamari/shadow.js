export class ShadowElement {
    constructor (element) {
        this.element = element;
        this.update();
    }
    get Matrix() {
        let matrix = this.getStyle('transform');
        return new WebKitCSSMatrix(matrix);
    }
    updateMatrix() {
        this.setStyle('transform', this.Matrix);
    }
    updateShadow() {
        let shadowVal = this.Matrix.m43;
        
        let shadowPos = '0 ' + shadowVal / 3 + 'px ' + shadowVal + 'px',
            colors = {
                fore: 'rgba(0,0,0,0.' + shadowVal * 4 + ')',
                back: 'rgba(0,0,0,0.' + shadowVal * 8 + ')',
            };
        
        let concatenated = shadowPos + ' ' + colors.fore + ', ' + shadowPos + ' ' + colors.back;
        this.setStyle('box-shadow', concatenated);
    }
    update() {
        this.updateMatrix(), this.updateShadow();
    }
    setStyle(attr, val) {
        this.element.style[attr] = val;
    }
    getStyle(attr) {
        return window.getComputedStyle(this.element, null)[attr];
    }
}