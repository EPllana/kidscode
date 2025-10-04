import React from 'https://aistudiocdn.com/react@^19.1.1';

interface CertificateBannerProps {
  onViewCertificate: () => void;
}

const CertificateBanner: React.FC<CertificateBannerProps> = ({ onViewCertificate }) => {
  return (
    <div className="bg-gradient-to-r from-accent to-yellow-400 text-white p-6 rounded-lg shadow-lg mb-8 flex items-center justify-between flex-col sm:flex-row text-center sm:text-left">
      <div className="mb-4 sm:mb-0">
        <h3 className="text-2xl font-bold">Urime! 🏆</h3>
        <p className="mt-1">Ju keni përfunduar të gjitha mësimet e disponueshme. Punë e shkëlqyer!</p>
      </div>
      <button
        onClick={onViewCertificate}
        className="bg-white text-accent font-bold py-2 px-6 rounded-full hover:bg-yellow-50 transition-transform transform hover:scale-105"
      >
        Shiko Certifikatën
      </button>
    </div>
  );
};

export default CertificateBanner;