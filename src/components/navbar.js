export function getNavbarHTML() {
  return `
    <header class="glass h-20 px-4 md:px-8 flex items-center justify-between pointer-events-auto relative z-50">
      <!-- Left: Identity (Icon + Name) -->
      <div class="flex items-center gap-4">
        <!-- Dynamic Category Icon -->
        <div id="nav-icon" class="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300 cat-unknown">
          <span id="nav-symbol" class="text-xl font-bold">C</span>
        </div>

        <div class="flex flex-col">
          <div class="flex items-baseline gap-2">
            <h1 id="nav-name" class="text-2xl font-bold text-slate-800 tracking-tight">Carbon</h1>
            <span id="nav-number" class="text-sm font-mono text-slate-500 font-semibold">#6</span>
          </div>
          <span id="nav-category" class="text-xs font-medium uppercase tracking-wider text-slate-400">Nonmetal</span>
        </div>
      </div>

      <!-- Right: Menu Controls -->
      <div class="flex items-center gap-2 md:gap-4">
        <button id="btn-properties" class="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-600 font-medium">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="hidden md:inline">Properties</span>
        </button>

        <button id="btn-visuals" class="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-600 font-medium">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
          </svg>
          <span class="hidden md:inline">Visuals</span>
        </button>

        <div class="h-8 w-px bg-slate-200 mx-1"></div>

        <button id="btn-table" class="bg-slate-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-slate-700 transition-colors flex items-center gap-2 font-medium">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 2v20M2 10h20"></path>
          </svg>
          <span class="hide-on-mobile">Elements</span>
        </button>
      </div>
    </header>
  `;
}
