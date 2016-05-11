export class Helper {
    static getClamp(val, boundry) {
        let val2 = val;
        Math.min(val2, boundry[0]);
        Math.max(val2, boundry[1]);
        return val2;
    }
}