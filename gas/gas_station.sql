/*
Navicat MySQL Data Transfer

Source Server         : gary
Source Server Version : 100121
Source Host           : localhost:3306
Source Database       : gas

Target Server Type    : MYSQL
Target Server Version : 100121
File Encoding         : 65001

Date: 2017-09-15 17:35:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for gas_station
-- ----------------------------
DROP TABLE IF EXISTS `gas_station`;
CREATE TABLE `gas_station` (
  `id` int(11) NOT NULL,
  `station_name` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL,
  `Invoice_header` varchar(255) NOT NULL,
  `tax_number` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gas_station
-- ----------------------------
