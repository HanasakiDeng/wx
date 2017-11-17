/*
Navicat MySQL Data Transfer

Source Server         : gary
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-11-17 18:44:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `book_name` varchar(50) DEFAULT NULL COMMENT '书籍名字',
  `book_author` varchar(50) DEFAULT NULL,
  `book_price` decimal(10,2) DEFAULT NULL,
  `book_logo` varchar(255) DEFAULT NULL,
  `book_desc` text,
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of books
-- ----------------------------
INSERT INTO `books` VALUES ('1', '极简法则：从苹果到优步的深层简化工具', '理查德·科克　格雷格·洛克伍德 ', '88.00', 'http://img3m4.ddimg.cn/25/32/25166914-1_l_6.jpg', '', '2017-11-17 17:47:37', '2017-11-17 17:47:37');
INSERT INTO `books` VALUES ('5', '极简法则：从苹果到优步的深层简化工具', '理查德·科克　格雷格·洛克伍德 ', '51.00', 'http://img3m4.ddimg.cn/25/32/25166914-1_l_6.jpg', '20/80法则之父全新力作，帮你在高增长市场取代现有巨头跻身“明星企业”，极简，改变世界的力量 30万图书100减30，经管励志专场，点击查看', null, null);
INSERT INTO `books` VALUES ('6', '极简法则：从苹果到优步的深层简化工具', '理查德·科克　格雷格·洛克伍德 ', '23.00', 'http://img3m4.ddimg.cn/25/32/25166914-1_l_6.jpg', '20/80法则之父全新力作，帮你在高增长市场取代现有巨头跻身“明星企业”，极简，改变世界的力量 30万图书100减30，经管励志专场，点击查看', '2017-11-17 17:47:15', '2017-11-17 17:47:15');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` varchar(20) NOT NULL COMMENT '用户ID',
  `nickname` varchar(50) DEFAULT NULL COMMENT '昵称',
  `gender` smallint(1) DEFAULT NULL COMMENT '性别，1为男性，0为女性',
  `age` int(4) DEFAULT NULL COMMENT '年龄',
  `desc` text COMMENT '简介',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
