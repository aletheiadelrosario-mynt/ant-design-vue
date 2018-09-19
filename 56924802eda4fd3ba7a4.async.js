webpackJsonp([48],{1710:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(2507),n=s(i),r=a(2510),l=s(r),v=a(2513),o=s(v),d=a(2516),c=s(d),_=a(2519),p=s(_),u={cn:"# 分割线\n        区隔内容的分割线。\n        ## 何时使用\n        - 对不同章节的文本段落进行分割。\n        - 对行内文字/链接进行分割，例如表格的操作列。\n\n        ## 代码演示",us:"# Divider\n      A divider line separates different content.\n      ## When To Use\n      - Divide sections of article.\n      - Divide inline text and links such as the operation column of table.\n      ## Examples \n      "};e.default={category:"Components",type:"Other",title:"Divider",subtitle:"分割线",render:function(){var t=arguments[0];return t("div",[t("md",{attrs:{cn:u.cn,us:u.us}}),t(l.default),t(n.default),t(o.default),t("api",[t(c.default,{slot:"cn"}),t(p.default)])])}}},2507:function(t,e,a){t.exports=a(2508)},2508:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2509),i=a(58),n=i(null,s.a,!1,null,null,null);e.default=n.exports},2509:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>\n    <a-divider/>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>\n    <a-divider>With Text</a-divider>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>\n    <a-divider dashed=""/>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>\n  </div>\n',script:null,style:null,us:"\n#### Horizontal\nDivider default type is `horizontal`. Support inner text inside Divider.\n",cn:"\n#### 水平分割线\n默认为水平分割线，可在中间加入文字。\n",sourceCode:"<template>\n  <div>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>\n    <a-divider />\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>\n    <a-divider>With Text</a-divider>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>\n    <a-divider dashed />\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>\n  </div>\n</template>\n"}}},[a("template",{slot:"component"},[a("div",[a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.")]),t._v(" "),a("a-divider"),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.")]),t._v(" "),a("a-divider",[t._v("With Text")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.")]),t._v(" "),a("a-divider",{attrs:{dashed:""}}),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.")])],1)]),t._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"水平分割线"}},[t._v("水平分割线 "),a("a",{staticClass:"anchor",attrs:{href:"#水平分割线","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("默认为水平分割线，可在中间加入文字。")])]),t._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Horizontal"}},[t._v("Horizontal "),a("a",{staticClass:"anchor",attrs:{href:"#Horizontal","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("Divider default type is "),a("code",[t._v("horizontal")]),t._v(". Support inner text inside Divider.")])]),t._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-divider")]),t._v(" />")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-divider")]),t._v(">")]),t._v("With Text"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("a-divider")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-divider")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("dashed")]),t._v(" />")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])])],2)]],2)},i=[],n={render:s,staticRenderFns:i};e.a=n},2510:function(t,e,a){t.exports=a(2511)},2511:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2512),i=a(58),n=i(null,s.a,!1,null,null,null);e.default=n.exports},2512:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    Text\n    <a-divider type="vertical"/>\n    <a href="#">Link</a>\n    <a-divider type="vertical"/>\n    <a href="#">Link</a>\n  </div>\n',script:null,style:null,us:'\n#### Vertical\nUse `type="vertical"` make it vertical.\n',cn:'\n#### 垂直分割线\n使用 `type="vertical"` 设置为行内的垂直分割线。\n',sourceCode:'<template>\n  <div>\n    Text\n    <a-divider type="vertical" />\n    <a href="#">Link</a>\n    <a-divider type="vertical" />\n    <a href="#">Link</a>\n  </div>\n</template>\n'}}},[a("template",{slot:"component"},[a("div",[t._v("\n    Text\n    "),a("a-divider",{attrs:{type:"vertical"}}),t._v(" "),a("a",{attrs:{href:"#"}},[t._v("Link")]),t._v(" "),a("a-divider",{attrs:{type:"vertical"}}),t._v(" "),a("a",{attrs:{href:"#"}},[t._v("Link")])],1)]),t._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"垂直分割线"}},[t._v("垂直分割线 "),a("a",{staticClass:"anchor",attrs:{href:"#垂直分割线","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v('type="vertical"')]),t._v(" 设置为行内的垂直分割线。")])]),t._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Vertical"}},[t._v("Vertical "),a("a",{staticClass:"anchor",attrs:{href:"#Vertical","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("Use "),a("code",[t._v('type="vertical"')]),t._v(" make it vertical.")])]),t._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    Text\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-divider")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"vertical"')]),t._v(" />")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("href")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"#"')]),t._v(">")]),t._v("Link"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("a")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-divider")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"vertical"')]),t._v(" />")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("href")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"#"')]),t._v(">")]),t._v("Link"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("a")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])])],2)]],2)},i=[],n={render:s,staticRenderFns:i};e.a=n},2513:function(t,e,a){t.exports=a(2514)},2514:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2515),i=a(58),n=i(null,s.a,!1,null,null,null);e.default=n.exports},2515:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-divider orientation="left">Left Text</a-divider>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>\n    <a-divider orientation="right">Right Text</a-divider>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>\n  </div>\n',script:null,style:null,us:"\n#### Orientation of title\nSet orientation of divider to left or right.\n",cn:"\n#### 标题位置\n修改分割线标题的位置。\n",sourceCode:'<template>\n  <div>\n    <a-divider orientation="left">Left Text</a-divider>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>\n    <a-divider orientation="right">Right Text</a-divider>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>\n  </div>\n</template>\n'}}},[a("template",{slot:"component"},[a("div",[a("a-divider",{attrs:{orientation:"left"}},[t._v("Left Text")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.")]),t._v(" "),a("a-divider",{attrs:{orientation:"right"}},[t._v("Right Text")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.")])],1)]),t._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"标题位置"}},[t._v("标题位置 "),a("a",{staticClass:"anchor",attrs:{href:"#标题位置","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("修改分割线标题的位置。")])]),t._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Orientation-of-title"}},[t._v("Orientation of title "),a("a",{staticClass:"anchor",attrs:{href:"#Orientation-of-title","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("Set orientation of divider to left or right.")])]),t._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-divider")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("orientation")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"left"')]),t._v(">")]),t._v("Left Text"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("a-divider")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("a-divider")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("orientation")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"right"')]),t._v(">")]),t._v("Right Text"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("a-divider")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("p")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])])],2)]],2)},i=[],n={render:s,staticRenderFns:i};e.a=n},2516:function(t,e,a){t.exports=a(2517)},2517:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2518),i=a(58),n=i(null,s.a,!1,null,null,null);e.default=n.exports},2518:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{attrs:{id:"API"}},[t._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("dashed")]),t._v(" "),a("td",[t._v("是否虚线")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("orientation")]),t._v(" "),a("td",[t._v("分割线标题的位置")]),t._v(" "),a("td",[t._v("enum: "),a("code",{pre:!0},[t._v("left")]),t._v(" "),a("code",{pre:!0},[t._v("right")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("center")])])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("水平还是垂直类型")]),t._v(" "),a("td",[t._v("enum: "),a("code",{pre:!0},[t._v("horizontal")]),t._v(" "),a("code",{pre:!0},[t._v("vertical")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("horizontal")])])])])])])}],n={render:s,staticRenderFns:i};e.a=n},2519:function(t,e,a){t.exports=a(2520)},2520:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2521),i=a(58),n=i(null,s.a,!1,null,null,null);e.default=n.exports},2521:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{attrs:{id:"API"}},[t._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("h3",{attrs:{id:"Divider"}},[t._v("Divider "),a("a",{staticClass:"anchor",attrs:{href:"#Divider","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("dashed")]),t._v(" "),a("td",[t._v("whether line is dashed")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("orientation")]),t._v(" "),a("td",[t._v("position of title inside divider")]),t._v(" "),a("td",[t._v("enum: "),a("code",{pre:!0},[t._v("left")]),t._v(" "),a("code",{pre:!0},[t._v("right")]),t._v(" "),a("code",{pre:!0},[t._v("center")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("center")])])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("direction type of divider")]),t._v(" "),a("td",[t._v("enum: "),a("code",{pre:!0},[t._v("horizontal")]),t._v(" "),a("code",{pre:!0},[t._v("vertical")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("horizontal")])])])])])])}],n={render:s,staticRenderFns:i};e.a=n},619:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1710),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);var r=a(58),l=r(i.a,null,!1,null,null,null);e.default=l.exports}});