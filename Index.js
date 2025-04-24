// 1. Get all drugs that are antibiotics
const antibiotics = drugs.filter(drug => drug.category === "Antibiotic");

// print out all the antibiotic drug by category
console.log("Antibiotics:", antibiotics);

// 2. Return an array of drug names in lowercase
const lowercaseNames = drugs.map(drug => drug.name.toLowerCase());

// print out the drugs in lowercase
console.log("Lowercase Drug Names:", lowercaseNames);

// 3. Function that accept drugs by category
function getDrugsByCategory(category) {
  return drugs.filter(drug => drug.category === category);
}
// Testing the function by sending drugs by category
console.log("Antimalarials:", getDrugsByCategory("Antimalarial"));

// 4. Log each drug’s name and its manufacturer
// Drug names and manufacturers:

drugs.forEach(drug => {
  console.log(`${drug.name} : ${drug.manufacturer}`);
});

// 5. Return all drugs that require a prescription
const prescriptionDrugs = drugs.filter(drug => drug.isPrescriptionOnly);
// print out output of drug by prescription
console.log("Prescription Drugs:", prescriptionDrugs);


// 6. New array with format "Drug: [name] - [dosageMg]mg"
const formattedDrugs = drugs.map(drug => `Drug: ${drug.name} - ${drug.dosageMg}mg`);
// print out output of formatted drugs
console.log("Formatted Drugs:", formattedDrugs);

// 7. Function that returns all drugs with a stock less than 50
function getLowStockDrugs() {
  return drugs.filter(drug => drug.stock < 50);
}
console.log("Low Stock Drugs:", getLowStockDrugs());

// 8. Return all drugs that are not prescription-only
const nonPrescriptionDrugs = drugs.filter(drug => !drug.isPrescriptionOnly);
// print out output of drug Non-prescribed
console.log("Non-Prescription Drugs:", nonPrescriptionDrugs);

// 9. Function to count drugs by manufacturer
function countByManufacturer(manufacturer) {
  return drugs.filter(drug => drug.manufacturer === manufacturer).length;
}
console.log("Drugs by Pfizer:", countByManufacturer("Pfizer"));

// 10. Use forEach to count how many drugs are Analgesics
let analgesicCount = 0;
drugs.forEach(drug => {
  if (drug.category === "Analgesic") {
    analgesicCount++;
  }
});
// print out output count of analgestic drugs
console.log("Analgesic Count:", analgesicCount);
