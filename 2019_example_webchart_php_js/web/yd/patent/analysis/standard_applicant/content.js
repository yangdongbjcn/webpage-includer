$(document).ready(function(){

		var input_text_str='\
BOSCH (ROBERT) GMBH	\n\
TOYOTA MOTOR CORP	\n\
CONTINENTAL AG (GERMANY FED. REP.)	\n\
DENSO CORP	\n\
HONDA MOTOR CO. LTD.(HONDA GIKEN KOGYO KK)	\n\
PORSCHE AUTOMOBIL HOLDING SE	\n\
NISSAN MOTOR CO. LTD.	\n\
VALEO S.A.	\n\
AISIN SEIKI CO. LTD.	\n\
FORD MOTOR CO.	\n\
GENERAL MOTORS CORP	\n\
DAIMLER AG	\n\
INTEL CORPORATION	\n\
PANASONIC CORPORATION	\n\
HITACHI LTD	\n\
BAYERISCHE MOTOREN WERKE AG (BMW)	\n\
MITSUBISHI ELECTRIC CORP	\n\
MAGNA INTERNATIONAL INC.	\n\
HYUNDAI MOTOR CO.	\n\
DELPHI AUTOMOTIVE PLC	\n\
SUBARU CORP (FORMERLY FUJI HEAVY INDUSTRIES)	\n\
QUALCOMM INC	\n\
BAIDU INC	\n\
MAZDA MOTOR CORP.	\n\
HYUNDAI MOBIS CO LTD	\n\
HUAWEI TECHNOLOGIES COMPANY LTD.	\n\
GOOGLE INC.	\n\
ZHEJIANG GEELY HOLDING GROUP CO LTD	\n\
MITSUBISHI MOTORS CORP.	\n\
HALLA GROUP	\n\
UBER TECHNOLOGIES INC	\n\
ZTE MICROELECTRONICS TECHNOLOGY CORP.	\n\
MITSUBISHI HEAVY INDUSTRIES LTD.	\n\
SAMSUNG ELECTRONICS CO LTD	\n\
ALPS ELECTRIC CO. LTD.	\n\
CHERY AUTOMOBILE CO LTD	\n\
LG ELECTRONICS INC.	\n\
HON HAI PRECISION INDUSTRY CO. LTD.(ALSO KNOWN AS FOXCONN]	\n\
NXP SEMICONDUCTORS NV	\n\
SUMITOMO ELECTRIC INDUSTRIES LTD.	\n\
SIEMENS AKTIENGESELLSCHAFT	\n\
TOSHIBA CORP	\n\
KOMATSU LTD.	\n\
INTERNATIONAL BUSINESS MACHINES CORP	\n\
UNIV JILIN	\n\
WAYMO LLC	\n\
FAURECIA S. A.	\n\
TOYOTA INDUSTRIES CORPORATION	\n\
UNIV CHANGAN	\n\
SUZUKI MOTOR CORP.	\n\
UNIV JIANGSU	\n\
PIONEER CORP.	\n\
SAIC MOTOR CO LTD	\n\
CATERPILLAR INC.	\n\
BEIJING AUTOMOBILE RES GEN INST CO LTD	\n\
BOE TECHNOLOGY GROUP LTD	\n\
GENERAL ELECTRIC COMPANY	\n\
CHINESE ACADEMY OF SCIENCE	\n\
HERE GLOBAL BV	\n\
GROUPE PSA	\n\
BEIJING ZHIXINGZHE TECHNOLOGY CO LTD	\n\
TONGJI UNIVERSITY	\n\
TATA SONS LTD	\n\
SONY CORP	\n\
SINFONIA TECHNOLOGY CO LTD	\n\
ELECTRONICS AND TELECOMMUNICATIONS RESEARCH INSTITUTE	\n\
RICOH CO. LTD.	\n\
MEIDENSHA CORP	\n\
ANHUI JIANGHUI AUTOMOBILE CO LTD	\n\
CDGM GLASS CO LTD	\n\
FUJITSU LIMITED	\n\
OMRON CORP.	\n\
BEIJING INST TECHNOLOGY	\n\
NEC CORP	\n\
BOSCH (ROBERT) GMBH | SAMSUNG SDI CO LTD	\n\
RENAULT SA	\n\
VOLVO AB	\n\
AVIATION INDUSTRY CORPORATION OF CHINA (AVIC)	\n\
AISIN SEIKI CO. LTD. | TOYOTA MOTOR CORP	\n\
UNIV WUHAN TECHNOLOGY	\n\
ISUZU MOTORS LTD.	\n\
TSINGHUA UNIVERSITY	\n\
HYUNDAI MOTOR CO. | KIA MOTORS CORP.	\n\
YAZAKI CORPORATION	\n\
UNIV NANJING AERONAUTICS & ASTRONAUTICS	\n\
JTEKT CORP (FORMERLY KOYO SEIKO CO LTD)	\n\
ZF FRIEDRICHSHAFEN AG (GERMANY)	\n\
IHI CORP	\n\
BYD CO LTD	\n\
SAMSUNG SDI CO LTD | BOSCH (ROBERT) GMBH	\n\
DAIMLER AG 70327 STUTTGART DE	\n\
NVIDIA CORP.	\n\
NANJING SHILAIER AUTOMOTIVE ELECTRONICS	\n\
UNIV BEIJING AERONAUTICS & ASTRONAUTICS	\n\
UISEE TECHNOLOGIES BEIJING CO LTD	\n\
AUTOMOTIVE RESEARCH & TESTING CENTER	\n\
';

	var map_text_str='\
BOSCH	博世\n\
TOYOTA	丰田\n\
DENSO	电装\n\
HONDA	本田\n\
NISSAN	日产\n\
FORD	福特\n\
GM	通用\n\
DAIMLER	戴姆勒\n\
TOYOTA	丰田\n\
CONTINENTAL	大陆\n\
INTEL	英特尔\n\
BAYERISCHE	宝马\n\
FORD	福特\n\
HYUNDAI	现代\n\
AISIN	爱信\n\
VALEO	法雷奥\n\
MITSUBISHI	三菱\n\
VOLKSWAGEN	大众\n\
ZTE	中兴\n\
BOE	京东方\n\
AUDI	大众\n\
DELPHI	德尔福\n\
GOOGLE	谷歌\n\
QUALCOMM	高通\n\
GENERAL MOTORS	通用\n\
FUJI HEAVY	斯巴鲁\n\
富士重工	斯巴鲁\n\
MAGNA	麦格纳\n\
MITSUBISHI	三菱\n\
MAZDA	马自达\n\
HALLA	翰昂\n\
MANDO	万都\n\
UBER	优步\n\
SUBARU	斯巴鲁\n\
BAIDU	百度\n\
CHERY	奇瑞\n\
ALPINE	阿尔派\n\
NXP	恩智浦\n\
LG	乐金\n\
MATSUSHITA	三菱\n\
FUJITSU	富士通\n\
PANASONIC	松下\n\
WAYMO	Waymo\n\
HITACHI	日立\n\
GEELY	吉利\n\
SIEMENS	西门子\n\
MURATA	村田\n\
INT BUSINESS MACHINES	IBM\n\
INTERNATIONAL BUSINESS MACHINES	IBM\n\
SAMSUNG	三星\n\
KIA	起亚\n\
UNIV JILIN	吉林大学\n\
SUMITOMO	住友\n\
UNIV CHANGAN	长安大学\n\
DAIMLERCHRYSLER	戴姆勒\n\
MARVELL	美满\n\
UNIV JIANGSU	江苏大学\n\
DJI	大疆\n\
KOMATSU	小松\n\
SUZUKI	铃木\n\
FUJI JUKOGYO	斯巴鲁\n\
SCANIA	斯堪尼亚\n\
VOLVO	沃尔沃\n\
PANASONIC	松下\n\
TOSHIBA	东芝\n\
SHINKO ELECTRIC	神钢\n\
DAIHATSU	大发\n\
HALLA	翰昂\n\
RENAULT	雷诺\n\
PEUGEOT	标致\n\
ZHIXINGZHE	智行者\n\
UNIV TONGJI	同济大学\n\
TONGJI UNIVERSITY	同济大学\n\
KOMATSU	小松\n\
CATERPILLAR	卡特彼勒\n\
HERE	HERE\n\
UNIV NANJING AERONAUTICS	南京航空航天大学\n\
NANJING AERONAUTICS UNIVERSITY	南京航空航天大学\n\
BEIJING INST TECHNOLOGY	北京工业大学\n\
GENERAL ELECTRIC	通用\n\
CHINESE ACADEMY OF SCIENCE	中科院\n\
CAS	中科院\n\
UNIV TSINGHUA	清华大学\n\
EQUOS	EQUOS\n\
PIONEER	先锋\n\
CHANGAN AUTOMOBILE	长安汽车\n\
RICOH	理光\n\
JAGUAR	捷豹\n\
UNIV BEIHANG	北京航空航天大学\n\
MATSUDA	马自达\n\
MEIDENSHA	明电舍\n\
MOBILEYE	Mobileye\n\
ELECTRONICS & TELECOM RES INST	韩国电子通信研究院\n\
ELECTRONICS AND TELECOMMUNICATIONS RESEARCH INSTITUTE	韩国电子通信研究院\n\
UNIV WUHAN TECHNOLOGY	武汉理工大学\n\
ADVICS	爱德克斯\n\
SONY	索尼\n\
SHARP	夏普\n\
UNIV SHANGHAI JIAOTONG	上海交通大学\n\
STATE GRID	国家电网\n\
OMRON	欧姆龙\n\
ISUZU	五十铃\n\
CONNAUGHT ELECTRONICS	法雷奥\n\
VISTEON	伟世通\n\
GEN MOTORS	通用\n\
APTIV TECHNOLOGIES	德尔福\n\
NIPPON YUSOKI	三菱\n\
UNIV HEFEI TECHNOLOGY	合肥工业大学\n\
ANHUI JIANGHUAI AUTOMOBILE	江淮汽车\n\
SHILAIER	南京视莱尔\n\
UNIV ZHEJIANG	浙江大学\n\
HON HAI	鸿海\n\
NVIDIA	英伟达\n\
TUSIMPLE	TuSimple\n\
AGENCY DEFENSE DEV	韩国国防科学研究院\n\
BYD	比亚迪\n\
UISEE	驭势科技\n\
EWATT	易瓦特\n\
SOKEN	想研\n\
TUSIMPLE	TuSimple\n\
CROWN EQUIP	Crown Equipment\n\
SANYO	三洋\n\
NEC	NEC\n\
HUAWEI	华为\n\
ZF FRIEDRICHSHAFEN	采埃孚\n\
ROILAND	大连楼兰科技\n\
YAMAHA	雅马哈\n\
UNIV HARBIN ENGINEERING	哈尔滨工业大学\n\
HARBIN INSTITUTE OF TECHNOLOGY	哈尔滨工业大学\n\
DAIFUKU	Daifuku\n\
PORSCHE	大众\n\
DESAY SV	德赛西威\n\
ZOOX	zoox\n\
AUTOLIV	美安\n\
UNIV SOUTHEAST	东南大学\n\
RONGQI	广东容祺\n\
JINGDONG	京东\n\
PHILIPS	飞利浦\n\
JTEKT	捷太格特\n\
XIAOMI	小米\n\
UNIV SUZHOU AUTOMOBILE RES	清华大学苏州汽车研究院\n\
YAZAKI	矢崎总业\n\
HONEYWELL	霍尼韦尔\n\
NUTONOMY	NuTomony\n\
PANASONIC	松下\n\
AUTOMOTIVE RES & TESTING CENT	财团法人车辆研究测试中心\n\
VOCATIONAL & TECH COLLEGE	印第安纳职业技术学院\n\
KOITO MFG	小糸制作所\n\
FARADAY & FUTURE	法拉利未来\n\
AUTONETWORKS	住友\n\
UNIV NORTHWESTERN	西北大学\n\
XIAOPENG	广州小鹏汽车\n\
IHI	IHI\n\
TEXAS INSTR	德州仪器\n\
TCL	TCL\n\
SAIC	上汽\n\
BEIJING AUTOMOBILE RES GEN INST	北京汽车研究总院\n\
ANHUI JIANGHUI AUTOMOBILE	江淮汽车\n\
ANHUI JIANGHUAI AUTOMOBILE	江淮汽车\n\
TSINGHUA UNIVERSITY	清华大学\n\
UNIV BEIJING AERONAUTICS	北京航空航天大学\n\
HIKVISION	海康威视\n\
SHANGHAI JIAO TONG	上海交通大学\n\
SHANGHAI JIAOTONG	上海交通大学\n\
AVIATION INDUSTRY CORPORATION OF CHINA	中国航空工业集团\n\
AVIC	中国航空工业集团\n\
ZHEJIANG UNIVERSITY	浙江大学\n\
TENCENT	腾讯\n\
NAVINFO	北京四维图新\n\
DONGFENG AUTOMOBILE	东风汽车\n\
ZHENGZHOU YUNHAI	郑州云海\n\
GREAT WALL MOTORS	长城汽车\n\
BEIQI FOTON MOTOR	北汽\n\
CHINA AUTOMOTIVE TECHNOLOGY & RES CENT	中国汽车技术研究中心\n\
ZHENGZHOU YUTONG COACH	郑州宇通\n\
SOUTHEAST UNIVERSITY	东南大学\n\
CRRC	中国中车\n\
UNIV GUANGDONG TECHNOLOGY	广东工业大学\n\
GUANGDONG TECHNOLOGY UNIVERSITY	广东工业大学\n\
UNIV BEIJING UNION	北京联合大学\n\
BEIJING UNION UNIVERSITY	北京联合大学\n\
UNIV NANJING SCI & TECHNOLOGY	南京理工大学\n\
NANJING SCI & TECHNOLOGY UNIVERSITY	南京理工大学\n\
UNIV CHINA JILIANG	中国计量大学\n\
CHINA JILIANG UNIVERSITY	中国计量大学\n\
SOUTH CHINA UNIVERSITY OF TECHNOLOGY	华南理工大学大学\n\
GUANGZHOU AUTOMOBILE	广汽\n\
UNIV BEIJING TECHNOLOGY	北京科技大学\n\
BEIJING TECHNOLOGY UNIVERSITY	北京科技大学\n\
UNIV CHONGQING POSTS & TELECOM	重庆邮电大学\n\
CHONGQING POSTS & TELECOM UNIVERSITY	重庆邮电大学\n\
DALIAN UNIVERSITY OF TECHNOLOGY	大连理工大学\n\
BEIJING NEW ENERGY AUTOMOBILE	北京新能源汽车\n\
HISENSE	海信\n\
JD.COM	京东\n\
TIANMA MICROELECTRONICS	上海天马\n\
QIHOO 360	360\n\
PSA	标致\n\
CHENGDU YUYA	成都宇亚\n\
POSITEC	宝时得科技\n\
ZONGMU TECHNOLOGY	纵目科技\n\
FAURECIA	佛吉亚\n\
ALPS ELECTRIC	日本ALPS\n\
CANON	佳能\n\
MICROSOFT	微软\n\
EPSON	爱普生\n\
TATA	塔塔\n\
WESTERN DIGITAL	西部数码\n\
JVC	JVC\n\
NUANCE COMMUNICATIONS	钮安斯\n\
APPLE	苹果\n\
TOKAI RIKA	东海理化\n\
BOEING	东海理化\n\
UNIV XIDIAN	西安电子科技大学\n\
XIDIAN UNIVERSITY	西安电子科技大学\n\
UNITED TECHNOLOGIES	联合技术公司\n\
GENK	通用\n\
UNIV CHINA ELECTRONIC SCI & TECHNOLOGY	中国电子科技大学\n\
CHINA ELECTRONIC SCI AND TECHNOLOGY UNIVERSITY	中国电子科技大学\n\
OPPO	OPPO\n\
UNIV NANJING POSTS & TELECOM	南京邮电大学\n\
NANJING UNIVERSITY OF POSTS AND TELECOMMUNICATIONS	南京邮电大学\n\
ALIBABA	阿里巴巴\n\
BOTAIYUEZHEN	上海博泰悦臻\n\
MICRON	美光\n\
HYNIX	海力士\n\
';

	$('#input_text').val(input_text_str);
	$('#map_text').val(map_text_str);
	$('#result_text').val('');

	$('#submit').click(function(){
		var p_url = g_var.gs_yd_text + 'TextLines/apiTextMap';
		var p_data = {
			text: $('#input_text').val(),
			map: $('#map_text').val()
		};
		p_callback = function(data, status){
			var regReturn = new RegExp('rrrrnnnn', "g");
			t_data = data.replace(regReturn,"\r\n" );
			$('#result_text').val(t_data);
		};
		$.post(p_url, p_data, p_callback);
	});/*click function*/

});


