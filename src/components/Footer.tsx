export default function Footer() {
  return (
    <footer className="mt-3">
      <div className="w-full bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 font-bold bg-black rounded-md flex items-center justify-center">
              <img src="kr-white.png" alt="krea logo" className="w-10 h-10" />
            </div>
            <div>
              <div className="text-md font-semibold">Krea AI</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-md text-white">curated by</div>
            <div className="font-bold flex justify-center items-center gap-1 text-white">
              <span>
                <img src="mo.png" alt="" className="w-15 h-15" />
              </span>
              Mobbin
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
