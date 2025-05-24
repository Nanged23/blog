// site config
export const utm_source = process.env.NEXT_PUBLIC_UTM_SOURCE
export const site_url = process.env.NEXT_PUBLIC_SITE_URL

//底部的导航菜单
type NavItemType = {
  name: string
  href: string
}

export const footerItems: Array<NavItemType> = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Life',
    href: '/projects'
  },
  {
    name: 'Blogs',
    href: '/blogs'
  },
  {
    name: 'Friends',
    href: '/friends'
  },
  {
    name: 'Changelog',
    href: '/changelog'
  }
]

export const navItems: Array<NavItemType> = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Life',
    href: '/projects'
  },
  {
    name: 'Blogs',
    href: '/blogs'
  }
]
