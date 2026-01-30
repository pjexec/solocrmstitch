
import { Task, Contact, Deal, Activity, Template } from './types';

export const MOCK_TASKS: Task[] = [
  { id: '1', title: 'Follow up with New Client', priority: 'High', xp: 50, completed: false, progress: 45 },
  { id: '2', title: 'Prepare Proposal for Project X', priority: 'Medium', xp: 30, completed: false, progress: 60 },
  { id: '3', title: 'Weekly Team Sync', priority: 'Low', xp: 10, completed: false, progress: 20 },
];

export const MOCK_CONTACTS: Contact[] = [
  { id: '1', name: 'Sarah Johnson', role: 'Marketing Director', score: 450, progress: 90, avatar: 'https://picsum.photos/seed/sarah/100/100', email: 'sarah@example.com', phone: '+123456789' },
  { id: '2', name: 'Jane Doe', role: 'Project Manager', score: 420, progress: 85, avatar: 'https://picsum.photos/seed/jane/100/100', email: 'jane@example.com', phone: '+123456780' },
  { id: '3', name: 'Michel Paty', role: 'CEO', score: 380, progress: 75, avatar: 'https://picsum.photos/seed/michel/100/100', email: 'michel@example.com', phone: '+123456781' },
  { id: '4', name: 'Diana Mollen', role: 'Sales Lead', score: 490, progress: 95, avatar: 'https://picsum.photos/seed/diana/100/100', email: 'diana@example.com', phone: '+123456782' },
];

export const MOCK_DEALS: Deal[] = [
  { id: 'd1', name: 'Project Alpha', amount: 5000, probability: 70, contact: 'John Smith', due: 'Next Week', status: 'Qualified' },
  { id: 'd2', name: 'Project Beta', amount: 10000, probability: 45, contact: 'Jane Doe', due: '3 Days', status: 'Proposal' },
  { id: 'd3', name: 'Project Gamma', amount: 45200, probability: 100, contact: 'ACME Corp', due: 'Today', status: 'Won' },
  { id: 'd4', name: 'Enterprise License', amount: 8000, probability: 20, contact: 'Tech Giant', due: 'Next Month', status: 'Lead' },
];

export const MOCK_ACTIVITIES: Activity[] = [
  { id: 'a1', type: 'email', content: 'Sent email to Jane Doe', points: 20, timestamp: '2h ago' },
  { id: 'a2', type: 'deal', content: 'Created new deal: Project Y', points: 2, timestamp: '4h ago' },
  { id: 'a3', type: 'task', content: 'Task "Call Lead" marked complete', points: 1, timestamp: '1d ago' },
];

export const MOCK_TEMPLATES: Template[] = [
  { id: 't1', name: 'Welcome Email', usageCount: 45, conversionRate: 85, isTopPerforming: true },
  { id: 't2', name: 'Client Proposal', usageCount: 230, conversionRate: 92, isTopPerforming: true },
  { id: 't3', name: 'Meeting Agenda', usageCount: 12, conversionRate: 60 },
  { id: 't4', name: 'Follow-up', usageCount: 38, conversionRate: 60 },
  { id: 't5', name: 'Invoice Template', usageCount: 77, conversionRate: 70 },
  { id: 't6', name: 'Newsletter', usageCount: 12, conversionRate: 75 },
];
