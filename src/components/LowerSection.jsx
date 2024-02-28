function LowerSection() {
  return (
    <div>
      <p className="text-center mt-12 mb-3">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div className="border-b-2 border-red-700">
        <img src="3.png" />
        <p className="text-center my-4">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <div>
        <p className="text-center font-bold my-8">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <div className="flex flex-row flex-wrap justify-center mb-10">
          {[
            "CHEMICALS & PROCESS",
            "POWER",
            "WATER & WASTE WATER",
            "OILS & GAS",
            "PHARMA",
            "SUGARS & DISTILLERIES",
            "PAPER & PULP",
            "MARINE & DEFENCE",
            "METAL & MINING",
            "FOOD & BEVERAGE",
            "PETROCHEMICAL & REFINERIES",
            "SOLAR",
            "BUILDING",
            "HVAC",
            "FIRE FIGHTING",
            "AGRICULTURE & RESIDENTIAL",
          ].map((item, i) => (
            <span
              key={item}
              className={`px-3 my-1.5 ${
                i !== 15 && "border-r-2 border-red-500"
              }`}
            >
              {item}
              {i}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LowerSection;
