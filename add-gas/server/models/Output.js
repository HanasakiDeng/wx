/**
 * 输出类
 * 通过weakMap 创建私有属性,外部无法调用;
 */
let Output = ((function () {
    let res = Symbol('res');
    let data = Symbol('data');
    let msg = Symbol('msg');

    function Output(bind) {
        this[res] = bind.res;
        this[data] = bind.data;
        this[msg] = bind.msg;
    }

    Output.prototype.getRes = function () {
        return this[res];
    };
    Output.prototype.getData = function () {
        return this[data];
    };
    Output.prototype.getMsg = function () {
        return this[msg];
    };
    return Output;

})());

module.exports = Output;