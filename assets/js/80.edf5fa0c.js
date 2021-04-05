(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{499:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"开发者工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发者工具"}},[t._v("#")]),t._v(" 开发者工具")]),t._v(" "),a("p",[t._v("本节详细描述了 Taichi 开发者常用的工具。")]),t._v(" "),a("h2",{attrs:{id:"日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志"}},[t._v("#")]),t._v(" 日志")]),t._v(" "),a("p",[t._v("Taichi 使用 "),a("a",{attrs:{href:"https://github.com/gabime/spdlog",target:"_blank",rel:"noopener noreferrer"}},[t._v("spdlog"),a("OutboundLink")],1),t._v(" 作为其日志系统。 日志可以有从低到高的不同级别，它们是：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("级别")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("trace")])]),t._v(" "),a("tr",[a("td",[t._v("debug")])]),t._v(" "),a("tr",[a("td",[t._v("info")])]),t._v(" "),a("tr",[a("td",[t._v("warn")])]),t._v(" "),a("tr",[a("td",[t._v("error")])])])]),t._v(" "),a("p",[t._v("级别越高，则日志信息就越重要。")]),t._v(" "),a("p",[t._v("默认日志级别是 "),a("code",[t._v("info")]),t._v("。 你可以通过下面的方式覆盖默认的日志级别：")]),t._v(" "),a("ol",[a("li",[t._v("设置环境变量，例如 "),a("code",[t._v("export TI_LOG_LEVEL=warn")]),t._v("。")]),t._v(" "),a("li",[t._v("在 Python 内设置日志级别： "),a("code",[t._v("ti.set_logging_level(ti.WARN)")]),t._v("。")])]),t._v(" "),a("p",[t._v("在 "),a("strong",[t._v("Python")]),t._v("中，你可以使用 "),a("code",[t._v("ti.*")]),t._v(" 接口来写日志：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Python")]),t._v("\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("trace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("warn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("在 "),a("strong",[t._v("C++")]),t._v(" 中，你可以使用 "),a("code",[t._v("TI_*")]),t._v(" 接口写入日志：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// C++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TI_TRACE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TI_DEBUG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TI_INFO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TI_WARN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TI_ERROR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果一个级别为 "),a("code",[t._v("error")]),t._v(" 的信息被抛出，Taichi将会被立刻"),a("strong",[t._v("终止")]),t._v("并在 Python 中报出 "),a("code",[t._v("RuntimeError")]),t._v(" 错误。")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// C++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TI_ERROR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The pointer cannot be null!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 p == nullptr，则代码不会执行到此处")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_something")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("对熟悉 Linux 内核的开发者来说， "),a("code",[t._v("TI_ERROR")]),t._v(" 其实相当于 "),a("code",[t._v("panic")]),t._v("。")])]),t._v(" "),a("p",[t._v("你可以通过使用 "),a("code",[t._v("TI_ASSERT")]),t._v(" 来简化上述代码：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TI_ASSERT_INFO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The pointer cannot be null!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TI_ASSERT(p != nullptr);")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 p == nullptr，则代码不会执行到此处")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_something")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"基准测试和回归测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基准测试和回归测试"}},[t._v("#")]),t._v(" 基准测试和回归测试")]),t._v(" "),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("ti benchmark")]),t._v(" 以基准模式运行测试。 这将记录 "),a("code",[t._v("ti test")]),t._v(" 的性能，并将其保存到 "),a("code",[t._v("benchmarks/output")]),t._v(" 目录下。")]),t._v(" "),a("li",[t._v("运行 "),a("code",[t._v("ti regression")]),t._v(" 以显示与 "),a("code",[t._v("benchmarks/baseline")]),t._v(" 中先前结果的差异。 你还可以查看提交后的性能是提高还是降低了。 当你的工作与中间表示码优化相关时，这很有帮助。")]),t._v(" "),a("li",[t._v("运行 "),a("code",[t._v("ti baseline")]),t._v(" 以将基准结果保存到 "),a("code",[t._v("benchmarks/baseline")]),t._v(" 目录以供将来比较，这可以在与性能有关的 PR 上执行，然后再合并到 master 分支中。")])]),t._v(" "),a("p",[t._v("例如，这是启用常数折叠优化传递后 "),a("code",[t._v("ti regression")]),t._v(" 输出的一部分：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("linalg__________________polar_decomp______________________________\ncodegen_offloaded_tasks                       37 ->    39    +5.4%\ncodegen_statements                          3179 ->  3162    -0.5%\ncodegen_kernel_statements                   2819 ->  2788    -1.1%\ncodegen_evaluator_statements                   0 ->    14    +inf%\n\nlinalg__________________init_matrix_from_vectors__________________\ncodegen_offloaded_tasks                       37 ->    39    +5.4%\ncodegen_statements                          3180 ->  3163    -0.5%\ncodegen_kernel_statements                   2820 ->  2789    -1.1%\ncodegen_evaluator_statements                   0 ->    14    +inf%\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("目前，"),a("code",[t._v("ti benchmark")]),t._v(" 仅支持基准测试语句数，不包含时间基准测试。这是因为后者取决于硬件性能，因此如果基准来自另一台计算机则很难进行客观的比较。 我们将在某个时间点购买固定性能的机器作为时间基准服务器。 关于这个问题的详细讨论请参阅："),a("a",{attrs:{href:"https://github.com/taichi-dev/taichi/issues/948",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Issue #948"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("我们推荐的 Pull Request 的作者运行回归测试的工作流程是：")]),t._v(" "),a("ul",[a("li",[t._v("在 "),a("code",[t._v("master")]),t._v(" 分支中运行 "),a("code",[t._v("ti baseline && ti baseline")]),t._v(" 将当前 性能的结果保存为基线。")]),t._v(" "),a("li",[t._v("运行 "),a("code",[t._v("git checkout -b your-branch-name")]),t._v("（分支名称）。")]),t._v(" "),a("li",[t._v("尝试解决问题（第一阶段）。")]),t._v(" "),a("li",[t._v("运行 "),a("code",[t._v("ti baseline && ti retression")]),t._v(" 以获取结果。")]),t._v(" "),a("li",[t._v("（结果不理想）继续优化直至结果理想。")]),t._v(" "),a("li",[t._v("（结果理想）在合并之前，运行 "),a("code",[t._v("ti baseline")]),t._v(" 以将第一阶段结果保存为新基线。")]),t._v(" "),a("li",[t._v("继续进行第二，第三阶段，并遵循同样的工作流程。")])]),t._v(" "),a("h2",{attrs:{id:"程序崩溃时触发-gdb-仅限于-linux-操作系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序崩溃时触发-gdb-仅限于-linux-操作系统"}},[t._v("#")]),t._v(" 程序崩溃时触发 "),a("code",[t._v("gdb")]),t._v("（仅限于 Linux 操作系统）")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Python")]),t._v("\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_gdb_trigger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// C++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CoreState")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_trigger_gdb_when_crash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Shell")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TI_GDB_TRIGGER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("gdb")]),t._v(" 来"),a("strong",[t._v("快速定位段错误 (segmentation fault) 和断言错误 (assertion failure)")]),t._v("：在Taichi 崩溃时，"),a("code",[t._v("gdb")]),t._v(" 会被触发并附着到当前的线程上。 您可能需要输入和 "),a("code",[t._v("sudo")]),t._v(" 超级用户权限相关的密码来允许 gdb 附着到当前的线程上。 在输入 "),a("code",[t._v("gdb")]),t._v(" 之后，你可以使用 "),a("code",[t._v("bt")]),t._v(" （"),a("code",[t._v("backtrace")]),t._v("）指令检查堆的回溯，从而定位产生错误的代码的具体行数。")])]),t._v(" "),a("h2",{attrs:{id:"代码测试覆盖率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码测试覆盖率"}},[t._v("#")]),t._v(" 代码测试覆盖率")]),t._v(" "),a("p",[t._v("为了确保我们的测试用例涵盖所有情况，我们需要"),a("strong",[t._v("覆盖率")]),t._v("报告。 也即，检测代码行在测试中执行了多少百分比。")]),t._v(" "),a("ul",[a("li",[t._v("一般来说，覆盖率越高，我们的测试就越强健。")]),t._v(" "),a("li",[t._v("当创建 PR 时，我们想要"),a("strong",[t._v("确保它与相应的测试用例")]),t._v("一起完成。 否则代码测试覆盖率将降低。")]),t._v(" "),a("li",[t._v("你可以在 "),a("a",{attrs:{href:"https://codecov.io/gh/taichi-dev/taichi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Codecov"),a("OutboundLink")],1),t._v(" 上查看当前代码覆盖状态。")]),t._v(" "),a("li",[t._v("目前，Taichi 代码测试覆盖率报告仅用于 Python 代码，暂时不涵盖 C++ 。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ti "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -C       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行测试并将结果保存至 .coverage")]),t._v("\ncoverage report  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成一份覆盖报告并在终端输出")]),t._v("\ncoverage html    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成一份覆盖报告并输出至 htmlcov/index.html")]),t._v("\n")])])]),a("h2",{attrs:{id:"接口系统-遗留"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口系统-遗留"}},[t._v("#")]),t._v(" 接口系统（遗留）")]),t._v(" "),a("p",[t._v("打印所有接口和单位")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("print_all_units"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"序列化-遗留"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序列化-遗留"}},[t._v("#")]),t._v(" 序列化（遗留）")]),t._v(" "),a("p",[t._v("Taichi 的序列化模块可以允许你将对象序列化/反序列化成二进制字符串。")]),t._v(" "),a("p",[t._v("你可以使用 "),a("code",[t._v("TI_IO")]),t._v(" 宏来显式定义 Taichi 中必要的字段。")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TI_IO_DEF")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Particle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Vector3f position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" velocity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    real mass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    string name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TI_IO_DEF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" velocity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TI_IO_DECL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Particle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Vector3f position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" velocity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    real mass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" has_name\n    string name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TI_IO_DECL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TI_IO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TI_IO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("velocity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TI_IO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TI_IO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("has_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// More flexibility:")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("has_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TI_IO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TI_IO_DEF_VIRT();")]),t._v("\n")])])]),a("h2",{attrs:{id:"进展通知-遗留"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进展通知-遗留"}},[t._v("#")]),t._v(" 进展通知（遗留）")]),t._v(" "),a("p",[t._v("当任务完成或崩溃时，Taichi 消息传递程序可以将邮件发送到 "),a("code",[t._v("$TI_MONITOR_EMAIL")]),t._v(" 。 通过下面的方式来启用：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" taichi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tools "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" messenger\nmessenger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);