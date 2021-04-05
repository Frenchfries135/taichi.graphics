(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{532:function(t,a,e){"use strict";e.r(a);var s=e(20),i=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"安装-taichi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-taichi"}},[t._v("#")]),t._v(" 安装 Taichi")]),t._v(" "),e("p",[t._v("通过 "),e("code",[t._v("pip")]),t._v(" 可以很容易安装 Taichi：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("python3 -m pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" taichi\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("目前，Taichi 支持的 Python 版本有 3.6/3.7/3.8 (64-bit)。")])]),t._v(" "),e("ul",[e("li",[t._v("对于 Ubuntu 19.04+，请执行 "),e("code",[t._v("sudo apt install libtinfo5")]),t._v(" 安装依赖项。")]),t._v(" "),e("li",[t._v("对于 Arch Linux，请执行 "),e("code",[t._v("yaourt -S ncurses5-compat-libs")]),t._v(" 安装依赖项。")]),t._v(" "),e("li",[t._v("对于 Windows，请预先安装运行组件库 "),e("a",{attrs:{href:"https://aka.ms/vs/16/release/vc_redist.x64.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Visual C++ Redistributable"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("h2",{attrs:{id:"故障排除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#故障排除"}},[t._v("#")]),t._v(" 故障排除")]),t._v(" "),e("h3",{attrs:{id:"windows-相关问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-相关问题"}},[t._v("#")]),t._v(" Windows 相关问题")]),t._v(" "),e("ul",[e("li",[t._v("如果在 Windows 下 Taichi 崩溃并报告 "),e("code",[t._v("ImportError")]),t._v("：请考虑安装运行组件库 "),e("a",{attrs:{href:"https://aka.ms/vs/16/release/vc_redist.x64.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Visual C++ Redistributable"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("h3",{attrs:{id:"python-相关问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python-相关问题"}},[t._v("#")]),t._v(" Python 相关问题")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("如果 "),e("code",[t._v("pip")]),t._v(" 报错找不到合适的包，即,")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ERROR: Could not find a version that satisfies the requirement taichi (from versions: none)\nERROR: No matching distribution found for taichi\n")])])]),e("ul",[e("li",[e("p",[t._v("确保你使用的 Python 版本是 3.6/3.7/3.8：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("python3 -c "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"print(__import__('sys').version[:3])\"")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3.6, 3.7 或 3.8")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("确保你安装的 Python 可执行文件是 64-bit：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("python3 -c "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"print(__import__('platform').architecture()[0])\"")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 64bit")]),t._v("\n")])])])])])])]),t._v(" "),e("h3",{attrs:{id:"cuda-相关问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cuda-相关问题"}},[t._v("#")]),t._v(" CUDA 相关问题")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("如果 Taichi 报告以下崩溃信息：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[Taichi] mode=release\n[Taichi] version 0.6.0, supported archs: [cpu, cuda, opengl], commit 14094f25, python 3.8.2\n[W 05/14/20 10:46:49.549] [cuda_driver.h:call_with_warning@60] CUDA Error CUDA_ERROR_INVALID_DEVICE: invalid device ordinal while calling mem_advise (cuMemAdvise)\n[E 05/14/20 10:46:49.911] Received signal 7 (Bus error)\n")])])]),e("p",[t._v("这可能是因为你使用的 NVIDIA GPU 低于 Pascal 架构，这对 "),e("a",{attrs:{href:"https://www.nextplatform.com/2019/01/24/unified-memory-the-final-piece-of-the-gpu-programming-puzzle/",target:"_blank",rel:"noopener noreferrer"}},[t._v("统一内存(Unified Memory)"),e("OutboundLink")],1),t._v("的支持会有所限制。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("可能的解决方案")]),t._v("：尝试添加 "),e("code",[t._v("export TI_USE_UNIFIED_MEMORY=0")]),t._v(" 到你的 "),e("code",[t._v("~/.bashrc")]),t._v(" 文件中。 该操作将禁用 CUDA 后端使用统一内存。")])])]),t._v(" "),e("li",[e("p",[t._v("如果你遇到了其他 CUDA 相关问题，不要气馁：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("可能的解决方案")]),t._v("：尝试添加 "),e("code",[t._v("export TI_ENABLE_CUDA=0")]),t._v(" 到你的 "),e("code",[t._v("~/.bashrc")]),t._v(" 文件中。 该操作将完全禁用 CUDA 后端，这样 Taichi 会转而依赖于其他 GPU 后端，如 OpenGL。")])])])]),t._v(" "),e("h3",{attrs:{id:"opengl-相关问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opengl-相关问题"}},[t._v("#")]),t._v(" OpenGL 相关问题")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("针对 Taichi 打印出的调用栈回溯 (stack backtrace) 中包含 "),e("code",[t._v("glfwCreateWindow")]),t._v(" 等信息的情况 (更详细的问题描述请对照"),e("a",{attrs:{href:"https://github.com/taichi-dev/taichi/issues/958",target:"_blank",rel:"noopener noreferrer"}},[t._v("#958"),e("OutboundLink")],1),t._v(")：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[Taichi] mode=release\n[E 05/12/20 18.25:00.129] Received signal 11 (Segmentation Fault)\n***********************************\n* Taichi Compiler Stack Traceback *\n***********************************\n\n... (省略多行)\n\n/lib/python3.8/site-packages/taichi/core/../lib/taichi_core.so: _glfwPlatformCreateWindow\n/lib/python3.8/site-packages/taichi/core/../lib/taichi_core.so: glfwCreateWindow\n/lib/python3.8/site-packages/taichi/core/../lib/taichi_core.so: taichi::lang::opengl::initialize_opengl(bool)\n\n... (省略多行)\n")])])]),e("p",[t._v("这很可能是因为你运行 Taichi 的虚拟机上的 OpenGL 版本过低。 Taichi 需要 OpenGL 4.3+ 才能正常工作。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("可能的解决方案")]),t._v("：尝试添加 "),e("code",[t._v("export TI_ENABLE_OPENGL=0")]),t._v(" 到你的 "),e("code",[t._v("~/.bashrc")]),t._v(" 文件中，即使你使用了非 OpenGL 后端初始化 Taichi。 该操作将禁用 OpenGL 后端检测，以避免 OpenGL 版本不兼容的问题。")])])])]),t._v(" "),e("h3",{attrs:{id:"linux-相关问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-相关问题"}},[t._v("#")]),t._v(" Linux 相关问题")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("如果 Taichi 崩溃并报告错误 "),e("code",[t._v("libtinfo.so.5 not found")]),t._v("：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("对于 Ubuntu ，请执行 "),e("code",[t._v("sudo apt install libtinfo-dev")]),t._v(" 安装依赖项。")])]),t._v(" "),e("li",[e("p",[t._v("对于 Arch Linux ，请首先编辑 "),e("code",[t._v("/etc/pacman.conf")]),t._v("，添加以下代码：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[archlinuxcn]\nServer = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch\n")])])]),e("p",[t._v("随后执行 "),e("code",[t._v("sudo pacman -Syy ncurses5-compat-libs")]),t._v("。")])])])]),t._v(" "),e("li",[e("p",[t._v("如果 Taichi 崩溃并报告 "),e("code",[t._v("/usr/lib/libstdc++.so.6: version `CXXABI_1.3.11' not found")]),t._v("：")]),t._v(" "),e("p",[t._v("你可能正在使用 Ubuntu 16.04 ，请根据"),e("a",{attrs:{href:"https://github.com/tensorflow/serving/issues/819#issuecomment-377776784",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个帖子"),e("OutboundLink")],1),t._v("中的解决方案尝试解决：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:ubuntu-toolchain-r/test -y\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libstdc++6\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"其他问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他问题"}},[t._v("#")]),t._v(" 其他问题")]),t._v(" "),e("ul",[e("li",[t._v("如果以上方案都没能解决你的问题，请在 GitHub 上"),e("a",{attrs:{href:"https://github.com/taichi-dev/taichi/issues/new?labels=potential+bug&template=bug_report.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("建立一个 issue"),e("OutboundLink")],1),t._v(" 进行报告。 这将帮助我们后续提高用户体验和兼容性，非常感谢！")])])])}),[],!1,null,null,null);a.default=i.exports}}]);