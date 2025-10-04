import { LESSONS } from '../constants.ts';
import { Lesson } from '../types.ts';

const UNLOCKED_LESSONS_KEY = 'unlocked_lessons';

export const getLessons = (): Lesson[] => {
  return LESSONS;
};

export const getLessonById = (id: string): Lesson | undefined => {
  return LESSONS.find(lesson => lesson.id === id);
};

export const getCompletedLessons = (userId: number): string[] => {
  const key = `progress_${userId}`;
  const progressJson = localStorage.getItem(key);
  return progressJson ? JSON.parse(progressJson) : [];
};

export const markLessonAsCompleted = (userId: number, lessonId: string): void => {
  const key = `progress_${userId}`;
  const completed = getCompletedLessons(userId);
  if (!completed.includes(lessonId)) {
    const newCompleted = [...completed, lessonId];
    localStorage.setItem(key, JSON.stringify(newCompleted));
  }
};

export const getUnlockedLessonIds = (): string[] => {
  const unlockedJson = localStorage.getItem(UNLOCKED_LESSONS_KEY);
  return unlockedJson ? JSON.parse(unlockedJson) : [];
};

export const unlockLesson = (lessonId: string): void => {
  const unlocked = getUnlockedLessonIds();
  if (!unlocked.includes(lessonId)) {
    const newUnlocked = [...unlocked, lessonId];
    localStorage.setItem(UNLOCKED_LESSONS_KEY, JSON.stringify(newUnlocked));
  }
};

export const saveDraft = (userId: number, lessonId: string, code: string): void => {
  const key = `draft_${userId}_${lessonId}`;
  localStorage.setItem(key, code);
};

export const getDraft = (userId: number, lessonId: string): string | null => {
  const key = `draft_${userId}_${lessonId}`;
  return localStorage.getItem(key);
};

export const clearDraft = (userId: number, lessonId: string): void => {
  const key = `draft_${userId}_${lessonId}`;
  localStorage.removeItem(key);
};