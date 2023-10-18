export interface WorkplaceTotal {
  project: number
  access: number
  todo: number
}

export interface Project {
  name: string
  icon: string
  message: string
  personal: string
  time: Date | number | string
}

export interface Notice {
  title: string
  type: string
  keys: string[]
  date: Date | number | string
}

export interface Shortcut {
  name: string
  icon: string
  url: string
}

export interface RadarData {
  personal: number
  team: number
  max: number
  name: string
}
export interface AnalysisTotalTypes {
  users: number
  messages: number
  moneys: number
  shoppings: number
}

export interface UserAccessSource {
  value: number
  name: string
}

export interface WeeklyUserActivity {
  value: number
  name: string
}

export interface MonthlySales {
  name: string
  estimate: number
  actual: number
}
