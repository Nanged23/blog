// 更新日志
export const changelogHeadLine = "网站的更新日志"
export const changelogIntro = "日拱一卒，功不唐捐"


// changelog
export type ChangelogItemType = {
  date: string
  content: [{
    title: string
    description: string
  }]
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: '2025-05-24',
    content: [
      {
        title: '🐣 网站建成(我出生啦～)',
        description: '上班的时候，看到同事的 blog，觉得简约美观，遂要来开源网站，部署上线。'
      },
    ]
  },
   
]