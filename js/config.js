var config = {
    lang: 'zh_cn',
    time: {
        timeFormat: 12,
        displaySeconds: true,
        digitFade: false,
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        interval: 120000,
        fadeInterval: 10000,
        params: {
            q: 'nanchong',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'zh_cn',
            APPID: 'b05f84fc4231b215f0c2ace372e3c1b6'
        }
    },
    tem_hum: {
      mqttServer: 'mqtt.hellowk.cc',
      mqttServerPort: 9001,
      mqttclientName: "magic_mirror_tem_hum",
      temperatureTopic: 'homekit/himitsu/temperature',
      humidityTopic: 'homekit/himitsu/humidity',
      heatIndexTopic: 'homekit/himitsu/heatIndex'
    },
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
    calendar: {
        maximumEntries: 10, // Total Maximum Entries        url:"https://p22-calendars.icloud.com/published/2/fRAR_2Q60yKP3FHYsHlu9bIDcyMQ02HEtut55Hv9Ti-cTUrnyeW370xKyAZDlrMf"
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [
		{
			symbol: 'calendar-plus-o',
			url:"https://p22-calendars.icloud.com/published/2/fRAR_2Q60yKP3FHYsHlu9bIDcyMQ02HEtut55Hv9Ti-cTUrnyeW370xKyAZDlrMf"
		},
		// {
		// 	symbol: 'soccer-ball-o',
		// 	url: 'https://www.google.com/calendar/ical/akvbisn5iha43idv0ktdalnor4%40group.calendar.google.com/public/basic.ics',
		// },
		// {
			// symbol: 'mars',
			// url: "https://server/url/to/his.ics",
		// },
		// {
			// symbol: 'venus',
			// url: "https://server/url/to/hers.ics",
		// },
		// {
			// symbol: 'venus-mars',
			// url: "https://server/url/to/theirs.ics",
		// },
		]
    },
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
        //feed:''	//Zedwm`s Blog
        feed:'https://sspai.com/feed'	//少数派
    }
}