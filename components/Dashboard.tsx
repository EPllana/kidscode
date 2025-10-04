import React, { useState, useEffect } from 'https://aistudiocdn.com/react@^19.1.1';
import { Lesson, User } from '../types.ts';
import { getCompletedLessons, getUnlockedLessonIds } from '../services/lessonService.ts';
import { getCurrentUser } from '../services/authService.ts';
import Certificate from './Certificate.tsx';
import CertificateBanner from './CertificateBanner.tsx';

interface DashboardProps {
  lessons: Lesson[];
  onSelectLesson: (lesson: Lesson) => void;
}

const CategoryBadge: React.FC<{ category: 'HTML' | 'CSS' | 'JavaScript' }> = ({ category }) => {
    const colors = {
        HTML: 'bg-orange-100 text-orange-800',
        CSS: 'bg-blue-100 text-blue-800',
        JavaScript: 'bg-yellow-100 text-yellow-800'
    };
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${colors[category]}`}>{category}</span>;
}

const DifficultyBadge: React.FC<{ difficulty: 'Lehtë' | 'Mesatar' | 'Vështirë' }> = ({ difficulty }) => {
    const colors = {
        Lehtë: 'bg-green-100 text-green-800',
        Mesatar: 'bg-yellow-100 text-yellow-800',
        Vështirë: 'bg-red-100 text-red-800'
    };
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${colors[difficulty]}`}>{difficulty}</span>;
}

const Dashboard: React.FC<DashboardProps> = ({ lessons, onSelectLesson }) => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [unlockedLessons, setUnlockedLessons] = useState<string[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      setCompletedLessons(getCompletedLessons(currentUser.id));
    }
    setUnlockedLessons(getUnlockedLessonIds());
  }, []);

  const unlockedAndAvailableLessons = lessons.filter(l => !l.locked || unlockedLessons.includes(l.id));
  const allLessonsCompleted = unlockedAndAvailableLessons.length > 0 && unlockedAndAvailableLessons.every(l => completedLessons.includes(l.id));

  if (showCertificate && user) {
    return <Certificate studentName={user.username} onBack={() => setShowCertificate(false)} />;
  }

  return (
    <div>
      {allLessonsCompleted && <CertificateBanner onViewCertificate={() => setShowCertificate(true)} />}
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Shtegu Juaj i të Mësuarit</h2>
      <p className="text-text-light mb-6 md:mb-8">Zgjidhni një mësim për të filluar sfidën tuaj të radhës të kodimit!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {lessons.map((lesson) => {
            const isLocked = lesson.locked && !unlockedLessons.includes(lesson.id);
            const cardClasses = isLocked
            ? "bg-gray-100 p-6 rounded-lg shadow-inner cursor-not-allowed flex flex-col justify-between opacity-60"
            : "bg-card p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between";
          
          return (
          <div
            key={lesson.id}
            onClick={() => !isLocked && onSelectLesson(lesson)}
            className={cardClasses}
          >
            <div>
                <div className="flex justify-between items-start mb-2">
                    <CategoryBadge category={lesson.category} />
                    {isLocked ? (
                        <div className="flex items-center text-gray-500" title="I bllokuar">
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v2H4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm2 6V6a2 2 0 10-4 0v2h4z" clipRule="evenodd"></path></svg>
                        </div>
                    ) : completedLessons.includes(lesson.id) && (
                        <div className="flex items-center text-secondary">
                            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-semibold">Përfunduar</span>
                        </div>
                    )}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-text-main">{lesson.title}</h3>
            </div>
            <div className="mt-4">
                <DifficultyBadge difficulty={lesson.difficulty} />
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;