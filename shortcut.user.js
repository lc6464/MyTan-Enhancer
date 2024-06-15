// ==UserScript==
// @name         MyTan 补全计划：快捷键
// @namespace    https://lcwebsite.cn/
// @version      0.1.0
// @description  通过新增一些快捷键让 MyTan Web 端更好用！
// @author       LC
// @match        https://mytan.maiseed.com.cn/*
// @icon         https://mytan.maiseed.com.cn/assets/single-logo.png
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
	'use strict';

	if (location.pathname.startsWith('/chat')) {
		// 聊天页面
		document.body.addEventListener('keydown', e => {
			if (e.key === "n" && e.altKey) {
				// Alt + N：新建对话
				e.preventDefault();
				document.querySelector('.create').click();
				return;
			}

			if (e.key === "F2" && location.pathname !== "/chat" && location.pathname !== "/chat/undefined") {
				// F2：重命名对话
				e.preventDefault();
				document.querySelector('svg-icon[key="edit"]').click();
				return;
			}

			if (e.key === "Enter" && e.target !== null && e.target === document.querySelector('.title-input')) {
				// 在重命名对话时按 Enter：保存新的对话名称
				e.preventDefault();
				document.querySelector('[nztype="primary"]').click();
				return;
			}
		});
	}
})();