/*
Navicat MySQL Data Transfer

Source Server         : gary
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-11-16 18:06:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `book_id` varchar(16) NOT NULL,
  `book_name` varchar(50) DEFAULT NULL COMMENT '书籍名字',
  `book_author` varchar(50) DEFAULT NULL,
  `book_price` decimal(10,2) DEFAULT NULL,
  `book_logo` varchar(255) DEFAULT NULL,
  `book_desc` text,
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`book_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of books
-- ----------------------------
INSERT INTO `books` VALUES ('B000001', '一禅小和尚', '一禅小和尚', '34.30', 'http://img3m2.ddimg.cn/51/34/25159812-1_l_9.jpg', '幅幅萌到爆棚！独特的水墨彩绘，可爱到喷血的人物形象，真挚的情感共鸣，暖萌减压的诚意之作~ 微博每条漫画转发量平均三万+的国民IP作品，人民日报等主流媒体都纷纷转发的“忒可爱了”作品。', '2017-11-13 16:19:00', '2017-11-13 16:19:00');
INSERT INTO `books` VALUES ('B000002', '爆裂：未来社会的9大生存原则', '[美]伊藤穰一，杰夫·豪', '39.00', 'http://img3m3.ddimg.cn/57/36/25162293-1_l_5.jpg', '破除僵化意识，突破知识边界，颠覆传统认知，建立与未来世界对接的新思维，掌握世界新操作系统的说明书！李开复，吴军，万维钢，里德·霍夫曼，沃尔特·艾萨克森等隆重推荐！（两种封面任意发货）', '2017-11-13 16:19:25', '2017-11-13 16:19:25');
INSERT INTO `books` VALUES ('B000003', '2666', '[智利]罗贝托·波拉尼奥', '77.20', 'http://img3m0.ddimg.cn/32/11/22539560-1_l_7.jpg', '21世纪伟大的作品 《百年孤独》的惊世之作 从伦敦到纽约，人人都爱波拉尼奥', '2017-11-13 16:21:00', '2017-11-13 16:21:00');
INSERT INTO `books` VALUES ('B000004', '恰到好处的幸福', '毕淑敏', '25.90', 'http://img3m2.ddimg.cn/86/3/23414972-1_b_4.jpg', '纵有千间房屋，夜间无外一床安宿，纵有万亩良田，一日终究只需三餐。\r\n　　幸福是一种心的富足，不以物质的多寡来衡量，它是付出、分享和爱的感受。\r\n　　恰到好处，是一种哲学和艺术的结晶体。它代表的豁达和淡然，是幸福门前的长廊。轻轻走过它，你就可以拍打幸福的门环。佛家有一句话，叫“无挂碍物者无恐怖”，不妨借用来，少需要物者少烦恼。因为必需少，所以受限轻。人就获得了更快的行走，更高的飞翔。本书把“幸福”作为一种正面的人生价值提出。教你如何构建合理期望，在欲望和现实中找到平衡，收获丰硕愉悦的幸福人生。\r\n你，幸福吗？', '2017-11-13 16:21:01', '2017-11-13 16:21:01');

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
