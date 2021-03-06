<div class="row">
	<div class='col-sm-12'>
		<h2>专利容器</h2>
		<h3>容器思想</h3>
		<p>专利容器(Patent-Container)专利容器并不是一种特殊的东西，它只是为了解决专利大数据的特定问题而提出的一种思路。</p>
		<p>专利容器首先开源了一个专利大数据处理框架。该框架提供了从专利数据读取（电子表格文件），清洗，统计，作图的一个完整流程。该框架支持流行的编程语言Python。</p>
		<p>同时，为了向不愿意编程的用户直接提供服务，也使用网络编程语言Javascript和PHP实现了部分功能。这些在线功能体验可以访问微信公众号yangdongpatent。2019年出版的专著《玩转专利大数据——智慧容器助力专利分析与运营》第三章和第6.2节。或者直接访问网站http://zlrq.cn。</p>
		<p>专利容器针对的问题是专利大数据如何重复利用的问题。大数据的重复利用具体可以分为数据的复用和算法的复用。</p>
		<p>大部分专利分析人员使用商业专利数据库以及附带的专利分析软件或者功能。但是这些专利分析功能与商业数据库是绑定的。用户必须持续付费才可以不断地使用。而且这些专利分析功能也无法应用到其他数据库的数据上。</p>
		<p>专利容器支持一维数组、二维表格（frame）、技术分支树多种形式的专利数据组织。某数据库的专利数据可以在配置字段之后，直接对接到二维表格frame中。</p>
		<p>现有的各种专利数据库的导出格式大都是电子表格（xls文件或者csv文件）。用户对合法导出的文件可以进行任意再处理，例如使用专利容器进行处理。这些文件一旦导出，就可以一直使用，不再受制于商业数据库的访问权限。</p>
		<h3>专利容器要做什么？</h3>
		<p>1)提供一个基于简单编程语言（例如pythom）的专利大数据分析工具（称为『专利容器』）。提供基于网络编程语言的（例如JavaScript或者PHP）的专利大数据分析库。提供基于上述网络编程语言的网络公众服务（例如微信小程序，或者专利分析网站，或者提供专利分析AJAX接口）。</p>
		<p>
			2)集成一些用于专利分析和可视化的算法。提供对于多电子表格文件的读写功能。提供对于专利“技术分支树”/“技术分解表”结构的组织和操作功能。提供柱状图、饼状图等常见图表，散点图、矩阵图、中国地图、世界地图的“自动出图”。
		</p>
		<p>
			3)提供各种自动化机制。容器嵌套的数据可以随着父容器数据的更新而自动更新。从原始数据、统计数据到图表，建立了容器的联动机制。当原始数据更新后，图表可以自动更新。
		</p>
	</div>
</div>