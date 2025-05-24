//网站最下方的链接 - friends
export const friendsHeadLine = "友链"
export const friendsIntro = "在这里，链接到更大的世界"

export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  {
    name: 'Corey Chiu',
    link: { href: 'https://coreychiu.com' },
  },
]