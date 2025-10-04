export interface User {
  id: number;
  username: string;
  password?: string; 
  role: 'student' | 'teacher';
}

export interface LearnContent {
  title: string;
  content: string;
  exampleCode: string;
}

export interface Homework {
  prompt: string;
  starterCode: string;
  solutionCheck: (code: string) => { success: boolean, message: string };
}

export interface Lesson {
  id: string;
  title: string;
  category: 'HTML' | 'CSS' | 'JavaScript';
  difficulty: 'Lehtë' | 'Mesatar' | 'Vështirë';
  learn: LearnContent;
  homework: Homework;
  locked: boolean;
}