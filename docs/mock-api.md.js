webpackJsonp([46,66],{1693:function(n,s){n.exports={content:["article",["p","Mock \u6570\u636e\u662f\u524d\u7aef\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5fc5\u4e0d\u53ef\u5c11\u7684\u4e00\u73af\uff0c\u662f\u5206\u79bb\u524d\u540e\u7aef\u5f00\u53d1\u7684\u5173\u952e\u94fe\u8def\u3002\u901a\u8fc7\u9884\u5148\u8ddf\u670d\u52a1\u5668\u7aef\u7ea6\u5b9a\u597d\u7684\u63a5\u53e3\uff0c\u6a21\u62df\u8bf7\u6c42\u6570\u636e\u751a\u81f3\u903b\u8f91\uff0c\u80fd\u591f\u8ba9\u524d\u7aef\u5f00\u53d1\u72ec\u7acb\u81ea\u4e3b\uff0c\u4e0d\u4f1a\u88ab\u670d\u52a1\u7aef\u7684\u5f00\u53d1\u6240\u963b\u585e\u3002"],["p","\u5728 Ant Design Pro \u4e2d\uff0c\u56e0\u4e3a\u6211\u4eec\u5e95\u5c42\u7684\u5de5\u5177\u662f roadhog\uff0c\u800c\u5b83\u81ea\u5e26\u4e86\u4ee3\u7406\u8bf7\u6c42\u529f\u80fd\uff0c\u901a\u8fc7\u4ee3\u7406\u8bf7\u6c42\u5c31\u80fd\u591f\u8f7b\u677e\u5904\u7406\u6570\u636e\u6a21\u62df\u7684\u529f\u80fd\u3002"],["h2","\u4f7f\u7528 roadhog \u7684\u8bf7\u6c42\u4ee3\u7406\u529f\u80fd"],["p","\u5728\u901a\u8fc7\u914d\u7f6e ",["code",".roadhogrc.mock.js"]," \u6765\u5904\u7406\u4ee3\u7406\u8bf7\u6c42\uff0c\u652f\u6301\u57fa\u4e8e ",["code","require"]," \u52a8\u6001\u5206\u6790\u7684\u5b9e\u65f6\u5237\u65b0\uff0c\u652f\u6301 ES6 \u8bed\u6cd5\uff0c\u4ee5\u53ca\u53cb\u597d\u7684\u51fa\u9519\u63d0\u793a\uff0c\u8be6\u60c5\u53c2\u770b ",["a",{title:null,href:"https://github.com/sorrycc/roadhog#mock"},"roadhog"],"\u3002"],["pre",{lang:"js",highlighted:'<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// \u652f\u6301\u503c\u4e3a Object \u548c Array</span>\n  <span class="token string">\'GET /api/users\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> users<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment" spellcheck="true">// GET POST \u53ef\u7701\u7565</span>\n  <span class="token string">\'/api/users/1\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment" spellcheck="true">// \u652f\u6301\u81ea\u5b9a\u4e49\u51fd\u6570\uff0cAPI \u53c2\u8003 express@4</span>\n  <span class="token string">\'POST /api/users/create\'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">\'OK\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment" spellcheck="true">// Forward \u5230\u53e6\u4e00\u4e2a\u670d\u52a1\u5668</span>\n  <span class="token string">\'GET /assets/*\'</span><span class="token punctuation">:</span> <span class="token string">\'https://assets.online/\'</span><span class="token punctuation">,</span>\n\n  <span class="token comment" spellcheck="true">// Forward \u5230\u53e6\u4e00\u4e2a\u670d\u52a1\u5668\uff0c\u5e76\u6307\u5b9a\u5b50\u8def\u5f84</span>\n  <span class="token comment" spellcheck="true">// \u8bf7\u6c42 /someDir/0.0.50/index.css \u4f1a\u88ab\u4ee3\u7406\u5230 https://g.alicdn.com/tb-page/taobao-home, \u5b9e\u9645\u8fd4\u56de https://g.alicdn.com/tb-page/taobao-home/0.0.50/index.css</span>\n  <span class="token string">\'GET /someDir/(.*)\'</span><span class="token punctuation">:</span> <span class="token string">\'https://g.alicdn.com/tb-page/taobao-home\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","export default {\n  // \u652f\u6301\u503c\u4e3a Object \u548c Array\n  'GET /api/users': { users: [1, 2] },\n\n  // GET POST \u53ef\u7701\u7565\n  '/api/users/1': { id: 1 },\n\n  // \u652f\u6301\u81ea\u5b9a\u4e49\u51fd\u6570\uff0cAPI \u53c2\u8003 express@4\n  'POST /api/users/create': (req, res) => { res.end('OK'); },\n\n  // Forward \u5230\u53e6\u4e00\u4e2a\u670d\u52a1\u5668\n  'GET /assets/*': 'https://assets.online/',\n\n  // Forward \u5230\u53e6\u4e00\u4e2a\u670d\u52a1\u5668\uff0c\u5e76\u6307\u5b9a\u5b50\u8def\u5f84\n  // \u8bf7\u6c42 /someDir/0.0.50/index.css \u4f1a\u88ab\u4ee3\u7406\u5230 https://g.alicdn.com/tb-page/taobao-home, \u5b9e\u9645\u8fd4\u56de https://g.alicdn.com/tb-page/taobao-home/0.0.50/index.css\n  'GET /someDir/(.*)': 'https://g.alicdn.com/tb-page/taobao-home',\n};"]],["p","\u5f53\u5ba2\u6237\u7aef\uff08\u6d4f\u89c8\u5668\uff09\u53d1\u9001\u8bf7\u6c42\uff0c\u5982\uff1a",["code","GET /api/users"],"\uff0c\u90a3\u4e48\u672c\u5730\u542f\u52a8\u7684 ",["code","roadhog server"]," \u4f1a\u8ddf\u6b64\u914d\u7f6e\u6587\u4ef6\u5339\u914d\u8bf7\u6c42\u8def\u5f84\u4ee5\u53ca\u65b9\u6cd5\uff0c\u5982\u679c\u5339\u914d\u5230\u4e86\uff0c\u5c31\u4f1a\u5c06\u8bf7\u6c42\u901a\u8fc7\u914d\u7f6e\u5904\u7406\uff0c\u5c31\u53ef\u4ee5\u50cf\u6837\u4f8b\u4e00\u6837\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u8fd4\u56de\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u51fd\u6570\u5904\u7406\u4ee5\u53ca\u91cd\u5b9a\u5411\u5230\u53e6\u4e00\u4e2a\u670d\u52a1\u5668\u3002"],["p","\u6bd4\u5982\u5b9a\u4e49\u5982\u4e0b\u6620\u5c04\u89c4\u5219\uff1a"],["pre",{lang:null,highlighted:'<span class="token string">\'GET /api/currentUser\'</span><span class="token punctuation">:</span> {\n  name<span class="token punctuation">:</span> <span class="token string">\'momo.zxy\'</span><span class="token punctuation">,</span>\n  avatar<span class="token punctuation">:</span> imgMap<span class="token punctuation">.</span>user<span class="token punctuation">,</span>\n  userid<span class="token punctuation">:</span> <span class="token string">\'00000001\'</span><span class="token punctuation">,</span>\n  notifyCount<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n}<span class="token punctuation">,</span>'},["code","'GET /api/currentUser': {\n  name: 'momo.zxy',\n  avatar: imgMap.user,\n  userid: '00000001',\n  notifyCount: 12,\n},"]],["p","\u8bbf\u95ee\u7684\u672c\u5730 ",["code","/api/users"]," \u63a5\u53e3\uff1a"],["p","\u8bf7\u6c42\u5934"],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/ZdlcFoYonSGDupWnktZn.png",width:"400"}]],["p","\u8fd4\u56de\u7684\u6570\u636e"],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/OLHIXePGHkkFoaZVQAts.png",width:"600"}]],["h3","\u5f15\u5165 Mock.js"],["p",["a",{title:null,href:"http://mockjs.com/"},"Mock.js"]," \u662f\u5e38\u7528\u7684\u8f85\u52a9\u751f\u6210\u6a21\u62df\u6570\u636e\u7684\u7b2c\u4e09\u65b9\u5e93\uff0c\u5f53\u7136\u4f60\u53ef\u4ee5\u7528\u4f60\u559c\u6b22\u7684\u4efb\u610f\u5e93\u6765\u7ed3\u5408 roadhog \u6784\u5efa\u6570\u636e\u6a21\u62df\u529f\u80fd\u3002"],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> mockjs <span class="token keyword">from</span> <span class="token string">\'mockjs\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// \u4f7f\u7528 mockjs \u7b49\u4e09\u65b9\u5e93</span>\n  <span class="token string">\'GET /api/tags\'</span><span class="token punctuation">:</span> mockjs<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'list|100\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'@city\'</span><span class="token punctuation">,</span> <span class="token string">\'value|1-100\'</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">\'type|0-2\'</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","import mockjs from 'mockjs';\n\nexport default {\n  // \u4f7f\u7528 mockjs \u7b49\u4e09\u65b9\u5e93\n  'GET /api/tags': mockjs.mock({\n    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],\n  }),\n};"]],["h3","\u6dfb\u52a0\u8de8\u57df\u8bf7\u6c42\u5934"],["p","\u8bbe\u7f6e ",["code","response"]," \u7684\u8bf7\u6c42\u5934\u5373\u53ef\uff1a"],["pre",{lang:null,highlighted:'<span class="token string">\'POST /api/users/create\'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n  res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">\'Access-Control-Allow-Origin\'</span><span class="token punctuation">,</span> <span class="token string">\'*\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n}<span class="token punctuation">,</span>'},["code","'POST /api/users/create': (req, res) => {\n  ...\n  res.setHeader('Access-Control-Allow-Origin', '*');\n  ...\n},"]],["h2","\u5408\u7406\u7684\u62c6\u5206\u4f60\u7684 mock \u6587\u4ef6"],["p","\u5bf9\u4e8e\u6574\u4e2a\u7cfb\u7edf\u6765\u8bf4\uff0c\u8bf7\u6c42\u63a5\u53e3\u662f\u590d\u6742\u5e76\u4e14\u7e41\u591a\u7684\uff0c\u4e3a\u4e86\u5904\u7406\u5927\u91cf\u6a21\u62df\u8bf7\u6c42\u7684\u573a\u666f\uff0c\u6211\u4eec\u901a\u5e38\u628a\u6bcf\u4e00\u4e2a\u6570\u636e\u6a21\u578b\u62bd\u8c61\u6210\u4e00\u4e2a\u6587\u4ef6\uff0c\u7edf\u4e00\u653e\u5728 ",["code","mock"]," \u7684\u6587\u4ef6\u5939\u4e2d\uff0c\u7136\u540e\u518d\u5728 ",["code",".roadhog.mock.js"]," \u4e2d\u5f15\u5165\u3002"],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/wbeiDacBkchXrTafasBy.png",width:"200"}]],["p",["code",".roadhog.mock.js"]," \u7684\u6837\u4f8b\u5982\u4e0b\uff1a"],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> mockjs <span class="token keyword">from</span> <span class="token string">\'mockjs\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// \u5f15\u5165\u5206\u79bb\u7684 mock \u6587\u4ef6</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getRule<span class="token punctuation">,</span> postRule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./mock/rule\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getActivities<span class="token punctuation">,</span> getNotice<span class="token punctuation">,</span> getFakeList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./mock/api\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getFakeChartData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./mock/chart\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getProfileBasicData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./mock/profile\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getProfileAdvancedData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./mock/profile\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getNotices <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./mock/notices\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">\'GET /api/fake_list\'</span><span class="token punctuation">:</span> getFakeList<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/fake_chart_data\'</span><span class="token punctuation">:</span> getFakeChartData<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/profile/basic\'</span><span class="token punctuation">:</span> getProfileBasicData<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/profile/advanced\'</span><span class="token punctuation">:</span> getProfileAdvancedData<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/notices\'</span><span class="token punctuation">:</span> getNotices<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> proxy<span class="token punctuation">;</span>'},["code","import mockjs from 'mockjs';\n\n// \u5f15\u5165\u5206\u79bb\u7684 mock \u6587\u4ef6\nimport { getRule, postRule } from './mock/rule';\nimport { getActivities, getNotice, getFakeList } from './mock/api';\nimport { getFakeChartData } from './mock/chart';\nimport { getProfileBasicData } from './mock/profile';\nimport { getProfileAdvancedData } from './mock/profile';\nimport { getNotices } from './mock/notices';\n\nconst proxy = {\n  'GET /api/fake_list': getFakeList,\n  'GET /api/fake_chart_data': getFakeChartData,\n  'GET /api/profile/basic': getProfileBasicData,\n  'GET /api/profile/advanced': getProfileAdvancedData,\n  'GET /api/notices': getNotices,\n};\n\nexport default proxy;"]],["h2","\u5982\u4f55\u6a21\u62df\u5ef6\u8fdf"],["p","\u4e3a\u4e86\u66f4\u52a0\u771f\u5b9e\u7684\u6a21\u62df\u7f51\u7edc\u6570\u636e\u8bf7\u6c42\uff0c\u5f80\u5f80\u9700\u8981\u6a21\u62df\u7f51\u7edc\u5ef6\u8fdf\u65f6\u95f4\u3002"],["h3","\u624b\u52a8\u6dfb\u52a0 setTimeout \u6a21\u62df\u5ef6\u8fdf"],["p","\u4f60\u53ef\u4ee5\u5728\u91cd\u5199\u8bf7\u6c42\u7684\u4ee3\u7406\u65b9\u6cd5\uff0c\u5728\u5176\u4e2d\u6dfb\u52a0\u6a21\u62df\u5ef6\u8fdf\u7684\u5904\u7406\uff0c\u5982\uff1a"],["pre",{lang:"js",highlighted:'<span class="token string">\'POST /api/forms\'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">\'Ok\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>'},["code","'POST /api/forms': (req, res) => {\n  setTimeout(() => {\n    res.send('Ok');\n  }, 1000);\n},"]],["h3","\u4f7f\u7528\u63d2\u4ef6\u6a21\u62df\u5ef6\u8fdf"],["p","\u4e0a\u9762\u7684\u65b9\u6cd5\u867d\u7136\u7b80\u4fbf\uff0c\u4f46\u662f\u5f53\u4f60\u9700\u8981\u6dfb\u52a0\u6240\u6709\u7684\u8bf7\u6c42\u5ef6\u8fdf\u7684\u65f6\u5019\uff0c\u53ef\u80fd\u5c31\u9ebb\u70e6\u4e86\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u901a\u8fc7\u7b2c\u4e09\u65b9\u63d2\u4ef6\u6765\u7b80\u5316\u8fd9\u4e2a\u95ee\u9898\uff0c\u5982\uff1a",["a",{title:null,href:"https://github.com/nikogu/roadhog-api-doc"},"roadhog-api-doc"],"\u3002"],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> delay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'roadhog-api-doc\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">\'GET /api/project/notice\'</span><span class="token punctuation">:</span> getNotice<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/activities\'</span><span class="token punctuation">:</span> getActivities<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/rule\'</span><span class="token punctuation">:</span> getRule<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/tags\'</span><span class="token punctuation">:</span> mockjs<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'list|100\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'@city\'</span><span class="token punctuation">,</span> <span class="token string">\'value|1-100\'</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">\'type|0-2\'</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/fake_list\'</span><span class="token punctuation">:</span> getFakeList<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/fake_chart_data\'</span><span class="token punctuation">:</span> getFakeChartData<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/profile/basic\'</span><span class="token punctuation">:</span> getProfileBasicData<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/profile/advanced\'</span><span class="token punctuation">:</span> getProfileAdvancedData<span class="token punctuation">,</span>\n  <span class="token string">\'POST /api/register\'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> status<span class="token punctuation">:</span> <span class="token string">\'ok\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/notices\'</span><span class="token punctuation">:</span> getNotices<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// \u8c03\u7528 delay \u51fd\u6570\uff0c\u7edf\u4e00\u5904\u7406</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">delay</span><span class="token punctuation">(</span>proxy<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { delay } from 'roadhog-api-doc';\n\nconst proxy = {\n  'GET /api/project/notice': getNotice,\n  'GET /api/activities': getActivities,\n  'GET /api/rule': getRule,\n  'GET /api/tags': mockjs.mock({\n    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }]\n  }),\n  'GET /api/fake_list': getFakeList,\n  'GET /api/fake_chart_data': getFakeChartData,\n  'GET /api/profile/basic': getProfileBasicData,\n  'GET /api/profile/advanced': getProfileAdvancedData,\n  'POST /api/register': (req, res) => {\n    res.send({ status: 'ok' });\n  },\n  'GET /api/notices': getNotices,\n};\n\n// \u8c03\u7528 delay \u51fd\u6570\uff0c\u7edf\u4e00\u5904\u7406\nexport default delay(proxy, 1000);"]],["h2","\u751f\u6210 API \u6587\u6863"],["p","\u5728\u8ddf\u670d\u52a1\u7aef\u8054\u8c03\u5f00\u53d1\u7684\u65f6\u5019\uff0c\u5f80\u5f80\u9700\u8981\u7ea6\u5b9a\u63a5\u53e3\uff0c\u5305\u542b\u8def\u5f84\uff0c\u65b9\u6cd5\uff0c\u53c2\u6570\uff0c\u8fd4\u56de\u503c\u7b49\u4fe1\u606f\uff0c",["code","roadhog-api-doc"]," \u63d0\u4f9b\u901a\u8fc7 ",["code",".roadhog.mock.js"]," \u81ea\u52a8\u751f\u6210\u6587\u6863\u7684\u529f\u80fd\uff0c\u5b89\u88c5\u4f7f\u7528\u8be6\u89c1\uff1a",["a",{title:null,href:"https://github.com/nikogu/roadhog-api-doc"},"roadhog-api-doc"],"\u3002"],["p","\u800c\u76f8\u5173\u7684\u6587\u6863\u4fe1\u606f\uff0c\u540c\u6837\u9700\u8981\u6309\u7167 roadhog-api-doc \u63d0\u4f9b\u7684\u65b9\u5f0f\u5199\u5230 ",["code",".roadhog.mock.js"]," \u4e2d\u3002"],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> postRule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./mock/rule\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> format <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'roadhog-api-doc\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">\'GET /api/currentUser\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// \u63a5\u53e3\u63cf\u8ff0</span>\n    $desc<span class="token punctuation">:</span> <span class="token string">"\u83b7\u53d6\u5f53\u524d\u7528\u6237\u63a5\u53e3"</span><span class="token punctuation">,</span>\n    <span class="token comment" spellcheck="true">// \u63a5\u53e3\u53c2\u6570</span>\n    $params<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      pageSize<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        desc<span class="token punctuation">:</span> <span class="token string">\'\u5206\u9875\'</span><span class="token punctuation">,</span>\n        exp<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment" spellcheck="true">// \u63a5\u53e3\u8fd4\u56de</span>\n    $body<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'momo.zxy\'</span><span class="token punctuation">,</span>\n      avatar<span class="token punctuation">:</span> imgMap<span class="token punctuation">.</span>user<span class="token punctuation">,</span>\n      userid<span class="token punctuation">:</span> <span class="token string">\'00000001\'</span><span class="token punctuation">,</span>\n      notifyCount<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'POST /api/rule\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    $params<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      pageSize<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        desc<span class="token punctuation">:</span> <span class="token string">\'\u5206\u9875\'</span><span class="token punctuation">,</span>\n        exp<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    $body<span class="token punctuation">:</span> postRule<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// format \u51fd\u6570\u7528\u4e8e\u4fdd\u8bc1\u672c\u5730\u7684\u6a21\u62df\u6b63\u5e38\uff0c\u5982\u679c\u5199\u4e86\u6587\u6863\uff0c\u8fd9\u4e2a\u51fd\u6570\u8f6c\u6362\u662f\u5fc5\u8981\u7684</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">format</span><span class="token punctuation">(</span>proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { postRule } from './mock/rule';\nimport { format } from 'roadhog-api-doc';\n\nconst proxy = {\n  'GET /api/currentUser': {\n    // \u63a5\u53e3\u63cf\u8ff0\n    $desc: \"\u83b7\u53d6\u5f53\u524d\u7528\u6237\u63a5\u53e3\",\n    // \u63a5\u53e3\u53c2\u6570\n    $params: {\n      pageSize: {\n        desc: '\u5206\u9875',\n        exp: 2,\n      },\n    },\n    // \u63a5\u53e3\u8fd4\u56de\n    $body: {\n      name: 'momo.zxy',\n      avatar: imgMap.user,\n      userid: '00000001',\n      notifyCount: 12,\n    },\n  },\n  'POST /api/rule': {\n    $params: {\n      pageSize: {\n        desc: '\u5206\u9875',\n        exp: 2,\n      },\n    },\n    $body: postRule,\n  },\n};\n\n// format \u51fd\u6570\u7528\u4e8e\u4fdd\u8bc1\u672c\u5730\u7684\u6a21\u62df\u6b63\u5e38\uff0c\u5982\u679c\u5199\u4e86\u6587\u6863\uff0c\u8fd9\u4e2a\u51fd\u6570\u8f6c\u6362\u662f\u5fc5\u8981\u7684\nexport default format(proxy);"]],["p","\u751f\u6210\u7684\u7ed3\u679c\u5982\u4e0b\uff1a"],["p",["img",{width:"500",src:"https://gw.alipayobjects.com/zos/rmsportal/TKmBIxyMTBiMJZtAlBgg.png"}]],["h3","\u8054\u8c03"],["p","\u5f53\u672c\u5730\u5f00\u53d1\u5b8c\u6bd5\u4e4b\u540e\uff0c\u5982\u679c\u670d\u52a1\u5668\u7684\u63a5\u53e3\u6ee1\u8db3\u4e4b\u524d\u7684\u7ea6\u5b9a\uff0c\u90a3\u4e48\u4f60\u53ea\u9700\u8981\u4e0d\u5f00\u672c\u5730\u4ee3\u7406\u6216\u8005\u91cd\u5b9a\u5411\u4ee3\u7406\u5230\u76ee\u6807\u670d\u52a1\u5668\u5c31\u53ef\u4ee5\u8bbf\u95ee\u771f\u5b9e\u7684\u670d\u52a1\u7aef\u6570\u636e\uff0c\u975e\u5e38\u65b9\u4fbf\u3002"]],meta:{order:13,title:{"en-US":"Mock Data","zh-CN":"Mock \u548c\u8054\u8c03"},type:"\u8fdb\u9636",filename:"docs/mock-api.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f7f\u7528-roadhog-\u7684\u8bf7\u6c42\u4ee3\u7406\u529f\u80fd",title:"\u4f7f\u7528 roadhog \u7684\u8bf7\u6c42\u4ee3\u7406\u529f\u80fd"},"\u4f7f\u7528 roadhog \u7684\u8bf7\u6c42\u4ee3\u7406\u529f\u80fd"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5408\u7406\u7684\u62c6\u5206\u4f60\u7684-mock-\u6587\u4ef6",title:"\u5408\u7406\u7684\u62c6\u5206\u4f60\u7684 mock \u6587\u4ef6"},"\u5408\u7406\u7684\u62c6\u5206\u4f60\u7684 mock \u6587\u4ef6"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5982\u4f55\u6a21\u62df\u5ef6\u8fdf",title:"\u5982\u4f55\u6a21\u62df\u5ef6\u8fdf"},"\u5982\u4f55\u6a21\u62df\u5ef6\u8fdf"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u751f\u6210-API-\u6587\u6863",title:"\u751f\u6210 API \u6587\u6863"},"\u751f\u6210 API \u6587\u6863"]]]}}});