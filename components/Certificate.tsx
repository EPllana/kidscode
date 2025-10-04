import React from 'https://aistudiocdn.com/react@^19.1.1';

interface CertificateProps {
  studentName: string;
  onBack: () => void;
}

const Certificate: React.FC<CertificateProps> = ({ studentName, onBack }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-background p-4 sm:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-6 print:hidden">
        <button onClick={onBack} className="text-sm text-primary hover:underline">
          &larr; Kthehu te Paneli
        </button>
        <button onClick={handlePrint} className="px-4 py-2 text-sm font-medium text-white bg-secondary rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
          Printo Certifikatën
        </button>
      </div>

      <div id="certificate" className="bg-white p-8 sm:p-12 lg:p-16 rounded-lg shadow-lg border-4 border-accent relative aspect-[11/8.5]">
        <style>
          {`
            @media print {
              body * {
                visibility: hidden;
              }
              #certificate, #certificate * {
                visibility: visible;
              }
              #certificate {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 1rem;
                border: 10px solid #F59E0B;
                box-sizing: border-box;
              }
            }
          `}
        </style>
        
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-wider" style={{ fontFamily: "'Brush Script MT', cursive" }}>
            Certifikatë Përfundimi
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-text-light">Me krenari i jepet</p>
          <p className="mt-4 sm:mt-8 text-3xl sm:text-5xl lg:text-6xl font-bold text-text-main capitalize" style={{ fontFamily: "'Garamond', serif" }}>
            {studentName}
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-text-light">
            për përfundimin me sukses të të gjitha mësimeve në
          </p>
          <p className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold text-secondary">
            Code Camp for Kids
          </p>

          <div className="mt-8 sm:mt-12 lg:mt-16 flex justify-around">
             <div className="text-center">
                <p className="border-t-2 border-gray-300 pt-2 px-8 text-sm text-text-light">Data</p>
                <p className="font-semibold text-text-main">{new Date().toLocaleDateString('sq-AL')}</p>
             </div>
             <div className="text-center">
                <p className="border-t-2 border-gray-300 pt-2 px-8 text-sm text-text-light">Nënshkrimi i Mësuesit</p>
                <p className="font-semibold text-text-main">Ernis Asllani</p>
             </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 text-5xl text-accent opacity-20">🏆</div>
        <div className="absolute bottom-4 left-4 text-5xl text-accent opacity-20">💻</div>
      </div>
    </div>
  );
};

export default Certificate;
