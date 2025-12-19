export function getVisualsPanelHTML() {
  return `
    <div id="panel-visuals" class="menu-panel menu-hidden absolute top-4 right-4 md:right-24 w-72 glass-panel rounded-2xl p-5 pointer-events-auto z-40">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-bold text-slate-800 text-lg">Visualization</h3>
        <button class="close-panel text-slate-400 hover:text-slate-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div class="space-y-4">
        <!-- Toggles -->
        <div class="flex gap-2">
          <button id="btn-explode" class="flex-1 py-2 px-3 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors shadow-sm">
            Explode
          </button>
          <button id="btn-spin" class="flex-1 py-2 px-3 bg-blue-50 border border-blue-200 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-100 transition-colors shadow-sm">
            Spinning
          </button>
        </div>

        <!-- Zoom Slider -->
        <div class="pt-2 border-t border-slate-100">
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs font-bold text-slate-400 uppercase">Zoom Level</span>
            <span id="zoom-val" class="text-xs font-mono text-slate-500">18.0</span>
          </div>
          <input type="range" id="zoom-slider" min="5" max="50" step="0.5" value="18" />
        </div>

        <!-- Orbitals -->
        <div class="pt-2 border-t border-slate-100">
          <span class="text-xs font-bold text-slate-400 uppercase mb-2 block">Visible Orbitals</span>
          <div class="grid grid-cols-4 gap-2">
            <button class="orbital-toggle active py-1.5 rounded-md text-xs font-bold bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors" data-type="s">s</button>
            <button class="orbital-toggle active py-1.5 rounded-md text-xs font-bold bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition-colors" data-type="p">p</button>
            <button class="orbital-toggle active py-1.5 rounded-md text-xs font-bold bg-rose-100 text-rose-600 hover:bg-rose-200 transition-colors" data-type="d">d</button>
            <button class="orbital-toggle active py-1.5 rounded-md text-xs font-bold bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors" data-type="f">f</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
