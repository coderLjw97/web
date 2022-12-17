(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{612:function(_,v,l){"use strict";l.r(v);var i=l(1),t=Object(i.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"_1-算法简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-算法简介"}},[_._v("#")]),_._v(" 1. 算法简介")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("大 O 表示法是一种特殊的表示法，指出了算法的速度有多快。")])]),_._v(" "),v("li",[v("p",[_._v("大 O 表示法指的并非以秒为单位的速度。大 O 表示法让你能够比较操作数，它指出了算法运行时间的增速。")])]),_._v(" "),v("li",[v("p",[_._v("一些常见的大 O 运行时间。")]),_._v(" "),v("ol",[v("li",[_._v("O(log n)，也叫对数时间，这样的算法包括二分查找。")]),_._v(" "),v("li",[_._v("O(n)，也叫线性时间，这样的算法包括简单查找。")]),_._v(" "),v("li",[_._v("O(n * log n)，这样的算法包括第 4 章将介绍的快速排序 —— 一种速度较快的排序算法。")]),_._v(" "),v("li",[_._v("O(n 2 )，这样的算法包括第 2 章将介绍的选择排序 —— 一种速度较慢的排序算法。")]),_._v(" "),v("li",[_._v("O(n!)，这样的算法包括接下来将介绍的旅行商问题的解决方案 —— 一种非常慢的算法。")])])]),_._v(" "),v("li",[v("p",[_._v("小结：")]),_._v(" "),v("ol",[v("li",[_._v("二分查找的速度比简单查找快得多。")]),_._v(" "),v("li",[_._v("O(log n)比 O(n)快。需要搜索的元素越多，前者比后者就快得越多。")]),_._v(" "),v("li",[_._v("算法运行时间并不以秒为单位。")]),_._v(" "),v("li",[_._v("算法运行时间是从其增速的角度度量的。")]),_._v(" "),v("li",[_._v("算法运行时间用大 O 表示法表示。")])])])]),_._v(" "),v("h2",{attrs:{id:"_2-选择排序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-选择排序"}},[_._v("#")]),_._v(" 2. 选择排序")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("小结：")]),_._v(" "),v("ol",[v("li",[_._v("数组的元素都在一起。")]),_._v(" "),v("li",[_._v("链表的元素是分开的，其中每个元素都存储了下一个元素的地址。")]),_._v(" "),v("li",[_._v("数组的读取速度很快。")]),_._v(" "),v("li",[_._v("链表的插入和删除速度很快。")])])])]),_._v(" "),v("h2",{attrs:{id:"_3-快速排序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-快速排序"}},[_._v("#")]),_._v(" 3. 快速排序")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("小结：")]),_._v(" "),v("ol",[v("li",[_._v("D&C 将问题逐步分解。使用 D&C 处理列表时，基线条件很可能是空数组或只包含一个元素的数组。")]),_._v(" "),v("li",[_._v("实现快速排序时，请随机地选择用作基准值的元素。快速排序的平均运行时间为 O(n log n)。")]),_._v(" "),v("li",[_._v("大 O 表示法中的常量有时候事关重大，这就是快速排序比合并排序快的原因所在。")])])])]),_._v(" "),v("h2",{attrs:{id:"_4-散列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-散列表"}},[_._v("#")]),_._v(" 4. 散列表")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("小结：")]),_._v(" "),v("ol",[v("li",[_._v("冲突很糟糕，你应使用可以最大限度减少冲突的散列函数。")]),_._v(" "),v("li",[_._v("散列表的查找、插入和删除速度都非常快。")]),_._v(" "),v("li",[_._v("散列表适合用于模拟映射关系。")]),_._v(" "),v("li",[_._v("一旦填装因子超过 0.7，就该调整散列表的长度。")]),_._v(" "),v("li",[_._v("散列表可用于缓存数据（例如，在 Web 服务器上）。")]),_._v(" "),v("li",[_._v("散列表非常适合用于防止重复。")])])])]),_._v(" "),v("h2",{attrs:{id:"_5-广度优先搜索"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-广度优先搜索"}},[_._v("#")]),_._v(" 5. 广度优先搜索")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("广度优先搜索让你能够找出两样东西之间的最短距离，不过最短距离的含义有很多！")])]),_._v(" "),v("li",[v("p",[_._v("小结：")]),_._v(" "),v("ol",[v("li",[_._v("广度优先搜索指出是否有从 A 到 B 的路径。")]),_._v(" "),v("li",[_._v("如果有，广度优先搜索将找出最短路径。")]),_._v(" "),v("li",[_._v("面临类似于寻找最短路径的问题时，可尝试使用图来建立模型，再使用广度优先搜索来解决问题。")]),_._v(" "),v("li",[_._v("你需要按加入顺序检查搜索列表中的人，否则找到的就不是最短路径，因此搜索列表必须是队列。")]),_._v(" "),v("li",[_._v("对于检查过的人，务必不要再去检查，否则可能导致无限循环。")])])])]),_._v(" "),v("h2",{attrs:{id:"_6-狄克斯特拉算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-狄克斯特拉算法"}},[_._v("#")]),_._v(" 6. 狄克斯特拉算法")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("狄克斯特拉算法背后的关键理念：找出图中最便宜的节点，并确保没有到该节点的更便宜的路径！")])]),_._v(" "),v("li",[v("p",[_._v("不能将狄克斯特拉算法用于包含负权边的图。在包含负权边的图中，要找出最短路径，可使用另一种算法 —— 贝尔曼 - 福德算法。")])]),_._v(" "),v("li",[v("p",[_._v("小结：")]),_._v(" "),v("ol",[v("li",[_._v("广度优先搜索用于在非加权图中查找最短路径。")]),_._v(" "),v("li",[_._v("狄克斯特拉算法用于在加权图中查找最短路径。")]),_._v(" "),v("li",[_._v("仅当权重为正时狄克斯特拉算法才管用。")]),_._v(" "),v("li",[_._v("如果图中包含负权边，请使用贝尔曼 - 福德算法。")])])])]),_._v(" "),v("h2",{attrs:{id:"_7-贪婪算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-贪婪算法"}},[_._v("#")]),_._v(" 7. 贪婪算法")]),_._v(" "),v("p",[_._v("贪婪算法：每步都采取最优的做法。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("小结：")]),_._v(" "),v("ol",[v("li",[_._v("贪婪算法寻找局部最优解，企图以这种方式获得全局最优解。")]),_._v(" "),v("li",[_._v("对于 NP 完全问题，还没有找到快速解决方案。")]),_._v(" "),v("li",[_._v("面临 NP 完全问题时，最佳的做法是使用近似算法。")]),_._v(" "),v("li",[_._v("贪婪算法易于实现、运行速度快，是不错的近似算法。")])])])]),_._v(" "),v("h2",{attrs:{id:"_8-动态规划"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-动态规划"}},[_._v("#")]),_._v(" 8. 动态规划")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("动态规划先解决子问题，再逐步解决大问题。")])]),_._v(" "),v("li",[v("p",[_._v("小结：")]),_._v(" "),v("ol",[v("li",[_._v("需要在给定约束条件下优化某种指标时，动态规划很有用。")]),_._v(" "),v("li",[_._v("问题可分解为离散子问题时，可使用动态规划来解决。")]),_._v(" "),v("li",[_._v("每种动态规划解决方案都涉及网格。")]),_._v(" "),v("li",[_._v("单元格中的值通常就是你要优化的值。")]),_._v(" "),v("li",[_._v("每个单元格都是一个子问题，因此你需要考虑如何将问题分解为子问题。")]),_._v(" "),v("li",[_._v("没有放之四海皆准的计算动态规划解决方案的公式。")])])])])])}),[],!1,null,null,null);v.default=t.exports}}]);