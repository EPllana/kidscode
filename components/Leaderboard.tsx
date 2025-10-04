import React, { useMemo } from 'https://aistudiocdn.com/react@^19.1.1';
import { User, Lesson } from '../types.ts';

interface LeaderboardProps {
  students: User[];
  progress: { [studentId: number]: string[] };
  unlockedLessons: Lesson[];
}

const MedalIcon: React.FC<{ rank: number }> = ({ rank }) => {
  const medalColors = {
    1: 'text-yellow-400', // Gold
    2: 'text-gray-400',   // Silver
    3: 'text-yellow-600'  // Bronze
  };

  if (rank > 3) return null;

  return (
    <svg className={`w-6 h-6 ${medalColors[rank]}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM5.05 3.95a.75.75 0 011.06 0l1.063 1.063a.75.75 0 01-1.06 1.06L5.05 5.01a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.063 1.063a.75.75 0 11-1.06-1.06L14.95 3.95a.75.75 0 011.06 0zM10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V5z" clipRule="evenodd" />
    </svg>
  );
};

const Leaderboard: React.FC<LeaderboardProps> = ({ students, progress, unlockedLessons }) => {
  const rankedStudents = useMemo(() => {
    return students
      .map(student => {
        const completedLessons = progress[student.id] || [];
        const score = unlockedLessons.filter(l => completedLessons.includes(l.id)).length;
        return { ...student, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3); // Get top 3 students
  }, [students, progress, unlockedLessons]);

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-text-main">Studentët më të Mirë</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rankedStudents.map((student, index) => (
          <div key={student.id} className="bg-card p-4 rounded-lg shadow-sm flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-400">{index + 1}</span>
            <MedalIcon rank={index + 1} />
            <div className="flex-1">
              <p className="font-semibold capitalize text-text-main">{student.username}</p>
              <p className="text-sm text-text-light">{student.score} {student.score === 1 ? 'mësim' : 'mësime'} të përfunduara</p>
            </div>
          </div>
        ))}
         {rankedStudents.length === 0 && (
            <p className="text-text-light col-span-full">Askush nuk ka përfunduar ende ndonjë mësim. Gara ka filluar!</p>
         )}
      </div>
    </div>
  );
};

export default Leaderboard;