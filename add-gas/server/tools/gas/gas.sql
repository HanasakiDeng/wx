/*
Navicat MySQL Data Transfer

Source Server         : gary
Source Server Version : 100121
Source Host           : localhost:3306
Source Database       : gas

Target Server Type    : MYSQL
Target Server Version : 100121
File Encoding         : 65001

Date: 2017-11-08 17:35:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for gas_order
-- ----------------------------
DROP TABLE IF EXISTS `gas_order`;
CREATE TABLE `gas_order` (
  `id` int(11) NOT NULL COMMENT '物理主键',
  `order_id` varchar(10) NOT NULL COMMENT '订单号',
  `code` varchar(255) NOT NULL COMMENT '汽油类型编号',
  `lifter` varchar(255) NOT NULL COMMENT '所加升数',
  `price` decimal(10,2) NOT NULL,
  `discount` float(255,0) NOT NULL COMMENT '折扣',
  `amount` decimal(10,0) NOT NULL COMMENT '实际付款金额',
  `order_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `has_red_packet` smallint(1) DEFAULT NULL COMMENT '是否有红包抵用券',
  `red_packet_id` varchar(255) DEFAULT NULL COMMENT '有使用红包的情况下,红包的Id',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`,`order_id`),
  UNIQUE KEY `order_id` (`order_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gas_order
-- ----------------------------

-- ----------------------------
-- Table structure for gas_station
-- ----------------------------
DROP TABLE IF EXISTS `gas_station`;
CREATE TABLE `gas_station` (
  `id` int(15) NOT NULL AUTO_INCREMENT COMMENT '物理主键',
  `gas_station_id` varchar(10) NOT NULL COMMENT '逻辑主键',
  `name` varchar(255) NOT NULL COMMENT '加油站名称',
  `city` varchar(15) DEFAULT NULL,
  `district` varchar(255) NOT NULL COMMENT '所属区',
  `address` varchar(255) DEFAULT NULL COMMENT '地址',
  `longitude` double DEFAULT NULL COMMENT '经度',
  `latitude` double DEFAULT '0' COMMENT '纬度',
  `tel` varchar(255) NOT NULL COMMENT '联系电话',
  `image_url` varchar(255) DEFAULT NULL COMMENT '图片地址',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`,`gas_station_id`),
  UNIQUE KEY `gas_station_id` (`gas_station_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gas_station
-- ----------------------------
INSERT INTO `gas_station` VALUES ('1', 'B00155DBZM', '中国石化成都路加油站', '上海市', '黄浦区', '成都北路118号(大沽路)', '121.468246', '31.226212', '021-63270651', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:25', '2017-10-16 09:31:25');
INSERT INTO `gas_station` VALUES ('2', 'B00155KJCJ', '中国石化大田加油站(大田路)', '上海市', '静安区', '大田路180号北京西路与成都北路交叉口向西路南,王家沙花苑附近', '121.464296', '31.233634', '021-62176244', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:26', '2017-10-16 09:31:26');
INSERT INTO `gas_station` VALUES ('3', 'B00155LA8A', '中国石化加油站(云南南路)', '上海市', '黄浦区', '人民路888号', '121.48261', '31.224931', '021-33070279', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:27', '2017-10-16 09:31:27');
INSERT INTO `gas_station` VALUES ('4', 'B00157FVVV', '中国石化长乐加油站(长乐路)', '上海市', '黄浦区', '长乐路398号(长乐路茂名南路)', '121.460968', '31.221095', '021-62555530', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:28', '2017-10-16 09:31:28');
INSERT INTO `gas_station` VALUES ('5', 'B00154374F', '中国石化晋元加油站', '上海市', '静安区', '晋元路327号(海联公寓北)', '121.469604', '31.245069', '021-63178021', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:29', '2017-10-16 09:31:29');
INSERT INTO `gas_station` VALUES ('6', 'B00155KIII', '中国石油海宁加油站(海宁路)', '上海市', '静安区', '海宁路971号', '121.475782', '31.245513', '021-63063778', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:30', '2017-10-16 09:31:30');
INSERT INTO `gas_station` VALUES ('7', 'B0FFFWUO1R', '中国石油加油站(长安路)', '上海市', '静安区', '光复路555号(近共和新路)', '121.462084', '31.242173', '021-63800671', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:31', '2017-10-16 09:31:31');
INSERT INTO `gas_station` VALUES ('8', 'B0FFFWQ86B', '中国石化第十加油站(大统路)', '上海市', '静安区', '天目中路620号', '121.463437', '31.244359', '021-63813660', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:32', '2017-10-16 09:31:32');
INSERT INTO `gas_station` VALUES ('9', 'B00156G7UT', '延安中路加油加气站', '上海市', '静安区', '延安中路990号', '121.455398', '31.224242', '021-62722717', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:33', '2017-10-16 09:31:33');
INSERT INTO `gas_station` VALUES ('10', 'B00155GRRU', '中国石化上海石油分公司第1加油站', '上海市', '黄浦区', '南苏州路198号', '121.486224', '31.243628', '021-63236827', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:34', '2017-10-16 09:31:34');
INSERT INTO `gas_station` VALUES ('11', 'B001521E60', '中国石化加油站(陕西南路)', '上海市', '黄浦区', '陕西南路173号,众乐派公寓12馆附近', '121.460622', '31.213941', '021-64457894', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:35', '2017-10-16 09:31:35');
INSERT INTO `gas_station` VALUES ('12', 'B00154D3BA', '中国石化三电加油站', '上海市', '黄浦区', '重庆南路275号', '121.473043', '31.210092', '021-63871271', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:38', '2017-10-16 09:31:38');
INSERT INTO `gas_station` VALUES ('13', 'B0FFFZMOUZ', '中国石化加油站(陕西北路)', '上海市', '静安区', '康定路358号', '121.44976', '31.235189', '021-62559886', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:39', '2017-10-16 09:31:39');
INSERT INTO `gas_station` VALUES ('14', 'B00157FVS9', '中国石化加油站(和兴大厦南)', '上海市', '静安区', '西藏北路551号、永兴路与西藏北路交叉口向北路西', '121.468795', '31.251582', '021-56300496', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:40', '2017-10-16 09:31:40');
INSERT INTO `gas_station` VALUES ('15', 'B00154A7E7', '中国石油加油站(常德路)', '上海市', '静安区', '常德路557号常德路与新闸路交汇处向北路西,常德路小学附近', '121.445632', '31.230306', '021-62584654', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:41', '2017-10-16 09:31:41');
INSERT INTO `gas_station` VALUES ('16', 'B00152CA86', '中国石化加油站(西藏北路)', '上海市', '静安区', '西藏北路796号,中华新路与西藏北路交叉口向北路西', '121.468344', '31.255874', '021-56636808', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:43', '2017-10-16 09:31:43');
INSERT INTO `gas_station` VALUES ('17', 'B00155QC70', '中国石油加油站(南塘浜路)', '上海市', '黄浦区', '蒙自路278号与斜土路交叉口', '121.47814', '31.204573', '021-63032392', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:44', '2017-10-16 09:31:44');
INSERT INTO `gas_station` VALUES ('18', 'B00155MFIK', '中国石化加油站(车站后路)', '上海市', '黄浦区', '国货路398号', '121.492157', '31.208649', '021-63139921', 'http://imgsrc.baidu.com/imgad/pic/item/86d6277f9e2f07084a94b3d4e324b899a801f255.jpg', '2017-10-16 09:31:45', '2017-10-16 09:31:45');

-- ----------------------------
-- Table structure for gas_station_product
-- ----------------------------
DROP TABLE IF EXISTS `gas_station_product`;
CREATE TABLE `gas_station_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '物理主键',
  `gas_id` varchar(10) NOT NULL COMMENT '加油站id',
  `code` varchar(6) NOT NULL COMMENT '汽油类型编号',
  `price` decimal(10,2) NOT NULL,
  `discount` float(255,0) DEFAULT NULL COMMENT '0',
  `gun_no` int(11) NOT NULL COMMENT '枪管编号',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`gas_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gas_station_product
-- ----------------------------
INSERT INTO `gas_station_product` VALUES ('1', 'B00155DBZM', '000001', '5.83', '0', '1', null, '2017-09-22 09:04:21');
INSERT INTO `gas_station_product` VALUES ('2', 'B00155DBZM', '000002', '6.24', '0', '2', '2017-09-21 17:14:51', '2017-09-22 09:04:23');
INSERT INTO `gas_station_product` VALUES ('3', 'B00155DBZM', '000003', '6.65', '0', '3', null, '2017-09-22 09:04:25');

-- ----------------------------
-- Table structure for gas_type
-- ----------------------------
DROP TABLE IF EXISTS `gas_type`;
CREATE TABLE `gas_type` (
  `id` int(15) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `code` varchar(6) NOT NULL COMMENT '产品编号',
  `type` varchar(255) NOT NULL COMMENT '产品类型',
  `kind` int(1) NOT NULL COMMENT '油种类:0代表汽油,1代表柴油',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`,`code`,`kind`),
  UNIQUE KEY `code` (`code`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gas_type
-- ----------------------------
INSERT INTO `gas_type` VALUES ('1', '000001', '90#', '0', '2017-09-21 09:34:12', '2017-09-21 09:34:12');
INSERT INTO `gas_type` VALUES ('2', '000002', '93#', '0', '2017-09-21 09:34:19', '2017-09-21 09:34:19');
INSERT INTO `gas_type` VALUES ('3', '000003', '97#', '0', '2017-09-21 09:34:30', '2017-09-21 09:34:30');
INSERT INTO `gas_type` VALUES ('4', '000004', '98#', '0', '2017-09-21 09:34:37', '2017-09-21 09:34:37');
INSERT INTO `gas_type` VALUES ('5', '000005', '100#', '0', '2017-09-21 16:56:55', '2017-09-21 16:56:55');
INSERT INTO `gas_type` VALUES ('6', '000006', '0#', '1', '2017-09-22 09:04:53', '2017-09-22 09:04:53');

-- ----------------------------
-- Table structure for my_collection
-- ----------------------------
DROP TABLE IF EXISTS `my_collection`;
CREATE TABLE `my_collection` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` varchar(255) NOT NULL COMMENT '用户ID',
  `store_id` varchar(10) NOT NULL COMMENT '店铺ID',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of my_collection
-- ----------------------------

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(255) NOT NULL AUTO_INCREMENT COMMENT '逻辑主键',
  `order_no` varchar(100) NOT NULL DEFAULT '' COMMENT '订单编号',
  `user_id` varchar(50) NOT NULL COMMENT '用户ID',
  `product_no` varchar(255) NOT NULL COMMENT '订单产品编号',
  `product_amount` varchar(255) NOT NULL COMMENT '产品价格',
  `status_code` int(1) NOT NULL COMMENT '订单状态码',
  `pay_method_no` int(255) DEFAULT NULL COMMENT '付款方式编号(1,微信支付,2,支付宝支付,3,现金支付)',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`,`order_no`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for order_status
-- ----------------------------
DROP TABLE IF EXISTS `order_status`;
CREATE TABLE `order_status` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `code` varchar(6) NOT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`code`,`type`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_status
-- ----------------------------
INSERT INTO `order_status` VALUES ('0', '101001', '已完成', '2017-09-21 13:15:01', '2017-09-21 13:15:01');
INSERT INTO `order_status` VALUES ('1', '101002', '已取消', '2017-09-21 13:15:05', '2017-09-21 13:15:05');
INSERT INTO `order_status` VALUES ('2', '101003', '预约中', '2017-09-21 13:15:09', '2017-09-21 13:15:09');

-- ----------------------------
-- Table structure for pay_method
-- ----------------------------
DROP TABLE IF EXISTS `pay_method`;
CREATE TABLE `pay_method` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '逻辑主键',
  `code` varchar(6) NOT NULL COMMENT '付款方式编号',
  `type` varchar(255) NOT NULL COMMENT '付款方式名称',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`,`code`),
  UNIQUE KEY `no` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pay_method
-- ----------------------------
INSERT INTO `pay_method` VALUES ('1', '010001', '微信支付', '2017-09-21 12:44:29', null);
INSERT INTO `pay_method` VALUES ('2', '010002', '支付宝支付', '2017-09-21 12:44:26', null);
INSERT INTO `pay_method` VALUES ('3', '010003', '现金支付', '2017-09-21 12:44:33', null);

-- ----------------------------
-- Table structure for red_packet
-- ----------------------------
DROP TABLE IF EXISTS `red_packet`;
CREATE TABLE `red_packet` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `amount_no` int(10) NOT NULL DEFAULT '0' COMMENT '红包金额类型编号',
  `type_no` int(255) NOT NULL COMMENT '红包类型编号',
  `start_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `invalid_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of red_packet
-- ----------------------------

-- ----------------------------
-- Table structure for red_packet_amount
-- ----------------------------
DROP TABLE IF EXISTS `red_packet_amount`;
CREATE TABLE `red_packet_amount` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '物理主键',
  `code` varchar(10) NOT NULL COMMENT '红包金额编号',
  `type` decimal(10,0) NOT NULL COMMENT '红包金额数',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of red_packet_amount
-- ----------------------------
INSERT INTO `red_packet_amount` VALUES ('1', '100001', '1', '2017-09-21 13:13:11', '2017-09-21 13:13:11');
INSERT INTO `red_packet_amount` VALUES ('2', '100002', '10', '2017-09-21 13:13:16', '2017-09-21 13:13:16');
INSERT INTO `red_packet_amount` VALUES ('3', '100003', '99', '2017-09-21 13:13:21', '2017-09-21 13:13:21');

-- ----------------------------
-- Table structure for red_packet_type
-- ----------------------------
DROP TABLE IF EXISTS `red_packet_type`;
CREATE TABLE `red_packet_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '物理主键',
  `code` varchar(6) NOT NULL COMMENT '红包类型编号',
  `type` varchar(255) DEFAULT NULL COMMENT '红包类型名称',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of red_packet_type
-- ----------------------------
INSERT INTO `red_packet_type` VALUES ('1', '011001', '洗车', '2017-09-21 13:11:11', '2017-09-21 13:11:11');
INSERT INTO `red_packet_type` VALUES ('2', '011002', '服务', '2017-09-21 13:11:14', '2017-09-21 13:11:14');
INSERT INTO `red_packet_type` VALUES ('3', '011003', '保养', '2017-09-21 13:11:17', '2017-09-21 13:11:17');
INSERT INTO `red_packet_type` VALUES ('4', '011004', '加油', '2017-09-21 15:28:44', '2017-09-21 15:28:44');

-- ----------------------------
-- Table structure for store
-- ----------------------------
DROP TABLE IF EXISTS `store`;
CREATE TABLE `store` (
  `id` int(50) NOT NULL AUTO_INCREMENT COMMENT '物理主键',
  `store_id` varchar(10) NOT NULL COMMENT '逻辑主键',
  `name` varchar(255) NOT NULL COMMENT '店铺名称',
  `city` varchar(15) DEFAULT NULL COMMENT '城市',
  `district` varchar(255) NOT NULL COMMENT '所属区',
  `address` varchar(255) DEFAULT NULL COMMENT '地址',
  `longitude` double DEFAULT NULL COMMENT '经度',
  `latitude` double DEFAULT '0' COMMENT '纬度',
  `tel` varchar(255) NOT NULL COMMENT '联系电话',
  `start_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '开始营业时间',
  `close_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '关门时间',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`,`store_id`),
  UNIQUE KEY `store_id` (`store_id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of store
-- ----------------------------
INSERT INTO `store` VALUES ('1', 'B0FFF3RWDM', '美车堂(来福士店)', '上海市', '黄浦区', '西藏中路268号来福士广场B2层', '121.476707', '31.232365', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:15', '2017-09-21 11:12:15');
INSERT INTO `store` VALUES ('2', 'B001570HP6', '美车堂(世纪广场店)', '上海市', '黄浦区', '九江路518号', '121.479846', '31.235097', '021-63527918', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:15', '2017-09-21 11:12:15');
INSERT INTO `store` VALUES ('3', 'B0FFF2B2L3', '美车堂(时代广场店)', '上海市', '黄浦区', '淮海中路99号大上海时代广场B3', '121.47926', '31.224965', '021-63910268', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:15', '2017-09-21 11:12:15');
INSERT INTO `store` VALUES ('4', 'B0FFG4I75Y', '小宋洗车行', '上海市', '黄浦区', '松雪街58-1号', '121.487622', '31.223324', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:15', '2017-09-21 11:12:15');
INSERT INTO `store` VALUES ('5', 'B00156NXSB', '梅园洗车店(共和新路)', '上海市', '静安区', '光复路555号', '121.462334', '31.241676', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:15', '2017-09-21 11:12:15');
INSERT INTO `store` VALUES ('6', 'B00155GFTQ', '良合洗车房', '上海市', '黄浦区', '合肥路634号', '121.471512', '31.213844', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:15', '2017-09-21 11:12:15');
INSERT INTO `store` VALUES ('7', 'B0FFIA4IQ5', '咻咻君洗车', '上海市', '黄浦区', '局门路153-8号楼附近', '121.480315', '31.207785', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:15', '2017-09-21 11:12:15');
INSERT INTO `store` VALUES ('8', 'B0FFI625T4', '洗车行', '上海市', '静安区', '鸿兴路168号', '121.474383', '31.256259', '15996699654', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:15', '2017-09-21 11:12:15');
INSERT INTO `store` VALUES ('9', 'B0FFHTRR1N', '君亦洗车行', '上海市', '虹口区', '西安路81-89号', '121.493973', '31.249909', '4001118868', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:15', '2017-09-21 11:12:15');
INSERT INTO `store` VALUES ('10', 'B0FFFDHU9P', '美车堂(金茂店)', '上海市', '浦东新区', '世纪大道88号金茂大厦B3层(近二号线陆家嘴站)', '121.505512', '31.235214', '021-50470236', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:15', '2017-09-21 11:12:15');
INSERT INTO `store` VALUES ('11', 'B0FFGFBC0L', '车殿堂精致洗车', '上海市', '静安区', '万航渡路456号', '121.436222', '31.224905', '021-54657673', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:15', '2017-09-21 11:12:15');
INSERT INTO `store` VALUES ('12', 'B0FFFWU0VF', '日航酒店地下洗车', '上海市', '长宁区', '延安西路488号上海日航饭店B2层', '121.437278', '31.217552', '15800419972;021-32119999', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:15', '2017-09-21 11:12:15');
INSERT INTO `store` VALUES ('13', 'B00155KI4L', '乐邦为民汽车清洁', '上海市', '徐汇区', '茶陵路75弄-1-20号', '121.467889', '31.195254', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:16', '2017-09-21 11:12:16');
INSERT INTO `store` VALUES ('14', 'B0FFF00MPI', '和贝加油洗车', '上海市', '静安区', '柳营路350号', '121.46297', '31.266776', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:16', '2017-09-21 11:12:16');
INSERT INTO `store` VALUES ('15', 'B0FFF6YI9E', '美车堂(96广场店)', '上海市', '浦东新区', '东方路796号96广场B2层', '121.524118', '31.227596', '021-58301048', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:16', '2017-09-21 11:12:16');
INSERT INTO `store` VALUES ('16', 'B0FFHSRY7S', '泡沫洗车', '上海市', '浦东新区', '峨山路628-4临附近', '121.520979', '31.213642', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:16', '2017-09-21 11:12:16');
INSERT INTO `store` VALUES ('17', 'B0FFF3VF2O', '美车堂(我格广场店)', '上海市', '普陀区', '武宁路101号B2楼IMAGO我格广场', '121.422976', '31.238135', '021-52377375', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:16', '2017-09-21 11:12:16');
INSERT INTO `store` VALUES ('18', 'B0FFF4YISH', '美车堂(宝地广场店)', '上海市', '杨浦区', '唐山路1018号宝地广场B1层', '121.511232', '31.261252', '021-65683662', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:16', '2017-09-21 11:12:16');
INSERT INTO `store` VALUES ('19', 'B0FFF3O89P', '美车堂(永新坊店)', '上海市', '徐汇区', '辛耕路105号永新坊停车场内(近天钥桥路)', '121.443677', '31.192865', '021-33686252', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:16', '2017-09-21 11:12:16');
INSERT INTO `store` VALUES ('20', 'B001574ZVV', '美车堂(大宁国际店)', '上海市', '静安区', '共和新路1878-2008号大宁国际商业广场B1层地下停车场', '121.452716', '31.274586', '021-33870240', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:12:16', '2017-09-21 11:12:16');
INSERT INTO `store` VALUES ('21', 'B0FFF74MTU', '晟旺汽车美容中心', '上海市', '黄浦区', '湖北路20号C-3室', '121.48198', '31.231296', '021-63507910;13020227192', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('22', 'B0FFIB5AV1', '3m特约汽车美容施工中心', '上海市', '黄浦区', '北海路与湖北路交叉口东50米', '121.481999', '31.231321', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('23', 'B0FFF4P0G0', '美车堂(兴业路店)', '上海市', '黄浦区', '兴业路123弄B1楼(近马当路)', '121.474639', '31.219486', '021-63851398', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('24', 'B0FFGO5F0G', '爱座驾汽车养护专家(山东南路店)', '上海市', '黄浦区', '山东南路29号', '121.485451', '31.230418', '021-63339123;13482269398', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('25', 'B0FFH15X6G', '佳游站汽车美容服务', '上海市', '黄浦区', '旧仓街与福佑路交叉口北50米', '121.485954', '31.227855', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('26', 'B0FFFROADY', '洗洗车吧', '上海市', '黄浦区', '旧仓街36号', '121.485937', '31.227763', '15601616336', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('27', 'B00155GDC0', '上海杰生洗车美容装潢技术服务中心', '上海市', '静安区', '石门二路493号', '121.459006', '31.237141', '021-62189867', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('28', 'B0FFGYW0Y7', '美靓汽车', '上海市', '静安区', '石门二路487号', '121.459114', '31.236769', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('29', 'B0FFH34GVH', '美车堂(梅龙镇广场)', '上海市', '静安区', '南京西路1038号梅龙镇广场B2层', '121.456654', '31.228536', '021-62674325;021-62880939', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('30', 'B0FFIB59R8', 'Mobil1车养护', '上海市', '黄浦区', '巨鹿路276-1号附近', '121.461117', '31.223207', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('31', 'B001557SI3', '盛鸣汽车装饰', '上海市', '黄浦区', '江阴街491号', '121.486628', '31.212781', '021-63451174', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('32', 'B0FFFWQ2I1', '新易汽车用品', '上海市', '静安区', '天目中路622号', '121.463404', '31.244288', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('33', 'B0FFHB9BFB', '爱车卫士(龙金肇周店)', '上海市', '黄浦区', '肇周路(吉安路路口)', '121.48221', '31.216666', '13611926845', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('34', 'B0FFHLTBF4', '打蜡洗车', '上海市', '静安区', '塘沽路780号附近', '121.480543', '31.246353', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('35', 'B0FFFTQBME', '车主世界', '上海市', '黄浦区', '瑞金二路197号上海交通大学医学院附属瑞金医院地下停车库内', '121.468231', '31.211939', '13917226419', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('36', 'B0FFGTF7K0', '艺速汽车服务(闸北店)', '上海市', '静安区', '京江路131号(近共和新路高架)', '121.46559', '31.248324', '021-66298577', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:10', '2017-09-21 11:29:10');
INSERT INTO `store` VALUES ('37', 'B0FFHMB0BF', '珩车会汽车美容', '上海市', '静安区', '共和路与恒丰路交叉口东100米', '121.456331', '31.243479', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:11', '2017-09-21 11:29:11');
INSERT INTO `store` VALUES ('38', 'B0FFFSM53O', '美车堂(正大广场)', '上海市', '浦东新区', '陆家嘴西路168号正大广场B3层B301', '121.498899', '31.236381', '021-50472811', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:11', '2017-09-21 11:29:11');
INSERT INTO `store` VALUES ('39', 'B0FFHS1MQ5', '汽车服务洗车、养护', '上海市', '黄浦区', '瑞金医院B1层停车场内', '121.468198', '31.211951', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:11', '2017-09-21 11:29:11');
INSERT INTO `store` VALUES ('40', 'B00156YN95', '俊耀汽车清洗美容护理', '上海市', '黄浦区', '重庆南路273-1号', '121.472855', '31.21052', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:29:11', '2017-09-21 11:29:11');
INSERT INTO `store` VALUES ('41', 'B0FFH6LYQ0', '修电瓶车', '上海市', '黄浦区', '威海路与黄陂北路交叉口西50米', '121.470953', '31.228578', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:01', '2017-09-21 11:26:01');
INSERT INTO `store` VALUES ('42', 'B0FFF9R84J', '上海瑞达汽车服务有限公司', '上海市', '黄浦区', '浙江中路398号春申江大厦', '121.478162', '31.236323', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:01', '2017-09-21 11:26:01');
INSERT INTO `store` VALUES ('43', 'B0FFI9N7ID', '汽车快修店', '上海市', '静安区', '成都北路339号', '121.466677', '31.229446', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:01', '2017-09-21 11:26:01');
INSERT INTO `store` VALUES ('44', 'B0FFI2RWBJ', '三菱空调修理点', '上海市', '黄浦区', '南京东路450号5-6层', '121.48174', '31.23649', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:01', '2017-09-21 11:26:01');
INSERT INTO `store` VALUES ('45', 'B0FFI5H0UY', '空调修理加液中心', '上海市', '黄浦区', '崇德路634号', '121.480537', '31.222648', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:01', '2017-09-21 11:26:01');
INSERT INTO `store` VALUES ('46', 'B0FFIA6PYP', 'LAMBORGHINI SHANGHAI CENTRAL', '上海市', '黄浦区', '湖滨路220号附近', '121.475911', '31.220904', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:01', '2017-09-21 11:26:01');
INSERT INTO `store` VALUES ('47', 'B0FFHXC5EN', '修车修电瓶', '上海市', '黄浦区', '元方弄与四川中路交叉口西南50米', '121.488953', '31.234278', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:01', '2017-09-21 11:26:01');
INSERT INTO `store` VALUES ('48', 'B0FFI5SL3X', '三菱空调修理加液中心', '上海市', '静安区', '西藏北路240号', '121.471941', '31.244435', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:01', '2017-09-21 11:26:01');
INSERT INTO `store` VALUES ('49', 'B0FFIA2M8J', '伊势丹修理中心', '上海市', '静安区', '南京西路1038号梅龙镇广场F2', '121.457095', '31.229268', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:01', '2017-09-21 11:26:01');
INSERT INTO `store` VALUES ('50', 'B0FFGXSJBN', '杰生气修店', '上海市', '静安区', '石门二路街道石门二路493号', '121.458999', '31.237137', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:01', '2017-09-21 11:26:01');
INSERT INTO `store` VALUES ('51', 'B0FFGOFNEQ', '锦江外事汽车公司', '上海市', '静安区', '陕西南路2号', '121.456433', '31.223419', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:01', '2017-09-21 11:26:01');
INSERT INTO `store` VALUES ('52', 'B0FFHOKH5V', '汽车快修', '上海市', '静安区', '南星路与大统路交叉口北50米', '121.464882', '31.243271', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:01', '2017-09-21 11:26:01');
INSERT INTO `store` VALUES ('53', 'B00155I7MQ', '人知汽车快修', '上海市', '静安区', '中兴路1142-1144', '121.464267', '31.252059', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:01', '2017-09-21 11:26:01');
INSERT INTO `store` VALUES ('54', 'B00156GM5X', '长江快修', '上海市', '静安区', '成都北路339号', '121.466748', '31.229564', '021-62724901;021-62725279;13818826670', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:47', '2017-09-21 11:26:47');
INSERT INTO `store` VALUES ('55', 'B0FFF00KAN', '美车堂汽车快修中心', '上海市', '静安区', '成都北路199号恒利国际大厦1层', '121.466676', '31.226992', '021-61199002', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:47', '2017-09-21 11:26:47');
INSERT INTO `store` VALUES ('56', 'B0FFGZX78P', '上海通路汽车维修道路救援拖车服务有限公司', '上海市', '黄浦区', '凤阳路425号', '121.468676', '31.233839', '17717858114', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:47', '2017-09-21 11:26:47');
INSERT INTO `store` VALUES ('57', 'B00155IPMP', '上海技嘉汽车维修服务有限公司', '上海市', '黄浦区', '巨鹿路272号(近淮海路)', '121.461249', '31.223225', '13301677277;021-62711648', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:47', '2017-09-21 11:26:47');
INSERT INTO `store` VALUES ('58', 'B0FFHWB8NO', '美孚1号车养护(技嘉巨鹿路店)', '上海市', '黄浦区', '巨鹿路272号1-2', '121.461249', '31.223225', '021-62711648', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:47', '2017-09-21 11:26:47');
INSERT INTO `store` VALUES ('59', 'B0FFHXOBHJ', '上海卓景汽车销售有限公司静安分公司', '上海市', '静安区', '新闸路818号', '121.459703', '31.235432', '021-52799588', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:47', '2017-09-21 11:26:47');
INSERT INTO `store` VALUES ('60', 'B0FFFE70ND', '小韩修配行', '上海市', '静安区', '大统路143号(南星路)', '121.464812', '31.243281', '021-63542630', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-09-21 11:26:47', '2017-09-21 11:26:47');

-- ----------------------------
-- Table structure for store_catalog
-- ----------------------------
DROP TABLE IF EXISTS `store_catalog`;
CREATE TABLE `store_catalog` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '物理主键',
  `store_id` varchar(10) NOT NULL,
  `code` varchar(6) NOT NULL COMMENT '店铺类型编码',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of store_catalog
-- ----------------------------
INSERT INTO `store_catalog` VALUES ('1', 'B0FFF3RWDM', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('2', 'B001570HP6', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('3', 'B0FFF2B2L3', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('4', 'B0FFG4I75Y', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('5', 'B00156NXSB', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('6', 'B00155GFTQ', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('7', 'B0FFIA4IQ5', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('8', 'B0FFI625T4', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('9', 'B0FFHTRR1N', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('10', 'B0FFFDHU9P', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('11', 'B0FFGFBC0L', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('12', 'B0FFFWU0VF', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('13', 'B00155KI4L', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('14', 'B0FFF00MPI', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('15', 'B0FFF6YI9E', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('16', 'B0FFHSRY7S', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('17', 'B0FFF3VF2O', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('18', 'B0FFF4YISH', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('19', 'B0FFF3O89P', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('20', 'B001574ZVV', '001001', null, null);
INSERT INTO `store_catalog` VALUES ('21', 'B0FFF74MTU', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('22', 'B0FFIB5AV1', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('23', 'B0FFF4P0G0', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('24', 'B0FFGO5F0G', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('25', 'B0FFH15X6G', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('26', 'B0FFFROADY', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('27', 'B00155GDC0', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('28', 'B0FFGYW0Y7', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('29', 'B0FFH34GVH', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('30', 'B0FFIB59R8', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('31', 'B001557SI3', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('32', 'B0FFFWQ2I1', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('33', 'B0FFHB9BFB', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('34', 'B0FFHLTBF4', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('35', 'B0FFFTQBME', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('36', 'B0FFGTF7K0', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('37', 'B0FFHMB0BF', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('38', 'B0FFFSM53O', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('39', 'B0FFHS1MQ5', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('40', 'B00156YN95', '001002', null, null);
INSERT INTO `store_catalog` VALUES ('41', 'B0FFH6LYQ0', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('42', 'B0FFF9R84J', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('43', 'B0FFI9N7ID', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('44', 'B0FFI2RWBJ', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('45', 'B0FFI5H0UY', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('46', 'B0FFIA6PYP', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('47', 'B0FFHXC5EN', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('48', 'B0FFI5SL3X', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('49', 'B0FFIA2M8J', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('50', 'B0FFGXSJBN', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('51', 'B0FFGOFNEQ', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('52', 'B0FFHOKH5V', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('53', 'B00155I7MQ', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('54', 'B00156GM5X', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('55', 'B0FFF00KAN', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('56', 'B0FFGZX78P', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('57', 'B00155IPMP', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('58', 'B0FFHWB8NO', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('59', 'B0FFHXOBHJ', '001004', null, null);
INSERT INTO `store_catalog` VALUES ('60', 'B0FFFE70ND', '001004', null, null);

-- ----------------------------
-- Table structure for store_image
-- ----------------------------
DROP TABLE IF EXISTS `store_image`;
CREATE TABLE `store_image` (
  `id` int(50) NOT NULL AUTO_INCREMENT COMMENT '物理主键',
  `store_id` varchar(10) NOT NULL COMMENT '店铺Id',
  `image_url` varchar(255) NOT NULL COMMENT '上传图片路径',
  `upload_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '上传时间',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`store_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of store_image
-- ----------------------------

-- ----------------------------
-- Table structure for store_product
-- ----------------------------
DROP TABLE IF EXISTS `store_product`;
CREATE TABLE `store_product` (
  `store_id` varchar(255) NOT NULL COMMENT '店铺ID',
  `product_id` varchar(11) NOT NULL COMMENT '产品ID',
  `product_code` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL COMMENT '产品名字',
  `product_price` decimal(10,2) NOT NULL COMMENT '产品原价格',
  `product_discount_price` decimal(10,2) NOT NULL,
  `product_desc` varchar(255) DEFAULT NULL COMMENT '产品描述',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`store_id`,`product_id`,`product_code`),
  UNIQUE KEY `product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of store_product
-- ----------------------------
INSERT INTO `store_product` VALUES ('B0FFF3RWDM', '', '', '', '0.00', '0.00', null, null, null);
INSERT INTO `store_product` VALUES ('B0FFF3RWDM', 'PRO000001', '001001', '标准洗车', '28.00', '25.00', '更换泡沫冲洗擦干，轮胎轮毂冲洗清洁，车内吸尘、车外保养', '2017-11-07 14:14:34', '2017-11-07 14:14:34');
INSERT INTO `store_product` VALUES ('B0FFF3RWDM', 'PRO000002', '001002', '美容套餐A', '1000.00', '800.00', '靓车会专用的阿米卡车漆镀晶产品是完全由siO2的无机质镀膜，膜层不分裂，不脱落，具有很强的耐磨性，能长期持久的提供对车漆的保护，让车漆不氧化，永光亮！', '2017-11-07 14:16:42', '2017-11-07 14:16:42');

-- ----------------------------
-- Table structure for store_type
-- ----------------------------
DROP TABLE IF EXISTS `store_type`;
CREATE TABLE `store_type` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '逻辑主键',
  `code` varchar(6) DEFAULT NULL COMMENT '服务类型编码',
  `type` varchar(20) DEFAULT NULL COMMENT '服务类型编码',
  `created_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of store_type
-- ----------------------------
INSERT INTO `store_type` VALUES ('1', '001001', '洗车', '2017-09-21 09:41:02', '2017-09-21 09:41:02');
INSERT INTO `store_type` VALUES ('2', '001002', '美容', '2017-09-21 09:41:28', '2017-09-21 09:41:28');
INSERT INTO `store_type` VALUES ('3', '001003', '保养', '2017-09-21 09:41:20', '2017-09-21 09:41:20');
INSERT INTO `store_type` VALUES ('4', '001004', '维修', '2017-09-21 09:41:36', '2017-09-21 09:41:36');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL COMMENT '微信小程序里为openid',
  `invite_code` varchar(6) NOT NULL COMMENT '邀请码',
  `nickname` varchar(255) DEFAULT NULL COMMENT '昵称',
  `image_url` varchar(255) DEFAULT NULL COMMENT '图片地址',
  `mobile` varchar(13) DEFAULT NULL COMMENT '绑定手机号',
  `pwd` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`user_id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'oWJcY0VrMYuG987uAGCGWFLase1g', 'BJl4N8', null, null, null, null, '0000-00-00 00:00:00', null);
