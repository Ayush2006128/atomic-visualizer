export function getDrawerHTML() {
  return `
    <div id="drawer-table" class="absolute bottom-0 left-0 right-0 z-50 transform translate-y-[110%] transition-transform duration-300 ease-in-out pointer-events-auto">
      <div class="glass-panel rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col max-h-[60vh]">
        <!-- Drawer Header -->
        <div class="p-4 flex justify-between items-center border-b border-slate-100">
          <div class="relative w-full max-w-md mx-auto">
            <input type="text" id="element-search" placeholder="Search element (e.g. Gold, Au, 79)" class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all shadow-inner" />
            <svg class="w-5 h-5 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <button id="close-drawer" class="ml-4 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-800">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>

        <!-- Drawer Content -->
        <div class="overflow-y-auto scroller p-4">
          <div id="pt-grid" class="pt-grid hidden lg:grid"></div>
          <div id="mobile-list" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 lg:hidden"></div>
        </div>
      </div>
    </div>
  `;
}
