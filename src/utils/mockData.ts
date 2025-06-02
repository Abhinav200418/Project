import { Candidate, MetricData, ChartData, MapData, CompetitorData, JobRoleData, Notification, Filter } from '../types';

// Browser-compatible UUID generation
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// Mock metrics for dashboard
export const metrics: MetricData[] = [
  { label: 'Available Candidates', value: 2458, change: 12, icon: 'users' },
  { label: 'Active Job Roles', value: 189, change: -5, icon: 'briefcase' },
  { label: 'Ongoing Projects', value: 32, change: 8, icon: 'folder' },
  { label: 'Talent Gap Index', value: 76, change: 3, icon: 'bar-chart' }
];

// Mock chart data
export const talentTrendData: ChartData[] = [
  { name: 'Jan', value: 1200 },
  { name: 'Feb', value: 1900 },
  { name: 'Mar', value: 1500 },
  { name: 'Apr', value: 1800 },
  { name: 'May', value: 2200 },
  { name: 'Jun', value: 2400 }
];

// Mock skill distribution data
export const skillDistributionData: ChartData[] = [
  { name: 'JavaScript', value: 25 },
  { name: 'Python', value: 18 },
  { name: 'Java', value: 15 },
  { name: 'DevOps', value: 12 },
  { name: 'React', value: 10 },
  { name: 'Cloud', value: 20 }
];

// Mock map data
export const mapData: MapData[] = [
  { region: 'North America', candidates: 850, demand: 920 },
  { region: 'Europe', candidates: 720, demand: 680 },
  { region: 'Asia Pacific', candidates: 950, demand: 1100 },
  { region: 'Latin America', candidates: 320, demand: 280 },
  { region: 'Africa', candidates: 180, demand: 120 }
];

// Mock competitor data
export const competitorData: CompetitorData[] = [
  { name: 'TechGiant', hiring: 85, retention: 76, satisfaction: 82 },
  { name: 'InnovaCorp', hiring: 72, retention: 81, satisfaction: 79 },
  { name: 'DevStars', hiring: 90, retention: 68, satisfaction: 75 },
  { name: 'CodeMasters', hiring: 78, retention: 72, satisfaction: 80 }
];

// Mock job role data
export const jobRoleData: JobRoleData[] = [
  { 
    title: 'Full-Stack Developer', 
    demand: 92, 
    supply: 78, 
    averageSalary: 110000, 
    topSkills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'AWS']
  },
  { 
    title: 'Data Scientist', 
    demand: 88, 
    supply: 65, 
    averageSalary: 125000, 
    topSkills: ['Python', 'TensorFlow', 'SQL', 'Machine Learning', 'Statistics']
  },
  { 
    title: 'DevOps Engineer', 
    demand: 85, 
    supply: 60, 
    averageSalary: 115000, 
    topSkills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux']
  },
  { 
    title: 'UX Designer', 
    demand: 78, 
    supply: 72, 
    averageSalary: 95000, 
    topSkills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'UI Design']
  }
];

// Mock notifications
export const notifications: Notification[] = [
  {
    id: '1',
    title: 'Talent Surge Alert',
    message: 'Significant increase in Full-Stack Developer availability in North America.',
    type: 'info',
    time: new Date('2023-05-15T09:24:00'),
    read: false
  },
  {
    id: '2',
    title: 'Report Generated',
    message: 'Q2 Talent Analytics Report is ready for download.',
    type: 'success',
    time: new Date('2023-05-14T14:30:00'),
    read: true
  },
  {
    id: '3',
    title: 'Critical Skill Gap',
    message: 'Critical shortage of Cloud Security experts identified.',
    type: 'warning',
    time: new Date('2023-05-13T11:45:00'),
    read: false
  },
  {
    id: '4',
    title: 'Data Update Failed',
    message: 'Failed to update competitor analysis data. Please retry.',
    type: 'error',
    time: new Date('2023-05-12T16:20:00'),
    read: true
  }
];

// Mock filters
export const candidateFilters: Filter[] = [
  { 
    name: 'Role',
    options: ['Developer', 'Designer', 'Product Manager', 'Data Scientist', 'DevOps Engineer'],
    selected: []
  },
  { 
    name: 'Skills',
    options: ['JavaScript', 'Python', 'React', 'Node.js', 'AWS', 'UI/UX', 'Figma', 'Data Analysis'],
    selected: []
  },
  { 
    name: 'Experience',
    options: ['0-2 years', '3-5 years', '6-10 years', '10+ years'],
    selected: []
  },
  { 
    name: 'Availability',
    options: ['Immediate', '2 weeks', '1 month', '3 months'],
    selected: []
  },
  { 
    name: 'Location',
    options: ['Remote', 'North America', 'Europe', 'Asia Pacific', 'Latin America', 'Africa'],
    selected: []
  }
];

// Mock candidates
export const candidates: Candidate[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Senior Full-Stack Developer',
    location: 'San Francisco, CA',
    experience: 7,
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'AWS'],
    salary: 120000,
    availability: 'Immediate',
    rating: 4.8,
    photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Data Scientist',
    location: 'New York, NY',
    experience: 5,
    skills: ['Python', 'TensorFlow', 'SQL', 'Machine Learning', 'Statistics'],
    salary: 110000,
    availability: '2 weeks',
    rating: 4.5,
    photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'UX/UI Designer',
    location: 'Austin, TX',
    experience: 4,
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'UI Design'],
    salary: 95000,
    availability: '1 month',
    rating: 4.6,
    photoUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'DevOps Engineer',
    location: 'Seattle, WA',
    experience: 6,
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux'],
    salary: 115000,
    availability: 'Immediate',
    rating: 4.7,
    photoUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '5',
    name: 'Lisa Wang',
    role: 'Product Manager',
    location: 'Chicago, IL',
    experience: 8,
    skills: ['Product Strategy', 'Agile', 'User Stories', 'Roadmapping', 'Analytics'],
    salary: 130000,
    availability: '3 months',
    rating: 4.9,
    photoUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'Frontend Developer',
    location: 'Remote',
    experience: 3,
    skills: ['JavaScript', 'React', 'TypeScript', 'CSS', 'HTML'],
    salary: 90000,
    availability: '2 weeks',
    rating: 4.4,
    photoUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

// Function to generate a new candidate
export const createNewCandidate = (data: Omit<Candidate, 'id'>): Candidate => {
  return {
    ...data,
    id: generateUUID()
  };
};