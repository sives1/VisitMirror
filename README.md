![][image-1]

# This is my Magic Mirror source code.

<!--..最佳适配PaspBerry PI..-->

根据 [MichMich/MagicMirror][1] 改动，内容没有变，在原基础上添加了中文字体的支持，系统在英文环境也可以使用中文，避免部分同学在调中文环境时发生的问题，可以省去配置系统支持中文这个步骤。

添加了室内温湿的模块，如果需要的话可以在 `main.js` 里面取消注释： `tem_hum.init();`

室内温湿的模块使用的是 MQTT 接收数据，服务器地址和RSS可在 `config.js` 中修改。

其中js/config.js的配置教程如下:{
---------------------------------------------------------
//天气模块
weather: {
        //change weather params here:
        //units: metric or imperial
        interval: 120000,
        fadeInterval: 10000,
        params: {
            q: 'nanchong',
	//q:'这里填你的城市'
            units: 'metric',
            lang: 'zh_cn',
            APPID: '' 
	//这里采用Openweathermap.org的天气API接口
	//免费注册后将API key填入APPID中
        }
---------------------------------------------------------
//提示语模块
compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            '上午好啊～',
            '今天看起来也挺不错呢～',
            '新的一天!'
        ],
        afternoon: [
            '下午好啊～',
            '你看起来很不错',
            '看看这美好的一天!'
        ],
        evening: [
            '嘿!挺不错的嘛～',
            '今天过的怎么样?',
            '晚上好~'
        ]
    },
//改内容就行，分界时间点是12:00A.M;5:00P.M;12:00PM
---------------------------------------------------------
//日历模块
calendar: {
        maximumEntries: 10, // Total Maximum Entries        url:"https://p22-calendars.icloud.com/published/2/fRAR_2Q60yKP3FHYsHlu9bIDcyMQ02HEtut55Hv9Ti-cTUrnyeW370xKyAZDlrMf"
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [
		{
			symbol: 'calendar-plus-o',
			url:"https://p22-calendars.icloud.com/published/2/fRAR_2Q60yKP3FHYsHlu9bIDcyMQ02HEtut55Hv9Ti-cTUrnyeW370xKyAZDlrMf"
		},
//日历设置比较简单，打开 Mac 上的日历软件（没有 Mac 的可以登录 iCloud 获取），获取分享日历的地址，把地址的 webcal 换成 https，写在 js/config.js 这个文件的 calendar: {} 中(当然本人使用了自己的IC作为测试/滑稽)
---------------------------------------------------------
//新闻订阅(rss)
news: {
        //feed: 'http://headlines.yahoo.co.jp/rss/zdn_ait-c_sci.xml'	//雅虎日本
        //feed:'http://www.ftchinese.com/rss/feed'	//FT中文网
        //feed:'zhihu.com/rss'	//知乎每日精选
        //feed:’https://pansci.asia/feed‘	//泛科学
        //feed:'http://songshuhui.net/feed'	//科学松鼠会
        //feed:'https://link.zhihu.com/?target=http%3A//www.matrix67.com/blog/feed.asp'	//Matrix67
        //feed:'http://feed.williamlong.info/'	//月光博客
        //feed:'https://feeds.appinn.com/appinns/'	//小众软件
        //feed:'https://cn.engadget.com/rss.xml'	//小木虫论坛
        //feed:'http://www.geekpark.net/rss‘	//极客公园
        //feed:'http://feeds.bbci.co.uk/zhongwen/simp/rss.xml'	//BBC中文网
        //feed:'http://www.chinagfw.org/feeds/posts/default?alt=rss'	//GFW与翻墙
        //feed:'https://cn.nytimes.com/rss.html'	//纽约时报中文网
        //feed:'https://sspai.com/feed'	//少数派
    }
}
//好心的zedwm已经搜集了14个链接，想用哪一个就把feed前的//去掉即可(只能用一个！）
---------------------------------------------------------
//
监听的订阅地址如下：

温度：

	homekit/himitsu/temperature

湿度：

	homekit/himitsu/humidity

体感温度：

	homekit/himitsu/heatIndex
---------------------------------------------------------
当然在以后会(很可能！)加上button操控树莓派控制家用电器，比如直接关灯开灯...balabal...
---------------------------------------------------------
2018.8.9