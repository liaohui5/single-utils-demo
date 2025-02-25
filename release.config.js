/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
	branches: ["main", "next"],
	plugins: [
		// 1.安装(pnpm i -D semantic-release) 后, 默认会有这4个插件
		// 分析提交记录的 conventional-changelog, 用于生成变更日志
		// https://github.com/semantic-release/commit-analyzer
		[
			"@semantic-release/commit-analyzer",
			{
				// 会根据提交记录的  分析出修改的版本
				// 用于控制修改版本规则 major.minor.patch
				// 推荐阅读: https://www.conventionalcommits.org/zh-hans/v1.0.0/
				// 如果需要修改 major 版本, 只需要在 commit 类型后添加 ! 即可, 如: feat!: xxx
				// 并且在git提交消息体中增加: BREAKING CHANGE: xxx
				releaseRules: [
					{ type: "fix", release: "patch" },
					{ type: "refactor", release: "patch" },
					{ type: "perf", release: "patch" },
					{ type: "chore", release: "patch" },
					{ type: "feat", release: "minor" },
				],
			},
		],

		// 2.使用 conventional-changelog 生成变更日志内容
		// https://github.com/semantic-release/release-notes-generator
		"@semantic-release/release-notes-generator",

		// 3.每个发布步骤都是通过可配置的插件实现的, 这允许支持不同的提交消息格式、
		// 发布说明生成器和发布平台, 甚至你可以用它来发布 cargo/pip/composer 的包
		// 为了实现更方便的功能, 可以去官网找更多需要的插件:
		// https://semantic-release.gitbook.io/semantic-release/extending/plugins-list
		[
			// 将 Github Actions 生成的提交记录
			// 写入到 CHANGELOG.md 文件中
			"@semantic-release/changelog",
			{
				changelogFile: "CHANGELOG.md",
			},
		],

		// 3.如果需要给插件传入参数, 可以使用数组形式,
		// 数组第一个元素是插件名称, 后面是插件参数
		// 默认的参数请查看对应插件仓库的 README.md
		// https://github.com/semantic-release/npm
		[
			"@semantic-release/npm",
			{
				// npmPublish: 是否发布到 npm 仓库,
				// 如果设置为 true:
				// 1.注意需要配置 github secrets
				// 2.会自动修改 package.json 的 version 字段
				// 3.如果开启了 2fa 安全验证码, 需要在生成 npm token 时选择 "Automation" 类型
				npmPublish: true,
			},
		],

		// 默认情况下 semantic-release 打包发布的版本与 commit 的版本号
		// 一 致, 但是与 package.json 的版本号不一致, 因此需要配置
		[
			"@semantic-release/git",
			{
				// 这个是发布到 tags 页面的额外资源, 比如一些软件会把构建结果的包放在这里
				// 比如: https://github.com/clash-verge-rev/clash-verge-rev/releases/tag/v2.0.2
				// 除了源码(tar.gz)压缩包之外, 还增加了很多构建好的软件, 如: Clash.Verge_2.0.2_x64-setup.exe
				assets: ["dist"],
				message:
					"ci(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
			},
		],

		// https://github.com/semantic-release/git
		[
			"@semantic-release/github",
			{
				assets: ["dist", "CHANGELOG.md"],
			},
		],
	],
};
