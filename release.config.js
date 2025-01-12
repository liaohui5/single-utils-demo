/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
	branches: ["main", "next"],
	plugins: [
		// 安装(pnpm i -D semantic-release) 后, 默认会有这4个插件
		// 分析提交记录的 conventional-changelog, 用于生成变更日志
		// https://github.com/semantic-release/commit-analyzer
		"@semantic-release/commit-analyzer",

		// 使用 conventional-changelog 生成变更日志内容
		// https://github.com/semantic-release/release-notes-generator
		"@semantic-release/release-notes-generator",

        // 如果需要给插件传入参数, 可以使用数组形式, 
        // 数组第一个元素是插件名称, 后面是插件参数
        // 默认的参数请查看对应插件仓库的 README.md
		// https://github.com/semantic-release/npm
		[
			"@semantic-release/npm",
			{
				npmPublish: false,
				tarballDir: "dist",
			},
		],

		// https://github.com/semantic-release/git
		[
			"@semantic-release/github",
			{
				assets: "dist/*.tgz",
			},
		],

		// 每个发布步骤都是通过可配置的插件实现的, 这允许支持不同的提交消息格式、
		// 发布说明生成器和发布平台, 甚至你可以用它来发布 cargo/pip/composer 的包
		// 为了实现更方便的功能, 可以去官网找更多需要的插件:
		// https://semantic-release.gitbook.io/semantic-release/extending/plugins-list
	],
};
