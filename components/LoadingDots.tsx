// Inspiration on https://vercel.com/design/loading-dots

const LoadingDots = () => (
  <div className="flex space-x-1">
    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-loading-0"></div>
    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-loading-1"></div>
    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-loading-2"></div>
  </div>
);

export default LoadingDots;
