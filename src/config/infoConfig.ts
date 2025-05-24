export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// home tab 里的主副内容
export const name = 'Nanged～'
export const headline = '知足且上进，温柔而坚定'
export const introduction = '软件开发工程师，AI 探索者。在这里，记录生活，记录思考'
export const email = 'ferdinandlekae46@gmail.com'
export const githubUsername = 'Nanged23'

// about tab 里的主副内容
export const aboutMeHeadline = "能力 - 欲望 = 自由"
export const aboutParagraphs = [
  "初出茅庐，请多指教。国内计算机专业本科毕业，即将工作的牛马",
  "做生活的 owner。各种兴趣爱好和生活方式持续探索中",
  "人类因为理性而成熟，因为知道理性的局限而伟大。读书，观影，思考..."
]


// blog tab 里的主副标题
export const blogHeadLine = "我思故我在"
export const blogIntro = "读书笔记 / 技术探索 / 生活感悟"


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/realcoreychiu',
    external: true
  },
  {
    name: 'Bsky',
    icon: 'bsky',
    href: 'https://bsky.app/profile/coreychiu.com',
    external: true
  },
  {
    name: 'Jike',
    icon: 'pill',
    href: 'https://okjk.co/P7c1zU',
    external: true
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/iamcorey',
    external: true
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    href: 'https://mp.weixin.qq.com/s/DxnRgqNfgzXIhqj6w_x0dQ',
    external: true
  },
  {
    name: 'Discord',
    icon: 'discord',
    href: 'https://discord.gg/xTxRg3Ej',
    external: true
  },
  {
    name: 'Ko-fi',
    icon: 'coffee',
    href: 'https://ko-fi.com/coreychiu',
    external: true
  }
]

// https://simpleicons.org/
//3D 滚动技术栈
export const techIcons = [
  "vuedotjs",
  "javascript", 
  "java", 
  "mysql", 
  "nodedotjs",  
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",  
  "apple",
  "wechat"
];



