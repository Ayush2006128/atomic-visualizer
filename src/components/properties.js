export function getPropertiesPanelHTML() {
  return `
    <div id="panel-properties" class="menu-panel menu-hidden absolute top-4 right-4 md:right-8 w-80 glass-panel rounded-2xl p-6 pointer-events-auto z-40">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-bold text-slate-800 text-lg">Properties</h3>
        <button class="close-panel text-slate-400 hover:text-slate-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div class="space-y-4">
        <div class="flex justify-between border-b border-slate-100 pb-2">
          <span class="text-sm text-slate-500 font-medium">Atomic Mass</span>
          <span id="prop-mass" class="text-sm font-bold font-mono text-slate-700">12.011 u</span>
        </div>

        <div class="flex justify-between border-b border-slate-100 pb-2">
          <span class="text-sm text-slate-500 font-medium">Configuration</span>
          <span id="prop-config" class="text-sm font-bold font-mono text-slate-700">1s² 2s² 2p²</span>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="bg-slate-50 p-3 rounded-lg">
            <div class="text-xs text-slate-400 uppercase font-bold mb-1">Phase</div>
            <div id="prop-phase" class="text-sm font-semibold text-slate-700">Solid</div>
          </div>
          <div class="bg-slate-50 p-3 rounded-lg">
            <div class="text-xs text-slate-400 uppercase font-bold mb-1">Electronegativity</div>
            <div id="prop-electroneg" class="text-sm font-semibold text-slate-700">2.55</div>
          </div>
        </div>

        <p id="prop-desc" class="text-sm text-slate-500 leading-relaxed italic border-t border-slate-100 pt-3">
          Carbon is a chemical element with the symbol C and atomic number 6. It is nonmetallic and tetravalent.
        </p>
      </div>
    </div>
  `;
}
