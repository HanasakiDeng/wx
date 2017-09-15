/*
Navicat MySQL Data Transfer

Source Server         : gary
Source Server Version : 100121
Source Host           : localhost:3306
Source Database       : gas

Target Server Type    : MYSQL
Target Server Version : 100121
File Encoding         : 65001

Date: 2017-09-15 17:36:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for order_status
-- ----------------------------
DROP TABLE IF EXISTS `order_status`;
CREATE TABLE `order_status` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `status_code` tinyint(4) NOT NULL,
  `status_desc` varchar(255) NOT NULL,
  PRIMARY KEY (`id`,`status_code`,`status_desc`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_status
-- ----------------------------
INSERT INTO `order_status` VALUES ('1', '0', '已完成');
INSERT INTO `order_status` VALUES ('2', '1', '已取消');
INSERT INTO `order_status` VALUES ('2', '2', '预约中');
