(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{495:function(t,a,s){"use strict";s.r(a);var e=s(20),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"开发者安装指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发者安装指南"}},[t._v("#")]),t._v(" 开发者安装指南")]),t._v(" "),s("p",[t._v("请注意，本章节是为 Taichi 语言编译器的开发人员所准备的。 终端用户应该使用 pip 进行安装，而不是从源代码开始构建。 要在构建时加入对 NVIDIA GPU 的支持，CUDA 10.0+ 是必需的。 本安装指南适用于 Ubuntu 16.04+ 和 OS X 10.14+。 关于在 Windows 下进行构建的详细说明，请查看 "),s("a",{attrs:{href:"https://github.com/taichi-dev/taichi/blob/master/appveyor.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("appveyor.yml"),s("OutboundLink")],1),t._v("，Windows 下的教程大致与 Ubtuntu 和 OS X 的教程相同。 我们使用 MSBUILD.exe 来构建生成的项目。 需要注意的是，Windows 拥有多个 MSBUILD.exe 实例，它们附带在各种版本的 MSVS 上。 请确保在 MSVS 目录中添加 MSBUILD.exe 的路径，并使其具有更高的优先级（例如，比附带的 .NET 优先级更高）。")]),t._v(" "),s("p",[t._v("请注意 "),s("code",[t._v("clang")]),t._v(" 是在 Linux/OS X 下唯一支持的可以编译 Taichi 编译器的编译器。 相应的在 Windows 下只有 MSVC 是支持的编译器。")]),t._v(" "),s("h2",{attrs:{id:"安装依赖项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖项"}},[t._v("#")]),t._v(" 安装依赖项")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("请确认你使用的 Python 版本为 3.6/3.7/3.8")])]),t._v(" "),s("li",[s("p",[t._v("安装 Python 依赖：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("python3 -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user setuptools astor pybind11 pylint sourceinspect\npython3 -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pytest pytest-rerunfailures pytest-xdist yapf\npython3 -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user numpy GitPython coverage colorama autograd\n")])])])]),t._v(" "),s("li",[s("p",[t._v("确保你的 "),s("code",[t._v("clang")]),t._v(" 版本号 >= 7：")]),t._v(" "),s("ul",[s("li",[t._v("在Windows 下: 下载 "),s("a",{attrs:{href:"https://github.com/taichi-dev/taichi_assets/releases/download/llvm10/clang-10.0.0-win.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("clang-10"),s("OutboundLink")],1),t._v("： 确保将包含 "),s("code",[t._v("clang.exe")]),t._v(" 的 "),s("code",[t._v("bin")]),t._v(" 文件夹路径添加到 "),s("code",[t._v("PATH")]),t._v(" 环境变量中。")]),t._v(" "),s("li",[t._v("在OS X 下：不需要额外再准备什么（安装完 Xcode 命令行工具后 clang 就已经默认安装完毕了）。")]),t._v(" "),s("li",[t._v("在Ubuntu 下：执行 "),s("code",[t._v("sudo apt install libtinfo-dev clang-8")]),t._v("。")]),t._v(" "),s("li",[t._v("在Arch Linux 下：执行 "),s("code",[t._v("sudo pacman -S clang")]),t._v("。 （这会安装 "),s("code",[t._v("clang-10")]),t._v(" ）。")]),t._v(" "),s("li",[t._v("在其他 Linux 发行版下，请从"),s("a",{attrs:{href:"pkgs.org"}},[t._v("此网站")]),t._v("搜寻安装版本号 >= 7 的 clang。")])])]),t._v(" "),s("li",[s("p",[t._v("确保你已经安装了 LLVM 10.0.0。 注意，Taichi 使用了 "),s("strong",[t._v("定制的 LLVM")]),t._v("，所以从 LLVM 官网或其他来源下载的预构建可执行文件可能不会正常工作。 在此我们提供了 Taichi 的定制版 LLVM 可执行文件，它是否能正常运行取决于你的系统环境：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/taichi-dev/taichi_assets/releases/download/llvm10/taichi-llvm-10.0.0-linux.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("LLVM 10.0.0 for Linux"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/taichi-dev/taichi_assets/releases/download/llvm10/taichi-llvm-10.0.0-msvc2019.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("LLVM 10.0.0 for Windows MSVC 2019"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/taichi-dev/taichi_assets/releases/download/llvm10/taichi-llvm-10.0.0-macos.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("LLVM 10.0.0 for OS X"),s("OutboundLink")],1)])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("在 Windows 下, 如果你使用的是 Taichi 版预构建的 LLVM，请将 "),s("code",[t._v("$LLVM_FOLDER/bin")]),t._v(" 添加到 "),s("code",[t._v("PATH")]),t._v("。 随后，当你使用 "),s("code",[t._v("CMake")]),t._v(" 构建 Taichi 时，将 "),s("code",[t._v("LLVM_DIR")]),t._v(" 设置为 "),s("code",[t._v("$LLVM_FOLDER/lib/cmake/llvm")]),t._v("。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果下载的 LLVM 不能正常工作，请从源代码开始构建：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在 Linux 或 OS X 下：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/llvm/llvm-project/releases/download/llvmorg-10.0.0/llvm-10.0.0.src.tar.xz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvJf llvm-10.0.0.src.tar.xz\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" llvm-10.0.0.src\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build\ncmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(" -DLLVM_ENABLE_RTTI:BOOL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON -DBUILD_SHARED_LIBS:BOOL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OFF -DCMAKE_BUILD_TYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Release -DLLVM_TARGETS_TO_BUILD"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X86;NVPTX"')]),t._v(" -DLLVM_ENABLE_ASSERTIONS"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 如果你想在 NVIDIA Jetson TX2 上进行构建, 请使用 -DLLVM_TARGETS_TO_BUILD="ARM;NVPTX"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" -j "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查你安装的 LLVM 版本")]),t._v("\nllvm-config --version  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You should get 10.0.0")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("在 Windows 下：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# LLVM 10.0.0 + MSVC 2019")]),t._v("\ncmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(" -G"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Visual Studio 16 2019"')]),t._v(" -A x64 -DLLVM_ENABLE_RTTI:BOOL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON -DBUILD_SHARED_LIBS:BOOL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OFF -DCMAKE_BUILD_TYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Release -DLLVM_TARGETS_TO_BUILD"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X86;NVPTX"')]),t._v(" -DLLVM_ENABLE_ASSERTIONS"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON -Thost"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("x64 -DLLVM_BUILD_TESTS:BOOL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OFF -DCMAKE_INSTALL_PREFIX"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("installed\n")])])]),s("ul",[s("li",[t._v("然后打开 "),s("code",[t._v("LLVM.sln")]),t._v(" 并使用 Visual Studio 2017+ 进行构建。")]),t._v(" "),s("li",[t._v("请确保你正在使用的是 "),s("code",[t._v("Release")]),t._v(" 模式。 随后构建 "),s("code",[t._v("INSTALL")]),t._v(" 项目（在Solution Explorer窗口的 "),s("code",[t._v("CMakePredefinedTargets")]),t._v(" 目录下）。")]),t._v(" "),s("li",[t._v("如果你使用的是 MSVC 2019，**确保你通过 C++17 **构建 "),s("code",[t._v("INSTALL")]),t._v(" 项目。")]),t._v(" "),s("li",[t._v("在完成构建之后，你可以在 "),s("code",[t._v("build/installed")]),t._v(" 中找到 LLVM 可执行文件和头文件。")])]),t._v(" "),s("p",[t._v("请将 "),s("code",[t._v("build/installed/bin")]),t._v(" 添加至 "),s("code",[t._v("PATH")]),t._v("。 随后，当你使用 "),s("code",[t._v("CMake")]),t._v(" 构建Taichi 时，将 "),s("code",[t._v("LLVM_DIR")]),t._v(" 设置到 "),s("code",[t._v("build/installed/lib/cmake/llvm")]),t._v("。")])])])])]),t._v(" "),s("h2",{attrs:{id:"安装并配置-cuda-可选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装并配置-cuda-可选"}},[t._v("#")]),t._v(" 安装并配置 CUDA（可选）")]),t._v(" "),s("p",[t._v("如果你没有安装 CUDA，请到"),s("a",{attrs:{href:"https://developer.nvidia.com/cuda-downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("英伟达官网"),s("OutboundLink")],1),t._v("下载安装器。")]),t._v(" "),s("ul",[s("li",[t._v("请运行 "),s("code",[t._v("nvcc --version")]),t._v(" 或 "),s("code",[t._v("cat /usr/local/cuda/version.txt")]),t._v(" 来检查 CUDA 是否已安装成功。")]),t._v(" "),s("li",[t._v("在 "),s("strong",[t._v("Ubuntu")]),t._v(" 下我们推荐选择 "),s("code",[t._v("deb (local)")]),t._v(" 来作为 "),s("strong",[t._v("安装器类型（Installer Type）")]),t._v("。")]),t._v(" "),s("li",[t._v("在 "),s("strong",[t._v("Arch Linux")]),t._v(" 下，你可以轻松地通过 "),s("code",[t._v("pacman -S cuda")]),t._v(" 来安装 CUDA 并跳过手动下载安装器的环节。")])]),t._v(" "),s("h2",{attrs:{id:"开发者的-taichi-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发者的-taichi-配置"}},[t._v("#")]),t._v(" 开发者的 Taichi 配置")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("为 Taichi 设置环境变：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Linux / OS X 下, 请将以下脚本添加到你的配置文件中（如 "),s("code",[t._v("~/.bashrc")]),t._v("，"),s("code",[t._v("~/.zshrc")]),t._v(" 等，本文档中的其他示例和这里一样，请自动与你的配置文件相对应)：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TAICHI_REPO_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/path/to/taichi  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指向你的 taichi 仓库的路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PYTHONPATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TAICHI_REPO_DIR")]),t._v("/python:"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PYTHONPATH")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TAICHI_REPO_DIR")]),t._v("/bin:"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# export CXX=/path/to/clang  # 如果在下一步遇到关于编译器的问题，取消这个注释。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# export PATH=/opt/llvm/bin:$PATH  # 如果你的 llvm 或 clang 安装到了 /opt 中，取消这个注释")]),t._v("\n")])])]),s("p",[t._v("然后执行 "),s("code",[t._v("source ~/.bashrc")]),t._v(" 来重载 shell 的配置。")])])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("如果你在使用 fish，请使用 "),s("code",[t._v("set -x NAME VALUES")]),t._v("，否则它不会被子进程所加载。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在 Windows 下，请通过访问你的系统设置来添加以下这些变量：")]),t._v(" "),s("ol",[s("li",[t._v("添加 "),s("code",[t._v("TAICHI_REPO_DIR")]),t._v("，其值指向你的 Taichi 仓库存储路径，以便让 Taichi 知道你是一名开发者。")]),t._v(" "),s("li",[t._v("添加或附加 "),s("code",[t._v("%TAICHI_REPO_DIR%/python")]),t._v(" 到 "),s("code",[t._v("PYTHONPATH")]),t._v(" ，以便 Python 可以从本地仓库导入 Taichi。")]),t._v(" "),s("li",[t._v("添加或附加 "),s("code",[t._v("%TAICHI_REPO_DIR%/bin")]),t._v(" 到 "),s("code",[t._v("PATH")]),t._v("，这样你就可以使用 "),s("code",[t._v("ti")]),t._v(" 命令了")]),t._v(" "),s("li",[t._v("添加或附加之前小节安装的 LLVM 可执行文件路径到 "),s("code",[t._v("PATH")]),t._v("。")])])]),t._v(" "),s("li",[s("p",[t._v("请"),s("strong",[t._v("递归地")]),t._v("克隆 Taichi 代码库，然后构建：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/taichi-dev/taichi --depth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" --branch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("master\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" taichi\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update --init --recursive --depth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build\ncmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 Linux / OS X 下, 如果你没有将 clang 设置为默认编译器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用下面这行命令：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   cmake .. -DCMAKE_CXX_COMPILER=clang")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者，如果你希望将 clang 设置为默认编译器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在Unix下，在决定对 C 和 C++ 使用哪个编译器时，CMake 会考虑到环境变量 $CC 和 $CXX")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" -j "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("查看 "),s("code",[t._v("examples")]),t._v(" 下提供的可运行示例程序。 例如使用 "),s("code",[t._v("python3 examples/mpm128.py")]),t._v(" 这种方式运行它们。")])]),t._v(" "),s("li",[s("p",[t._v("执行 "),s("code",[t._v("python3 -m taichi test")]),t._v(" 来运行所有的测试。 运行所有测试用例可能会耗费长达 5 分钟的时间。")])])]),t._v(" "),s("h2",{attrs:{id:"开发者安装中的故障排除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发者安装中的故障排除"}},[t._v("#")]),t._v(" 开发者安装中的故障排除")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果编译时 "),s("code",[t._v("make")]),t._v(" 失败并且报告 "),s("code",[t._v("fatal error: 'spdlog/XXX.h' file not found")]),t._v("，请尝试执行 "),s("code",[t._v("git submodule update --init --recursive --depth=1")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("如果导入 Taichi 时引发错误")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("FileNotFoundError: [Errno 2] No such file or directory: '/root/taichi/python/taichi/core/../lib/taichi_core.so' -> '/root/taichi/python/taichi/core/../lib/libtaichi_core.so'``\n")])])]),s("p",[t._v("请尝试将 "),s("code",[t._v("TAICHI_REPO_DIR")]),t._v(" 添加到环境变量中, 详见 "),s("code",[t._v("dev_env_settings")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("如果构建过程是顺利的，但运行任何 Taichi 代码时却有报错信息，如")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Bitcode file (/tmp/taichi-tero94pl/runtime//runtime_x64.bc) not found\n")])])]),s("p",[t._v("请再检查一遍 "),s("code",[t._v("clang")]),t._v(" 是否在你的 "),s("code",[t._v("PATH")]),t._v("中：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("clang --version\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 版本号应该 >= 7")]),t._v("\n")])])]),s("p",[t._v("还有我们的 "),s("strong",[t._v("Taichi 定制版配置")]),t._v(" "),s("code",[t._v("llvm-as")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("llvm-as --version\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# version should be >= 8")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" llvm-as\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 应该输出 /usr/local/bin/llvm-as or /opt/XXX/bin/llvm-as，这是我们的定制版 LLVM 所在位置")]),t._v("\n")])])]),s("p",[t._v("如果不是, 请按照上面的"),s("code",[t._v("开发者安装")]),t._v("教程安装 "),s("code",[t._v("clang")]),t._v(" 并 "),s("strong",[t._v("从源码开始构建 LLVM")]),t._v(", 然后将它们的路径添加到环境变量 "),s("code",[t._v("PATH")]),t._v(" 中。")])]),t._v(" "),s("li",[s("p",[t._v("如果你遇到了其他问题，请在 Github 上随时提出 "),s("a",{attrs:{href:"https://github.com/taichi-dev/taichi/issues/new?labels=potential+bug&template=bug_report.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),s("OutboundLink")],1),t._v(" 进行报告。 我们非常愿意提供帮助！")])]),t._v(" "),s("li",[s("p",[t._v("请参阅"),s("RouterLink",{attrs:{to:"/zh/documentation/overview/install.html#troubleshooting"}},[t._v("故障排除")]),t._v("章节以了解那些可能与终端用户安装时遇到的相同问题。")],1)])]),t._v(" "),s("h2",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),s("p",[t._v("对于那些更喜欢使用 Docker 的开发者，我们也提供了一个 Dockerfile，它可以帮助开发者建立起基于 Ubuntu Docker 镜像的 Taichi 开发环境（支持CUDA）。")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("如要遵照本节中的说明，请确保你已经安装并正确设置了 "),s("a",{attrs:{href:"https://www.docker.com/products/docker-desktop",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker DeskTop (或在 Linux 下的 Engine)"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"构建-docker-镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建-docker-镜像"}},[t._v("#")]),t._v(" 构建 Docker 镜像")]),t._v(" "),s("p",[t._v("在 Taichi Git 仓库的根目录下，执行 "),s("code",[t._v("docker build -t taichi:latest .")]),t._v(" 来构建标记为 latest 的基于本地主分支的 docker 镜像。 由于这是从源文件构建镜像，如果你没有缓存的 Docker 镜像层，预计会有 40 分钟左右的构建时间。")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("为节省构建 Docker 镜像的时间，你可以随时访问我们的 "),s("a",{attrs:{href:"https://hub.docker.com/r/taichidev/taichi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hub 仓库"),s("OutboundLink")],1),t._v("，并拉取你想要使用的预构建镜像版本。 目前，每个版本的构建都是在 taichi Github 版本发行时触发。")]),t._v(" "),s("p",[t._v("例如，要拉取版本 v0.6.17 构建的映像，请运行 "),s("code",[t._v("docker pull taichidev/taichi:v0.6.17")])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("Docker 容器的特性决定了一旦你退出容器，就不能保留对容器上文件系统的任何修改。 如果你想要使用 Docker 作为一个持久的开发 环境，我们推荐你 "),s("a",{attrs:{href:"https://docs.docker.com/storage/volumes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("挂载 Taichi 的本地 Github 代码仓库到 容器作为一个卷"),s("OutboundLink")],1),t._v(" 并设置你的 Python 路径到挂载的目录下。")])]),t._v(" "),s("h3",{attrs:{id:"在-macos-下使用-docker-镜像-仅支持-cpu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-macos-下使用-docker-镜像-仅支持-cpu"}},[t._v("#")]),t._v(" 在 macOS 下使用 Docker 镜像（仅支持 cpu）")]),t._v(" "),s("ol",[s("li",[t._v("确保已经提前安装好了 "),s("code",[t._v("XQuartz")]),t._v(" 和 "),s("code",[t._v("socat")]),t._v("：")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("brew cask "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xquartz\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" socat\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("暂时禁用 xhost 的访问控制: "),s("code",[t._v("xhost +")])]),t._v(" "),s("li",[t._v("启动 Docker 容器 "),s("code",[t._v("docker run -it -e DISPLAY=$(ipconfig getifaddr en0):0 taichidev/taichi:v0.6.17")])]),t._v(" "),s("li",[t._v("在容器内执行各种你想要的操作，例如，可以通过尝试 "),s("code",[t._v("ti test")]),t._v(" 或 "),s("code",[t._v("ti example mpm88")]),t._v(" 来运行测试或示例")]),t._v(" "),s("li",[t._v("通过 "),s("code",[t._v("exit")]),t._v(" 或 "),s("code",[t._v("ctrl+D")]),t._v(" 退出容器")]),t._v(" "),s("li",[t._v("[为确保你的 xhost 安全] 重新启用 xhost 的访问控制："),s("code",[t._v("xhost -")])])]),t._v(" "),s("h3",{attrs:{id:"在-ubuntu-下使用-docker-镜像-包含-cuda-支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-ubuntu-下使用-docker-镜像-包含-cuda-支持"}},[t._v("#")]),t._v(" 在 Ubuntu 下使用 Docker 镜像（包含 CUDA 支持）")]),t._v(" "),s("ol",[s("li",[t._v("确保你的宿主机已经正确安装并配置了 CUDA。 通常这可以通过运行 "),s("code",[t._v("nvidia-smi")]),t._v(" 进行验证")]),t._v(" "),s("li",[t._v("确保 "),s("a",{attrs:{href:"https://github.com/NVIDIA/nvidia-docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("NVIDIA Container Toolkit"),s("OutboundLink")],1),t._v(" 正确安装完毕：")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("distribution")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" /etc/os-release"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" $ID$VERSION_ID"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s -L https://nvidia.github.io/nvidia-docker/gpgkey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s -L https://nvidia.github.io/nvidia-docker/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$distribution")]),t._v("/nvidia-docker.list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/apt/sources.list.d/nvidia-docker.list\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y nvidia-container-toolkit\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart docker\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("确保 "),s("code",[t._v("xorg")]),t._v(" 已经安装完毕："),s("code",[t._v("sudo apt-get install xorg")])]),t._v(" "),s("li",[t._v("暂时禁用 xhost 的访问控制："),s("code",[t._v("xhost +")])]),t._v(" "),s("li",[t._v("通过 "),s("code",[t._v("sudo docker run -it --gpus all -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix taichidev/taichi:v0.6.17")]),t._v(" 启动Docker容器")]),t._v(" "),s("li",[t._v("在容器内执行各种你想要的操作，例如，可以通过尝试 "),s("code",[t._v("ti test")]),t._v(" 或 "),s("code",[t._v("ti example mpm88")]),t._v(" 来运行测试或示例")]),t._v(" "),s("li",[t._v("通过 "),s("code",[t._v("exit")]),t._v(" 或 "),s("code",[t._v("ctrl+D")]),t._v(" 退出容器")]),t._v(" "),s("li",[s("strong",[t._v("[为确保你的 xhost 安全]")]),t._v(" 重新启用 xhost 的访问控制：<0>xhost -</0>")])])])}),[],!1,null,null,null);a.default=n.exports}}]);