// 教育经历
// 不确定 icon 是不是来源于此：https://phosphoricons.com/
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: '重庆邮电大学',
      major: '计算机科学与技术',
      logo: 'college',
      start: '2021.09',
      end: '2025.06'
    },
  ]