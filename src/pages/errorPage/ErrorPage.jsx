const ErrorPage = () => {
  return (
    <div className="my-14">
      <div className="text-[14px] flex items-center gap-2 mb-14">
        <span className="text-gray-400">Home</span>
        <span>/</span>
        <span>404 Error</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 h-full w-full p-3 md:p-20">
        <h2 className="text-[35px] md:text-[80px] lg:text-[110px] font-bold">
          404 Not Found
        </h2>
        <p className="text-[14px] md:text-[16px] font-medium">
          Your visited page not found. You may go home page.
        </p>
        <button className="bg-[#DB4444] text-center py-4 p-12 rounded-md text-white mb-4 sm:mb-5">
          Back to home page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
