(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{509:function(e,t,o){"use strict";o.r(t);var i=o(20),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"稀疏计算-wip"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#稀疏计算-wip"}},[e._v("#")]),e._v(" 稀疏计算 (WIP)")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),o("p",[e._v("The Taichi compiler backend is under migration from source-to-source compilation to LLVM for compilation speed and portability. Sparse computation with the new LLVM backend is not yet fully implemented on multithreaded CPUs and GPUs.")]),e._v(" "),o("p",[e._v("If you are interested in sparse computation in Taichi, please read our "),o("a",{attrs:{href:"http://taichi.graphics/wp-content/uploads/2019/09/taichi_lang.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("paper"),o("OutboundLink")],1),e._v(", watch the "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=wKw8LMF3Djo",target:"_blank",rel:"noopener noreferrer"}},[e._v("introduction video"),o("OutboundLink")],1),e._v(", or check out the SIGGRAPH Asia 2019 "),o("a",{attrs:{href:"http://taichi.graphics/wp-content/uploads/2019/12/taichi_slides.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("slides"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The legacy source-to-source backend (commit "),o("a",{attrs:{href:"https://github.com/taichi-dev/taichi/tree/dc162e11",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("dc162e11")]),o("OutboundLink")],1),e._v(") provides full sparse computation functionality. However, since little engineering has been done to make that commit portable (i.e. easy to compile on different platforms), we suggest waiting until the LLVM version of sparse computation is fully implemented.")]),e._v(" "),o("p",[e._v("Sparse computation functionalities with the new LLVM backend will be back online by the end of December 2019.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);