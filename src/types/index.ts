export interface Candidate {
  id: string;
  name: string;
  role: string;
  location: string;
  experience: number;
  skills: string[];
  salary: number;
  availability: string;
  rating: number;
  photoUrl?: string;
}

export interface Filter {
  name: string;
  options: string[];
  selected: string[];
}

export interface MetricData {
  label: string;
  value: number;
  change: number;
  icon: string;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface MapData {
  region: string;
  candidates: number;
  demand: number;
}

export interface CompetitorData {
  name: string;
  hiring: number;
  retention: number;
  satisfaction: number;
}

export interface JobRoleData {
  title: string;
  demand: number;
  supply: number;
  averageSalary: number;
  topSkills: string[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  time: Date;
  read: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  photoUrl?: string;
}