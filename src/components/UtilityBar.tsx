export default function UtilityBar() {
  return (
    <div className="bg-[#011A35] text-white py-2 px-6 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] tracking-widest uppercase font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            3450 SW 9th St, Miami, FL 33135
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">call</span>
            (305) 555-0199
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">schedule</span>
            Sales: 9AM-8PM | Service: 7AM-6PM
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#7fbafe] transition-colors">
              <span className="material-symbols-outlined text-[14px]">public</span>
            </a>
            <a href="#" className="hover:text-[#7fbafe] transition-colors">
              <span className="material-symbols-outlined text-[14px]">share</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
