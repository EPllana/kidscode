import React, { useState, useEffect } from 'https://aistudiocdn.com/react@^19.1.1';
import Login from './components/Login.tsx';
import Dashboard from './components/Dashboard.tsx';
import LessonView from './components/LessonView.tsx';
import TeacherDashboard from './components/TeacherDashboard.tsx';
import { User, Lesson } from './types.ts';
import { getCurrentUser, logout } from './services/authService.ts';
import { getLessons } from './services/lessonService.ts';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
    setLessons(getLessons());
    setIsLoading(false);
  }, []);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    setSelectedLesson(null);
  };

  const handleSelectLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
  };

  const handleBackToDashboard = () => {
    setSelectedLesson(null);
  };
  
  const renderContent = () => {
    if (!currentUser) {
      return <Login onLogin={handleLogin} />;
    }

    const header = (
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-primary cursor-pointer" onClick={handleBackToDashboard}>
          Code Camp
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-text-light">Mirë se erdhe, <span className="font-semibold text-text-main">{currentUser.username}</span>!</span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
          >
            Dilni
          </button>
        </div>
      </header>
    );

    if (currentUser.role === 'teacher') {
      return (
        <div className="p-4 sm:p-6 lg:p-8">
          {header}
          <main>
            <TeacherDashboard lessons={lessons} />
          </main>
        </div>
      );
    }

    // Student view
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        {header}
        <main>
          {selectedLesson ? (
            <LessonView lesson={selectedLesson} onBack={handleBackToDashboard} />
          ) : (
            <Dashboard lessons={lessons} onSelectLesson={handleSelectLesson} />
          )}
        </main>
      </div>
    );
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen bg-background">Duke u ngarkuar...</div>;
  }

  return (
    <div className="min-h-screen bg-background font-sans text-text-main">
      {renderContent()}
    </div>
  );
};

export default App;
