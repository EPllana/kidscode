import React, { useState } from 'https://aistudiocdn.com/react@^19.1.1';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  disableCopyPaste?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, disableCopyPaste = false }) => {
  const [showWarning, setShowWarning] = useState(false);

  const handleBlockedAction = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    if (disableCopyPaste) {
      e.preventDefault();
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
    }
  };

  return (
    <div className="relative h-80">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onPaste={handleBlockedAction}
        onCopy={handleBlockedAction}
        onCut={handleBlockedAction}
        className="w-full h-full p-4 font-mono text-sm bg-gray-800 text-white rounded-md border-gray-600 focus:ring-primary focus:border-primary resize-none"
        spellCheck="false"
        autoCapitalize="off"
        autoCorrect="off"
      />
      {showWarning && (
        <div className="absolute bottom-2 right-2 bg-red-500 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-lg">
          Kopjimi dhe ngjitja janë çaktivizuar. Provo ta shkruash kodin vetë!
        </div>
      )}
    </div>
  );
};

export default CodeEditor;