(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{498:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"性能分析器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能分析器"}},[t._v("#")]),t._v(" 性能分析器")]),t._v(" "),a("p",[t._v("Taichi 的分析器可以帮助你分析程序的运行时开销。 在 Taichi 中有两个分析系统："),a("code",[t._v("KernelProfiler")]),t._v(" 和 "),a("code",[t._v("ScopedProfiler")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("KernelProfiler")]),t._v(" 用于分析用户内核的性能。")]),t._v(" "),a("p",[t._v("而 "),a("code",[t._v("ScopedProfiler")]),t._v(" 被 Taichi 开发者用来分析编译器本身的性能。")]),t._v(" "),a("h2",{attrs:{id:"内核性能分析器-kernelprofiler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内核性能分析器-kernelprofiler"}},[t._v("#")]),t._v(" 内核性能分析器（KernelProfiler）")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("KernelProfiler")]),t._v("记录了 Taichi 内核在设备上的开销。 如要开启该分析器，请在 "),a("code",[t._v("ti.init")]),t._v(" 中设置 "),a("code",[t._v("kernel_profiler=True")]),t._v("。")]),t._v(" "),a("li",[t._v("通过调用 "),a("code",[t._v("ti.kernel_profiler_print()")]),t._v(" 以显示内核分析器的结果。 例如：")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" taichi "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ti\n\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cpu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kernel_profiler"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kernel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\n\n\ncompute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kernel_profiler_print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("输出将会是：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[ 22.73%] jit_evaluator_0_kernel_0_serial             min   0.001 ms   avg   0.001 ms   max   0.001 ms   total   0.000 s [      1x]\n[  0.00%] jit_evaluator_1_kernel_1_serial             min   0.000 ms   avg   0.000 ms   max   0.000 ms   total   0.000 s [      1x]\n[ 77.27%] compute_c4_0_kernel_2_serial                min   0.004 ms   avg   0.004 ms   max   0.004 ms   total   0.000 s [      1x]\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("目前，由于缺乏 "),a("code",[t._v("ti.sync()")]),t._v(" 的支持，"),a("code",[t._v("KernelProfiler")]),t._v(" 的结果在 OpenGL 后端上可能会不准确。")])]),t._v(" "),a("h2",{attrs:{id:"基于作用域的性能分析器-scopedprofiler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于作用域的性能分析器-scopedprofiler"}},[t._v("#")]),t._v(" 基于作用域的性能分析器（ScopedProfiler）")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("ScopedProfiler")]),t._v(" 能够有层次地度量"),a("strong",[t._v("宿主机上")]),t._v("执行任务所花费的时间。")]),t._v(" "),a("li",[t._v("这个分析器是自动开启的。 如要显示它的结果，请调用 "),a("code",[t._v("ti.print_profile_info()")]),t._v("。 例如：")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" taichi "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ti\n\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cpu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kernel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Setting var[0] ="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" var"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\ncompute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("print_profile_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("ti.print_profile_info()")]),t._v(" 会以有层次的格式打印分析结果。")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[a("code",[t._v("ScopedProfiler")]),t._v(" 是 Taichi 的一个核心 C++ 类。 它不会向 Python 用户公开。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);