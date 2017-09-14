/**
 * @class 用于用户输入检证
 */
export class Validate {
  constructor() {

  }
  /**
   * 手机号码检证 
   * @param str 手机号码字符
   */
  static mobile(str) {
    let pattern = /0?(13|14|15|18)[0-9]{9}/;
    return pattern.test(str);
  }
  /**
   * 必填项验证 
   * @param str 字符
   */
  static required(str) {
    return str === '' || str === undefined
  }

}

