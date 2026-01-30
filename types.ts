
export type Priority = 'High' | 'Medium' | 'Low';

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  xp: number;
  completed: boolean;
  progress: number;
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  score: number;
  progress: number;
  avatar: string;
  email: string;
  phone: string;
}

export interface Deal {
  id: string;
  name: string;
  amount: number;
  probability: number;
  contact: string;
  due: string;
  status: 'Lead' | 'Qualified' | 'Proposal' | 'Won';
}

export interface Activity {
  id: string;
  type: 'email' | 'deal' | 'task' | 'achievement';
  content: string;
  points: number;
  timestamp: string;
}

export interface Template {
  id: string;
  name: string;
  usageCount: number;
  conversionRate: number;
  isTopPerforming?: boolean;
}
