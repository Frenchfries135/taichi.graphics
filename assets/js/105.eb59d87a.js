(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{524:function(v,_,t){"use strict";t.r(_);var e=t(20),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"命令行工具使用指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行工具使用指南"}},[v._v("#")]),v._v(" 命令行工具使用指南")]),v._v(" "),t("p",[v._v("Taichi 成功安装之后后会在系统中增加一个 CLI（命令行窗口）工具，这个工具可以帮助你快速地执行多个日常任务。 如要调用 CLI，请在 shell 中运行 "),t("code",[v._v("ti")]),v._v(" 或者 "),t("code",[v._v("python3 -m taichi")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[v._v("#")]),v._v(" 示例")]),v._v(" "),t("p",[v._v("Taichi 提供了一组捆绑示例。 你可以在命令行窗口中运行："),t("code",[v._v("ti example -h")]),v._v(" 来打印帮助信息并获取可用示例名称的列表。")]),v._v(" "),t("p",[v._v("例如，要运行基础的 "),t("code",[v._v("fractal（分形）")]),v._v("示例，尝试在shell中运行 "),t("code",[v._v("ti example fractal")]),v._v("。 （运行 "),t("code",[v._v("ti example fractal.py")]),v._v(" 也同样奏效）")]),v._v(" "),t("p",[v._v("你可以通过运行 "),t("code",[v._v("ti example -p fractal")]),v._v(" 或 "),t("code",[v._v("ti example -P fractal")]),v._v(" 来打印带语法高亮的示例源代码。")]),v._v(" "),t("p",[v._v("你还可以通过运行 "),t("code",[v._v("ti example -s fractal")]),v._v(" 来将示例保存到当前的工作目录中。")]),v._v(" "),t("h2",{attrs:{id:"更新日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新日志"}},[v._v("#")]),v._v(" 更新日志")]),v._v(" "),t("p",[v._v("有时我们需要查看当前版本的 Taichi 的更新日志。 你可以通过在 Shell 中运行 "),t("code",[v._v("ti changelog")]),v._v(" 来查看更新日志。")]),v._v(" "),t("h2",{attrs:{id:"repl-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repl-shell"}},[v._v("#")]),v._v(" REPL Shell")]),v._v(" "),t("p",[v._v("有时为了快速测试和验证，我们需要打开一个预加载了 "),t("code",[v._v("import taichi as ti")]),v._v(" 的 Python shell。 你可以通过在 shell 中运行 "),t("code",[v._v("ti repl")]),v._v(" 来做到这一点。")]),v._v(" "),t("h2",{attrs:{id:"系统信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统信息"}},[v._v("#")]),v._v(" 系统信息")]),v._v(" "),t("p",[v._v("当你试图报告一个潜在的 bug 时，请考虑运行 "),t("code",[v._v("ti diagnose")]),v._v(" 并提供此命令的输出来作为问题报告的一个附件。 这会帮助维护者了解问题的来龙去脉和你所使用的环境的系统信息，这些信息能够使得 bug 修复过程更高效，进而更好地解决你的问题。")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[t("strong",[v._v("在发布你的系统信息之前，请再三确认你没有上传敏感的、或者关于你自己的信息。")])])]),v._v(" "),t("h2",{attrs:{id:"将-png-图片转换为视频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将-png-图片转换为视频"}},[v._v("#")]),v._v(" 将 PNG 图片转换为视频")]),v._v(" "),t("p",[v._v("有时候，为了更好地向别人呈现结果，我们需要将一系列的 "),t("code",[v._v("png")]),v._v(" 文件转换为单个视频。")]),v._v(" "),t("p",[v._v("例如，假设按照"),t("RouterLink",{attrs:{to:"/zh/docs/develop/documentation/misc/export_results.html"}},[v._v("导出你的结果")]),v._v("章节的内容将 "),t("code",[v._v("000000.png")]),v._v("，"),t("code",[v._v("000001.png")]),v._v("... 等一系列文件生成到了"),t("strong",[v._v("你的当前工作目录中")]),v._v("。")],1),v._v(" "),t("p",[v._v("那么你可以通过运行 "),t("code",[v._v("ti video")]),v._v(" 来创建一个包含了所有图片文件作为帧（按文件名排序）的名为 "),t("code",[v._v("video.mp4")]),v._v(" 的视频文件。")]),v._v(" "),t("p",[v._v("使用 "),t("code",[v._v("ti video -f40")]),v._v(" 来创建一个 40 FPS 的视频。")]),v._v(" "),t("h2",{attrs:{id:"将视频转换为-gif"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将视频转换为-gif"}},[v._v("#")]),v._v(" 将视频转换为 GIF")]),v._v(" "),t("p",[v._v("有时为了将结果上传到论坛中，我们需要一些格式为 "),t("code",[v._v("gif")]),v._v(" 的图片文件。")]),v._v(" "),t("p",[v._v("你可以运行 "),t("code",[v._v("ti gif -i video.mp4")]),v._v(" 来做到这一点，这里 "),t("code",[v._v("video.mp4")]),v._v(" 是 "),t("code",[v._v("mp4")]),v._v(" 视频文件（通过前一部分关于生成视频的指令生成）。")]),v._v(" "),t("p",[v._v("使用 "),t("code",[v._v("ti gif -i video.mp4 -f40")]),v._v(" 来创建一个 40 FPS 的 GIF 文件。")])])}),[],!1,null,null,null);_.default=a.exports}}]);