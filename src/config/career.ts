// 工作经历
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const careerList: Array<CareerItemType> = [
    {
      company: '百度网络在线科技有限公司',
      title: '实习-测试开发工程师',
      logo: 'bank',
      start: '2023.11',
      end: '2024.03'
    },
    {
      company: '抖音信息服务有限公司',
      title: '实习-测试开发工程师',
      logo: 'bank',
      start: '2025.04',
      end: '2025.06'
    },
  ]