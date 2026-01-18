export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">B</span>
          </div>
        </div>
        
        {/* Loading Bar */}
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-loading-bar"></div>
        </div>
        
        <p className="text-gray-500 text-sm mt-4">Loading...</p>
      </div>
    </div>
  );
}