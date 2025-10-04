import React, { useState, useEffect, useMemo } from 'https://aistudiocdn.com/react@^19.1.1';
import { Lesson, User } from '../types.ts';
import { getCompletedLessons, getUnlockedLessonIds, unlockLesson } from '../services/lessonService.ts';
import { USERS } from '../constants.ts';
import Leaderboard from './Leaderboard.tsx';

interface TeacherDashboardProps {
  lessons: Lesson[];
}

interface Progress {
  [studentId: number]: string[];
}

const StatusIcon: React.FC<{ lesson: Lesson; completedLessons: string[]; unlockedLessons: string[] }> = ({ lesson, completedLessons, unlockedLessons }) => {
    const isLockedForEveryone = lesson.locked && !unlockedLessons.includes(lesson.id);
    const isCompleted = completedLessons?.includes(lesson.id);

    if (isLockedForEveryone) {
        return (
            <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full" title="I bllokuar">
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v2H4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm2 6V6a2 2 0 10-4 0v2h4z" clipRule="evenodd"></path></svg>
            </span>
        );
    }
    if (isCompleted) {
        return (
            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full" title="Përfunduar">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </span>
        );
    }
    return (
        <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full" title="E padorëzuar">
            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </span>
    );
};


const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ lessons }) => {
  const [progress, setProgress] = useState<Progress>({});
  const [unlockedLessons, setUnlockedLessons] = useState<string[]>([]);
  const students = useMemo(() => USERS.filter(u => u.role === 'student'), []);

  useEffect(() => {
    const allProgress: Progress = {};
    for (const student of students) {
      allProgress[student.id] = getCompletedLessons(student.id);
    }
    setProgress(allProgress);
    setUnlockedLessons(getUnlockedLessonIds());
  }, [students]);

  const handleUnlockLesson = (lessonId: string) => {
    unlockLesson(lessonId);
    setUnlockedLessons(prev => [...prev, lessonId]);
  };
  
  const unlockedAndAvailableLessons = useMemo(() => lessons.filter(l => !l.locked || unlockedLessons.includes(l.id)), [lessons, unlockedLessons]);

  if (students.length === 0) {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-2">Paneli i Mësuesit</h2>
        <div className="bg-card p-8 rounded-lg shadow-md text-center mt-8">
            <h3 className="text-xl font-semibold text-text-main">Nuk ka studentë të regjistruar ende.</h3>
            <p className="text-text-light mt-2">Kur studentët të regjistrohen, progresi i tyre do të shfaqet këtu.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Paneli i Mësuesit</h2>
      <p className="text-text-light mb-8">Këtu është një pasqyrë e detyrave të përfunduara të studentëve tuaj. Ju mund të zhbllokoni mësime të reja për të gjithë.</p>

      <Leaderboard students={students} progress={progress} unlockedLessons={unlockedAndAvailableLessons} />
      
      {/* Desktop Table View */}
      <div className="hidden md:block bg-card rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="sticky left-0 bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider z-10">
                  Studenti
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Përfundimi
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Progresi
                </th>
                {lessons.map(lesson => (
                    <th key={lesson.id} scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex flex-col items-center justify-center space-y-2">
                        <span>{lesson.title}</span>
                        {lesson.locked && !unlockedLessons.includes(lesson.id) && (
                            <button
                            onClick={() => handleUnlockLesson(lesson.id)}
                            className="px-2 py-1 text-xs text-white bg-primary rounded hover:bg-indigo-700 transition"
                            >
                            Zhblloko
                            </button>
                        )}
                        {lesson.locked && unlockedLessons.includes(lesson.id) && (
                            <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full font-semibold">
                            I zhbllokuar
                            </span>
                        )}
                        </div>
                    </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => {
                const completedCount = unlockedAndAvailableLessons.filter(l => progress[student.id]?.includes(l.id)).length;
                const percentage = unlockedAndAvailableLessons.length > 0 ? Math.round((completedCount / unlockedAndAvailableLessons.length) * 100) : 0;
                
                return (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="sticky left-0 bg-white hover:bg-gray-50 px-6 py-4 whitespace-nowrap z-10">
                      <div className="text-sm font-medium text-gray-900 capitalize">{student.username}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="text-sm font-medium text-gray-900">{percentage}%</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap min-w-[200px]">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-secondary h-2.5 rounded-full transition-all duration-500" style={{ width: `${percentage}%` }}></div>
                      </div>
                    </td>
                    {lessons.map(lesson => (
                      <td key={lesson.id} className="px-6 py-4 whitespace-nowrap text-center">
                          <StatusIcon lesson={lesson} completedLessons={progress[student.id]} unlockedLessons={unlockedLessons} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Mobile Card View */}
      <div className="md:hidden space-y-6">
        <div>
            <h3 className="text-xl font-semibold mb-3 text-text-main">Menaxhimi i Mësimeve</h3>
            <div className="space-y-2">
            {lessons.filter(l => l.locked).map(lesson => (
                <div key={lesson.id} className="bg-card p-3 rounded-lg shadow-sm flex justify-between items-center">
                    <span className="text-sm font-medium text-text-main">{lesson.title}</span>
                    {!unlockedLessons.includes(lesson.id) ? (
                        <button onClick={() => handleUnlockLesson(lesson.id)} className="px-3 py-1 text-xs text-white bg-primary rounded-full hover:bg-indigo-700 transition">
                            Zhblloko
                        </button>
                    ) : (
                         <span className="px-3 py-1 text-xs text-green-800 bg-green-100 rounded-full font-semibold">
                            I zhbllokuar
                        </span>
                    )}
                </div>
            ))}
            </div>
        </div>

        <div>
            <h3 className="text-xl font-semibold mb-3 text-text-main">Progresi i Studentëve</h3>
            {students.map(student => {
                 const completedCount = unlockedAndAvailableLessons.filter(l => progress[student.id]?.includes(l.id)).length;
                 const percentage = unlockedAndAvailableLessons.length > 0 ? Math.round((completedCount / unlockedAndAvailableLessons.length) * 100) : 0;
                 
                 return (
                    <div key={student.id} className="bg-card p-4 rounded-lg shadow-sm mb-4">
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="font-bold text-lg capitalize text-primary">{student.username}</h4>
                            <span className="text-sm font-semibold text-text-main">{percentage}%</span>
                        </div>
                         <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                            <div className="bg-secondary h-2 rounded-full transition-all duration-500" style={{ width: `${percentage}%` }}></div>
                        </div>
                        <div className="space-y-2">
                        {lessons.map(lesson => (
                            <div key={lesson.id} className="flex justify-between items-center text-sm">
                                <span className="text-text-light">{lesson.title}</span>
                                <StatusIcon lesson={lesson} completedLessons={progress[student.id]} unlockedLessons={unlockedLessons} />
                            </div>
                        ))}
                        </div>
                    </div>
                );
            })}
        </div>
      </div>

    </div>
  );
};

export default TeacherDashboard;