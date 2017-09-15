/*
Navicat MySQL Data Transfer

Source Server         : gary
Source Server Version : 100121
Source Host           : localhost:3306
Source Database       : gas

Target Server Type    : MYSQL
Target Server Version : 100121
File Encoding         : 65001

Date: 2017-09-15 17:36:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `order_no` varchar(100) NOT NULL DEFAULT '' COMMENT '订单编号',
  `user_id` varchar(50) NOT NULL COMMENT '用户ID',
  `product_no` varchar(255) NOT NULL COMMENT '订单产品编号',
  `product_amount` varchar(255) NOT NULL COMMENT '产品价格',
  `status_code` int(1) NOT NULL COMMENT '订单状态码',
  PRIMARY KEY (`id`,`order_no`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
