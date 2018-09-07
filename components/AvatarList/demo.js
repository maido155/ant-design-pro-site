webpackJsonp([13],{1752:function(a,n,t){a.exports={simple:t(2101)}},2101:function(a,n,t){a.exports={content:[["p","Simplest of usage."]],meta:{order:0,title:{"zh-CN":"\u57fa\u7840\u6837\u4f8b","en-US":"Basic Usage"},filename:"scaffold/src/components/AvatarList/demo/simple.md",id:"scaffold-src-components-AvatarList-demo-simple"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> AvatarList <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/AvatarList\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AvatarList</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AvatarList.Item</span> <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Jake<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AvatarList.Item</span> <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Andy<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AvatarList.Item</span> <span class="token attr-name">tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Niko<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AvatarList</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var a=t(1),n=(t(14),function(a){return a&&a.__esModule?a:{default:a}}(t(2102)));return a.createElement(n.default,{size:"mini"},a.createElement(n.default.Item,{tips:"Jake",src:"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"}),a.createElement(n.default.Item,{tips:"Andy",src:"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"}),a.createElement(n.default.Item,{tips:"Niko",src:"https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"}))}}},2102:function(a,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=Object.assign||function(a){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=t[s])}return a},e=l(t(1)),p=t(36),o=l(t(261)),c=l(t(2103));function l(a){return a&&a.__esModule?a:{default:a}}function r(a,n,t){return n in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}var u=function(a){var n=a.children,t=a.size,p=function(a,n){var t={};for(var s in a)n.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s]);return t}(a,["children","size"]),o=e.default.Children.map(n,function(a){return e.default.cloneElement(a,{size:t})});return e.default.createElement("div",s({},p,{className:c.default.avatarList}),e.default.createElement("ul",null," ",o," "))};u.Item=function(a){var n,t=a.src,s=a.size,l=a.tips,u=a.onClick,i=void 0===u?function(){}:u,m=(0,o.default)(c.default.avatarItem,(r(n={},c.default.avatarItemLarge,"large"===s),r(n,c.default.avatarItemSmall,"small"===s),r(n,c.default.avatarItemMini,"mini"===s),n));return e.default.createElement("li",{className:m,onClick:i},l?e.default.createElement(p.Tooltip,{title:l},e.default.createElement(p.Avatar,{src:t,size:s,style:{cursor:"pointer"}})):e.default.createElement(p.Avatar,{src:t,size:s}))},n.default=u},2103:function(a,n){a.exports={avatarList:"avatarList___2TPU6",avatarItem:"avatarItem___3WwV6",avatarItemLarge:"avatarItemLarge___34d4X",avatarItemSmall:"avatarItemSmall___26OZD",avatarItemMini:"avatarItemMini___3A1Y7"}}});