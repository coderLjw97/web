(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{651:function(t,e,r){"use strict";r.r(e);var _=r(1),v=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1-tcp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-tcp"}},[t._v("#")]),t._v(" 1. TCP")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("TCP 是一个面向连接的、可靠的、基于字节流的传输层协议。")])]),t._v(" "),e("li",[e("p",[t._v("三次握手：握手需要三次是为了确认双方的发送能力和接收能力。")]),t._v(" "),e("img",{staticClass:"lazy",attrs:{src:t.$withBase("/images/Network/TCP 三次握手.png"),loading:"lazy"}})]),t._v(" "),e("li",[e("p",[t._v("四次挥手：挥手四次是须等待服务端所有数据发送完成，确认双方都已做好断开连接的准备。")]),t._v(" "),e("img",{staticClass:"lazy",attrs:{src:t.$withBase("/images/Network/TCP 四次挥手.png"),loading:"lazy"}})]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://juejin.cn/post/6844904070889603085",target:"_blank",rel:"noopener noreferrer"}},[t._v("(建议收藏)TCP 协议灵魂之问，巩固你的网路底层基础 - 神三元"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://www.bilibili.com/video/BV1V54y1y7c4",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 协议详解（TIPS：在评论处） - 巨靠谱的小宇同学"),e("OutboundLink")],1)])])]),t._v(" "),e("h2",{attrs:{id:"_2-http、https、http-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-http、https、http-2"}},[t._v("#")]),t._v(" 2. HTTP、HTTPS、HTTP/2")]),t._v(" "),e("ul",[e("li",[t._v("常见状态码。")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Code")]),t._v(" "),e("th",[t._v("常见原因")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("200")]),t._v(" "),e("td",[t._v("请求成功")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("204")]),t._v(" "),e("td",[t._v("无实体内容（Body）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("206")]),t._v(" "),e("td",[t._v("分块下载、断点续传（必须包含 Content-Range）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("301")]),t._v(" "),e("td",[t._v("永久重定向（浏览器默认会做缓存优化）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("302")]),t._v(" "),e("td",[t._v("临时重定向（只有在 Cache-Control 或 Expires 中进行了指定的情况下，这个响应才是可缓存的）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("304")]),t._v(" "),e("td",[t._v("命中协商缓存")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("307")]),t._v(" "),e("td",[t._v("302 升级版（可以确保请求方法和消息主体不会发生变化）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("308")]),t._v(" "),e("td",[t._v("301 升级版（可以确保请求方法和消息主体不会发生变化）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("400")]),t._v(" "),e("td",[t._v("可能是请求参数有误")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("401")]),t._v(" "),e("td",[t._v("身份验证失败（无权限）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("403")]),t._v(" "),e("td",[t._v("禁止访问")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("404")]),t._v(" "),e("td",[t._v("资源未找到")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("405")]),t._v(" "),e("td",[t._v("请求方法错误")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("500")]),t._v(" "),e("td",[t._v("服务器错误")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("502")]),t._v(" "),e("td",[t._v("网关错误")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("503")]),t._v(" "),e("td",[t._v("服务器繁忙")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("504")]),t._v(" "),e("td",[t._v("网关超时")])])])]),t._v(" "),e("ul",[e("li",[t._v("HTTP")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("特点")]),t._v(" "),e("th",[t._v("概括")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("无状态")]),t._v(" "),e("td",[t._v("每一次请求都是独立的，请求结束不会记录连接的任何信息，同时也减少了网络开销 。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("明文传输")]),t._v(" "),e("td",[t._v("报文（主要指头部）使用文本形式的数据，利用路由器等中转设备，可从中获取数据、串改数据。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("串行连接")]),t._v(" "),e("td",[t._v("HTTP 有无连接的特性，即每次连接只能处理一个请求，收到响应后立即断开连接。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("持久连接")]),t._v(" "),e("td",[t._v("同一域名下的 HTTP 请求，只要两端都没有提出断开连接，则持久保持 TCP 连接状态，其他请求可以复用这个连接通道（HTTP/1.1 默认是持久连接）。持久连接采用阻塞模式：下次请求必须等到上次响应返回后才能发起，也就是著名的队头阻塞。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("管道化持久连接")]),t._v(" "),e("td",[t._v("管道化则可以不用等待响应返回而发送下个请求并按顺序返回响应，目前没有现代浏览器默认启用这个特性。依然存在队头阻塞问题。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("并发连接")]),t._v(" "),e("td",[t._v("对于一个域名允许分配多个长连接，那么相当于增加了任务队列，不至于一个队伍的任务阻塞其它所有任务。比较常用的并发连接数已经增加到 6 条，如果尝试大于这个数字，就有触发服务器 DoS 保护的风险。可以使用域名分片技术，建立更多的连接。HTTP/2 拥有多路复用特点，不需要依赖 TCP 连接实现多流并行了，在 HTTP/2 中同域名下的通信都在单个连接上完成。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("头部压缩（HTTP/2）")]),t._v(" "),e("td",[t._v("使用 HPACK 算法对请求头进行压缩，在服务器与客户端建立头部字段哈希表，以及对整数和字符串使用哈夫曼编码（废除了起始行的概念，转换为头部字段）。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("多路复用（HTTP/2）")]),t._v(" "),e("td",[t._v("HTTP/2 将报文换成二进制格式，Headers 帧存放头部字段，Data 帧存放请求体数据。分帧后就不是一个个完整的 HTTP 请求报文了，而是一堆乱序的二进制帧，二进制帧不存在先后关系，也就不存在队头阻塞的问题了。这种二进制帧的双向传输的序列，也叫做流（Stream）。多路复用就是在一个 TCP 连接中可以存在多条流，即可以发送多个请求，服务端通过帧中的 Stream ID 重新排序还原请求。")])])])]),t._v(" "),e("ul",[e("li",[t._v("HTTPS 特点：密文传输、报文完整性保护、第三方机构身份认证，同时也增加了网络开销。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("主流的浏览器都公开只支持加密的 HTTP/2")]),t._v(" "),e("img",{staticClass:"lazy",attrs:{src:t.$withBase("/images/Network/HTTP.png"),loading:"lazy"}})]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://juejin.cn/post/6844904100035821575",target:"_blank",rel:"noopener noreferrer"}},[t._v("（建议精读）HTTP 灵魂之问，巩固你的 HTTP 知识体系 - 神三元"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 响应代码 - MDN"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_1.x",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP/1.x 的连接管理 - MDN"),e("OutboundLink")],1)])])]),t._v(" "),e("h2",{attrs:{id:"_3-cors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-cors"}},[t._v("#")]),t._v(" 3. CORS")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("浏览器向服务器发送请求，会自动加上 origin 请求头，如果响应头中 Access-Control-Allow-Origin 不为 * 或不为 origin 字段指明的域名，浏览器就会拦截响应数据，报出跨域错误。")])]),t._v(" "),e("li",[e("p",[t._v("CORS 是跨域 AJAX 请求的根本解决方法，实现 CORS 通信的关键是服务器，只要服务器实现了 CORS 接口，就可以跨域通信。")])]),t._v(" "),e("li",[e("p",[t._v("CORS 请求分为两类：简单请求和非简单请求。")]),t._v(" "),e("blockquote",[e("ol",[e("li",[t._v("简单请求：当请求是 GET、HEAD、POST 方法并且没有任何自定义 Header 字段时，一般来说就是个简单请求（"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#%E7%AE%80%E5%8D%95%E8%AF%B7%E6%B1%82",target:"_blank",rel:"noopener noreferrer"}},[t._v("简单请求 - MDN"),e("OutboundLink")],1),t._v("）。")]),t._v(" "),e("li",[t._v("非简单请求（需预检请求）：除上述简单请求外均为非简单请求。须先使用 OPTIONS 方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。预检请求可以避免跨域请求对服务器的用户数据产生未预期的影响。")])])])]),t._v(" "),e("li",[e("p",[t._v("跨域请求携带 Cookie 条件：")]),t._v(" "),e("blockquote",[e("ol",[e("li",[t._v("xhr.withCredentials 为 true 或 fetch 配置 credentials 为 include")]),t._v(" "),e("li",[t._v("网站开启 https 并将 Cookie 的 Secure 属性设置为 true")]),t._v(" "),e("li",[t._v("Cookie 的 SameSite 属性设置为 None")]),t._v(" "),e("li",[t._v("响应头 Access-Control-Allow-Origin 设置为具体的 origin，不能设置为 *")]),t._v(" "),e("li",[t._v("响应头 Access-Control-Allow-Credentials 设置为 true")])])])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨源资源共享（CORS） - MDN"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://juejin.cn/post/6856556746706518024",target:"_blank",rel:"noopener noreferrer"}},[t._v("15 张精美动图全面讲解 CORS - 卤蛋实验室"),e("OutboundLink")],1)])])]),t._v(" "),e("h2",{attrs:{id:"_4-jsonp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-jsonp"}},[t._v("#")]),t._v(" 4. JSONP")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("JSONP 利用了 script 标签不会进行同源检测的特点。")])]),t._v(" "),e("li",[e("p",[t._v("前端定义一个回调函数，形参为要接收的数据，将回调函数名称通过 URL 查询参数的 callback 字段（前后端业内默认约定，也可约定其他字段）传递到后端。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("https://www.coderljw.ga/?callback=foo")]),t._v("（前端回调函数名称为 "),e("code",[t._v("foo")]),t._v("）")])])]),t._v(" "),e("li",[e("p",[t._v("后端接收到 callback 字段的值后，将数据通过实参传入函数，返回前端定义的回调函数执行文本。浏览器解析到 JSONP 的 script 标签，就会执行这个回调函数，从而获取到数据。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("send(`foo(${JSON.stringify(Matrix)})`)")]),t._v("（后端返回函数 "),e("code",[t._v("foo(Matrix)")]),t._v(" 执行脚本，script 标签解析执行后，前端获得 "),e("code",[t._v("Matrix")]),t._v("）")])])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("JSONP 的 script 标签要在用户定义回调函数的 script 标签下方 --\x3e 默认的 script 标签依次加载")])]),t._v(" "),e("h2",{attrs:{id:"_5-cookie、session、token、jwt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-cookie、session、token、jwt"}},[t._v("#")]),t._v(" 5. Cookie、Session、Token、JWT")]),t._v(" "),e("ul",[e("li",[t._v("HTTP 是无状态的，Cookie、Session、Token、JWT（JSON Web Token）可以维持前后端会话状态。")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("方式")]),t._v(" "),e("th",[t._v("特点")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Cookie")]),t._v(" "),e("td",[t._v("1. 存储在客户端（限 4k），向服务器发送请求时会自动携带"),e("br"),t._v("2. 限 Web 项目使用、默认不可跨域、小心 XSS/CSRF 攻击"),e("br"),t._v("3. 可通过设置 withCredential/credentials 跨域请求携带 Cookie"),e("br"),t._v("4. 设置 HttpOnly/SameSite 可防止 XSS/CSRF 攻击")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Session")]),t._v(" "),e("td",[t._v("1. 基于 Cookie 实现，Session 存储在服务器端，SessionId 会被存储到客户端的 Cookie 中"),e("br"),t._v("2. 须查询数据库、占用服务器资源、要考虑分布式问题")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Token")]),t._v(" "),e("td",[t._v("1. 简单组成：uid.time.sign（ID.失效时间.签名）"),e("br"),t._v("2. 服务器端无状态化，支持 Web、APP 等项目，安全性较高"),e("br"),t._v("3. 须查询数据库")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("JWT")]),t._v(" "),e("td",[t._v("1. 一种基于 Token 的开放标准"),e("br"),t._v("2. 组成：Header.Payload.Signature（头部.负载.签名）"),e("br"),t._v("3. 将用户信息存储于 Payload，不必查询数据库")])])])]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://juejin.cn/post/6844904034181070861",target:"_blank",rel:"noopener noreferrer"}},[t._v("傻傻分不清之 Cookie、Session、Token、JWT - 秋天不落叶"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://www.zhihu.com/question/301253397/answer/547887208",target:"_blank",rel:"noopener noreferrer"}},[t._v("记录用户登录状态 - Meck"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP Cookie - MDN"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/withCredentials",target:"_blank",rel:"noopener noreferrer"}},[t._v("XMLHttpRequest.withCredentials - MDN"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cookie 的 SameSite 属性 - 阮一峰"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Web Token 入门教程 - 阮一峰"),e("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=v.exports}}]);