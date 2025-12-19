import periodicTable from "../periodic-table.json";

export const elementsData = periodicTable.elements.map((e) => ({
  z: e.number,
  s: e.symbol,
  n: e.name,
  m: e.atomic_mass,
  c: e.category
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" "),
  conf: e.electron_configuration_semantic,
  desc: e.summary,
  phase: e.phase,
  en: e.electronegativity_pauling || "-",
}));

export function getElement(z) {
  const found = elementsData.find((e) => e.z === z);
  if (found) return found;
  return {
    z: z,
    s: "Xx",
    n: `Element ${z}`,
    m: z * 2,
    c: "Unknown",
    conf: "Unknown",
    desc: "Data not loaded.",
    phase: "-",
    en: "-",
  };
}

export function getCategoryClass(cat) {
  if (cat.includes("Alkali")) return "cat-alkali";
  if (cat.includes("Alkaline")) return "cat-alkaline";
  if (cat.includes("Transition")) return "cat-transition";
  if (cat.includes("Post")) return "cat-post-transition";
  if (cat.includes("Metalloid")) return "cat-metalloid";
  if (cat.includes("Nonmetal")) return "cat-nonmetal";
  if (cat.includes("Noble")) return "cat-noble";
  if (cat.includes("Lanthanide")) return "cat-lanthanide";
  if (cat.includes("Actinide")) return "cat-actinide";
  return "cat-unknown";
}
