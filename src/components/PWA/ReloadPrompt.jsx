import { useRegisterSW } from 'virtual:pwa-register/react';

const ReloadPrompt = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      // Check for updates every hour
      if (r) {
        setInterval(() => {
          r.update();
        }, 60 * 60 * 1000);
      }
    },
    onRegisterError(error) {
      console.error('SW registration error:', error);
    },
  });

  const close = () => {
    setNeedRefresh(false);
  };

  if (!needRefresh) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-white border border-gray-200 rounded-xl shadow-2xl px-5 py-4 flex items-center gap-4 max-w-md">
        <div className="flex-shrink-0">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900">New version available!</p>
          <p className="text-xs text-gray-500">Refresh to get the latest features.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateServiceWorker(true)}
            className="btn-primary !py-2 !px-4 text-sm"
          >
            Update
          </button>
          <button
            onClick={close}
            className="text-gray-400 hover:text-gray-600 p-1 transition-colors"
            aria-label="Dismiss"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReloadPrompt;
