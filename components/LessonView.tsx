import React, { useState, useEffect } from 'https://aistudiocdn.com/react@^19.1.1';
import { Lesson, User } from '../types.ts';
import CodeEditor from './CodeEditor.tsx';
import { getHint } from '../services/geminiService.ts';
import { markLessonAsCompleted, saveDraft, getDraft, clearDraft } from '../services/lessonService.ts';
import { getCurrentUser } from '../services/authService.ts';

interface LessonViewProps {
  lesson: Lesson;
  onBack: () => void;
}

type Tab = 'Mëso' | 'Testo' | 'Detyrë';

const LessonView: React.FC<LessonViewProps> = ({ lesson, onBack }) => {
  const [activeTab, setActiveTab] = useState<Tab>('Mëso');
  const [testCode, setTestCode] = useState<string>(lesson.learn.exampleCode);
  
  const [homeworkCode, setHomeworkCode] = useState<string>(() => {
    const user = getCurrentUser();
    if (!user) return lesson.homework.starterCode;
    const draft = getDraft(user.id, lesson.id);
    return draft ?? lesson.homework.starterCode;
  });

  const [homeworkResult, setHomeworkResult] = useState<{ success: boolean; message: string } | null>(null);
  const [hint, setHint] = useState<string>('');
  const [isHintLoading, setIsHintLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, []);

  // Save draft on change
  useEffect(() => {
    if (currentUser) {
      saveDraft(currentUser.id, lesson.id, homeworkCode);
    }
  }, [homeworkCode, currentUser, lesson.id]);
  
  const handleRunTestCode = () => {
    const iframe = document.getElementById('test-preview') as HTMLIFrameElement;
    if (iframe) {
      iframe.srcdoc = testCode;
    }
  };
  
  const handleSubmitHomework = () => {
    const result = lesson.homework.solutionCheck(homeworkCode);
    setHomeworkResult(result);
    if (result.success && currentUser) {
      markLessonAsCompleted(currentUser.id, lesson.id);
      clearDraft(currentUser.id, lesson.id);
    }
    const iframe = document.getElementById('homework-preview') as HTMLIFrameElement;
    if (iframe) {
        iframe.srcdoc = homeworkCode;
    }
  };

  const handleGetHint = async () => {
    setIsHintLoading(true);
    setHint('');
    const newHint = await getHint(lesson.homework.prompt, homeworkCode);
    setHint(newHint);
    setIsHintLoading(false);
  };

  const TabButton: React.FC<{ tabName: Tab }> = ({ tabName }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
        activeTab === tabName
          ? 'bg-card text-primary border-b-2 border-primary'
          : 'text-text-light hover:text-text-main'
      }`}
    >
      {tabName}
    </button>
  );

  return (
    <div className="bg-card p-6 rounded-lg shadow-md">
      <button onClick={onBack} className="mb-4 text-sm text-primary hover:underline">
        &larr; Kthehu te Paneli
      </button>
      <h2 className="text-3xl font-bold mb-4">{lesson.title}</h2>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-4">
          <TabButton tabName="Mëso" />
          <TabButton tabName="Testo" />
          <TabButton tabName="Detyrë" />
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === 'Mëso' && (
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold">{lesson.learn.title}</h3>
            <p>{lesson.learn.content}</p>
            <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto"><code className="font-mono">{lesson.learn.exampleCode}</code></pre>
          </div>
        )}
        
        {(activeTab === 'Testo' || activeTab === 'Detyrë') && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    {activeTab === 'Testo' && (
                        <>
                            <p className="mb-2 text-text-light">Provo kodin këtu. Mos ngurro ta ndryshosh dhe të shohësh se çfarë ndodh!</p>
                            <CodeEditor value={testCode} onChange={setTestCode} />
                            <button onClick={handleRunTestCode} className="mt-4 px-4 py-2 bg-secondary text-white rounded-md hover:bg-green-600">Ekzekuto Kodin</button>
                        </>
                    )}
                    {activeTab === 'Detyrë' && (
                        <>
                            <p className="mb-2 font-medium text-text-main">{lesson.homework.prompt}</p>
                            <CodeEditor value={homeworkCode} onChange={setHomeworkCode} disableCopyPaste={true} />
                             <div className="flex items-center space-x-4 mt-4">
                                <button onClick={handleSubmitHomework} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-indigo-700">Dorëzo Detyrën</button>
                                <button onClick={handleGetHint} disabled={isHintLoading} className="px-4 py-2 bg-accent text-white rounded-md hover:bg-amber-600 disabled:bg-gray-400">
                                    {isHintLoading ? 'Duke menduar...' : 'Merr një Ndihmë'}
                                </button>
                            </div>
                            {hint && <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-r-lg"><p><span className="font-bold">Ndihmë:</span> {hint}</p></div>}
                            {homeworkResult && (
                                <div className={`mt-4 p-3 border-l-4 rounded-r-lg ${
                                    homeworkResult.success
                                        ? 'bg-green-100 border-green-500 text-green-700 animate-success-pop'
                                        : 'bg-red-100 border-red-500 text-red-700'
                                }`}>
                                    <p><span className="font-bold">{homeworkResult.success ? 'Sukses!' : 'Provo Përsëri!'}</span> {homeworkResult.message}</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-2">Pamja e Drejtpërdrejtë</h4>
                    <iframe id={activeTab === 'Testo' ? 'test-preview' : 'homework-preview'} className="w-full h-96 border border-gray-300 rounded-md bg-white" title="Preview" srcDoc={activeTab === 'Testo' ? testCode : homeworkCode}></iframe>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default LessonView;