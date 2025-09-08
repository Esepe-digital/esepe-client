export function EsepeLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center">
        <div className="h-10 w-8 mr-2">
          <svg
            viewBox="0 0 24 32"
            fill="currentColor"
            className="h-full w-full"
          >
            <rect x="0" y="12" width="6" height="20" />
            <rect x="9" y="6" width="6" height="26" />
            <rect x="18" y="0" width="6" height="32" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-wide">ESEPE</h1>
      </div>
      <p className="text-sm uppercase tracking-wider">INMOBILIARIA</p>
    </div>
  );
}
