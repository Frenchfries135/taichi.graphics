(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{522:function(t,s,a){"use strict";a.r(s);var n=a(20),_=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"类型系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型系统"}},[t._v("#")]),t._v(" 类型系统")]),t._v(" "),a("p",[t._v("Taichi 支持常见的数值数据类型。 每种类型都由：一个字符指明它的_类别_和一个数字指明它的_精度位数_，例如 "),a("code",[t._v("i32")]),t._v(" 和 "),a("code",[t._v("f64")]),t._v("。")]),t._v(" "),a("p",[t._v("数据的_类别_可以是以下其中之一：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("i")]),t._v(" 用于有符号整数，例如 233，-666")]),t._v(" "),a("li",[a("code",[t._v("u")]),t._v(" 用于无符号整数，例如 233，666")]),t._v(" "),a("li",[a("code",[t._v("f")]),t._v(" 用于浮点数，例如 2.33, 1e-4")])]),t._v(" "),a("p",[t._v("数据的_精度位数_可以是以下其中之一：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("8")])]),t._v(" "),a("li",[a("code",[t._v("16")])]),t._v(" "),a("li",[a("code",[t._v("32")])]),t._v(" "),a("li",[a("code",[t._v("64")])])]),t._v(" "),a("p",[t._v("它表示存储数据时使用了多少"),a("strong",[t._v("位")]),t._v("。 位数值越大，则精度越高。")]),t._v(" "),a("p",[t._v("例如，下面是两种最常用的数据类型：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("i32")]),t._v(" 表示一个 32 位有符号整数。")]),t._v(" "),a("li",[a("code",[t._v("f32")]),t._v(" 表示一个 32 位浮点数。")])]),t._v(" "),a("h2",{attrs:{id:"支持的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持的类型"}},[t._v("#")]),t._v(" 支持的类型")]),t._v(" "),a("p",[t._v("目前，Taichi 支持的基本类型有")]),t._v(" "),a("ul",[a("li",[t._v("int8 "),a("code",[t._v("ti.i8")])]),t._v(" "),a("li",[t._v("int16 "),a("code",[t._v("ti.i16")])]),t._v(" "),a("li",[t._v("int32 "),a("code",[t._v("ti.i32")])]),t._v(" "),a("li",[t._v("int64 "),a("code",[t._v("ti.i64")])]),t._v(" "),a("li",[t._v("uint8 "),a("code",[t._v("ti.u8")])]),t._v(" "),a("li",[t._v("uint16 "),a("code",[t._v("ti.u16")])]),t._v(" "),a("li",[t._v("uint32 "),a("code",[t._v("ti.u32")])]),t._v(" "),a("li",[t._v("uint64 "),a("code",[t._v("ti.u64")])]),t._v(" "),a("li",[t._v("float32 "),a("code",[t._v("ti.f32")])]),t._v(" "),a("li",[t._v("float64 "),a("code",[t._v("ti.f64")])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("每种后端支持的类型分别有：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("CPU/CUDA")]),t._v(" "),a("th",[t._v("OpenGL")]),t._v(" "),a("th",[t._v("Metal")]),t._v(" "),a("th",[t._v("C source")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("i8")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("i16")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("i32")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("i64")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> EXT")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("u8")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("u16")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("u32")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("u64")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("f32")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("f64")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")])])])]),t._v(" "),a("p",[t._v("（OK：已支持，EXT：需要扩展支持，N/A：目前不支持）")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("布尔类型使用 "),a("code",[t._v("ti.i32")]),t._v(" 表示。")])])]),t._v(" "),a("h2",{attrs:{id:"类型提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型提升"}},[t._v("#")]),t._v(" 类型提升")]),t._v(" "),a("p",[t._v("不同类型间的二元运算将会发生数据类型提升，提升遵循 C 语言下的转换规则，例如：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("i32 + f32 = f32")]),t._v(" (integer + float = float)")]),t._v(" "),a("li",[a("code",[t._v("i32 + i64 = i64")]),t._v(" (less-bits + more-bits = more-bits)")])]),t._v(" "),a("p",[t._v("简单地说，在发生数据提升时会尝试选择更精确的数据类型来包含结果值。")]),t._v(" "),a("h2",{attrs:{id:"默认精度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认精度"}},[t._v("#")]),t._v(" 默认精度")]),t._v(" "),a("p",[t._v("默认情况下，所有的数值都具有 32 位精度。 例如，"),a("code",[t._v("42")]),t._v(" 的类型为 "),a("code",[t._v("ti.i32")]),t._v(" 而 "),a("code",[t._v("3.14")]),t._v(" 的类型为 "),a("code",[t._v("ti.f32")]),t._v("。")]),t._v(" "),a("p",[t._v("可以在 Taichi 初始化时，（分别使用 "),a("code",[t._v("default_ip")]),t._v(" 和 "),a("code",[t._v("default_fp")]),t._v(" ）指定默认的整数和浮点精度：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default_fp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default_fp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default_ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default_ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("另外需要注意的是，你可以在类型定义时使用 "),a("code",[t._v("float")]),t._v(" 或 "),a("code",[t._v("int")]),t._v(" 作为默认精度的别名，例如：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default_ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" default_fp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 相当于:")]),t._v("\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 相当于:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("h2",{attrs:{id:"类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),a("h3",{attrs:{id:"隐式类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐式类型转换"}},[t._v("#")]),t._v(" 隐式类型转换")]),t._v(" "),a("p",[t._v("变量的类型在它"),a("strong",[t._v("初始化时决定")]),t._v("。\n:::")]),t._v(" "),a("p",[t._v("当一个_低精度_变量被赋值给_高精度_变量时，它将被隐式提升为_高精度_类型，并且不会发出警告：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.7")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1.0")]),t._v("\n")])])]),a("p",[t._v("当一个_高精度_变量被赋值给_低精度_类型时，它会被隐式向下转换为_低精度_类型，并且不会发出警告：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.7")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1")]),t._v("\n")])])]),a("h3",{attrs:{id:"显式类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显式类型转换"}},[t._v("#")]),t._v(" 显式类型转换")]),t._v(" "),a("p",[t._v("你可以使用 "),a("code",[t._v("ti.cast")]),t._v(" 在不同类型之间显式地强制转换标量值：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.7")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1")]),t._v("\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1.0")]),t._v("\n")])])]),a("p",[t._v("同样，可以使用 "),a("code",[t._v("int()")]),t._v(" 和 "),a("code",[t._v("float()")]),t._v(" 将标量值转换为默认精度的浮点或整数类型：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.7")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1")]),t._v("\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1.0")]),t._v("\n")])])]),a("h3",{attrs:{id:"向量和矩阵的类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#向量和矩阵的类型转换"}},[t._v("#")]),t._v(" 向量和矩阵的类型转换")]),t._v(" "),a("p",[t._v("应用于向量/矩阵中的类型转换是逐元素的：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("u "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ti.Vector([2, 4])")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果你使用的是 ti.i32 作为默认整型精度, 那么这相当于:")]),t._v("\nv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ti.Vector([2, 4])")]),t._v("\n")])])]),a("h3",{attrs:{id:"位强制类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位强制类型转换"}},[t._v("#")]),t._v(" 位强制类型转换")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("ti.bit_cast")]),t._v(" 将一个值按位转换为另一种数据类型。 基础位将在此转换中保留。 新类型的宽度必须与旧类型的宽度相同。 例如，不允许将 "),a("code",[t._v("i32")]),t._v(" 转换成 "),a("code",[t._v("f64")]),t._v("。 请谨慎使用此操作。")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("对于熟悉 C++ 的开发者来说，"),a("code",[t._v("ti.bit_cast")]),t._v(" 相当于 "),a("code",[t._v("reinterpret_cast")]),t._v("。")])])])}),[],!1,null,null,null);s.default=_.exports}}]);