
const Background = () => {
  return (
    <div className="min-h-screen bg-[#f7f6f4] z-0 w-screen overflow-y-clip">
      <div className="relative flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-[#f7f6f4] shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all duration-300 hover:shadow-[inset_0_0_50px_rgba(0,0,0,0.15)]">
          <div className="w-[600px] h-[600px] rounded-full bg-[#f7f6f4] shadow-[inset_0_0_30px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-300 hover:shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]">
            <div className="w-[400px] h-[400px] rounded-full bg-[#f7f6f4] shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] flex items-center justify-center transition-all duration-300 hover:shadow-[inset_0_0_30px_rgba(0,0,0,0.25)]">
              <div className="w-[200px] h-[200px] rounded-full bg-black/10 transition-all duration-300">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;