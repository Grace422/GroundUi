
const Background = () => {
  return (
    <div className="h-screen bg-[#f7f6f4] z-0 w-screen overflow-y-clip ">
      <div className="relative flex items-center justify-center">
        <div className="max-w-[800px] w-full aspect-square rounded-full bg-[#f7f6f4] shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all duration-300 hover:shadow-[inset_0_0_50px_rgba(0,0,0,0.15)]">
          <div className="max-w-[600px] w-full aspect-square rounded-full bg-[#f7f6f4] shadow-[inset_0_0_30px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-300 hover:shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]">
            <div className="max-w-[400px] w-full aspect-square rounded-full bg-[#f7f6f4] shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] flex items-center justify-center transition-all duration-300 hover:shadow-[inset_0_0_30px_rgba(0,0,0,0.25)]">
              <div className="max-w-[200px] w-full aspect-square rounded-full bg-black/10 transition-all duration-300">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;