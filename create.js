function elementAlert(elem) {
    msg = elem.name + "<br>" + "Atomic Number: " + elem.atomicNum + "<br>" + "Number of Protons: " + elem.protons + "<br>" + "Number of Neutrons: " + elem.neutrons + "<br>" + "Number of Electrons: " + elem.electrons + "<br>" + "Atomic Mass: " + elem.atomicMass + "<br>" + "Fact: " + elem.fact + "<br>" + "Link: " + elem.link;
    document.getElementById("output").innerHTML = msg;
    document.getElementById("output").className = "alert alert-info";
}

function Element(name, atomicNum, atomicMass, fact, link) {
    this.name = name;
    this.atomicNum = atomicNum;
    this.protons = this.atomicNum;
    this.electrons = this.protons;
    this.atomicMass = atomicMass;
    this.neutrons = Math.round(this.atomicMass - this.protons);
    this.fact = fact;
    this.link = link.link(link);
}

var H = new Element("HYDROGEN", 1, 1.008, "The word hydrogen comes from the greek roots hydro which means water and genes which means forming", "https://en.wikipedia.org/wiki/Hydrogen");
var He = new Element("HELIUM", 2, 4.003, "Helium has the lowest boiling point out on the periodic table", "https://en.wikipedia.org/wiki/Helium");
var Li = new Element("LITHIUM", 3, 6.941, "Lithium is the lightest metal", "https://en.wikipedia.org/wiki/Lithium");
var Be = new Element("BERYLLIUM", 4, 9.012, "The United States, China, and Kazakhstan are the only countries involved in the production of Beryllium", "https://en.wikipedia.org/wiki/Beryllium");
var B = new Element("BORON", 5, 10.811, "Boron is found in meteroids", "https://en.wikipedia.org/wiki/Boron");
var C = new Element("CARBON", 6, 12.011, "Carbon occurs in all living organisms", "https://en.wikipedia.org/wiki/Carbon");
var N = new Element("NITROGEN", 7, 14.007, "78% of Earth's atmosphere is made of nitrogen gas", "https://en.wikipedia.org/wiki/Nitrogen");
var O = new Element("OXYGEN", 8, 15.999, "Oxygen's solubility in water makes life for underwater animals possible", "https://en.wikipedia.org/wiki/Oxygen");
var F = new Element("FLUORINE", 9, 18.998, "The most reactive element on the periodic table", "https://en.wikipedia.org/wiki/Fluorine");
var Ne = new Element("NEON", 10, 20.180, "Neon will not react with any other element", "https://en.wikipedia.org/wiki/Neon");
var Na = new Element("SODIUM", 11, 22.990, "Sodium will tarnish within seconds of being exposed to air", "https://en.wikipedia.org/wiki/Sodium");
var Mg = new Element("MAGNESIUM", 12, 24.305, "Magnesium is used in flares, fireworks, and sparklers because it emits a bright light when it burns", "https://en.wikipedia.org/wiki/Magnesium");
var Al = new Element("ALUMINUM", 13, 26.982, "Aluminum is used for consumer products because its low density and high thermal activity", "https://en.wikipedia.org/wiki/Aluminum");
var Si = new Element("SILICON", 14, 28.086, "Ultrapure forms of this element are used as semiconductors in computers and microelectronics", "https://en.wikipedia.org/wiki/Silicon");
var P = new Element("PHOSPHORUS", 15, 30.974, "Phosphorus forms Sugar-Phosphate which is the backbone of DNA and RNA", "https://en.wikipedia.org/wiki/Phosphorus");
var S = new Element("SULFUR", 16, 32.065, "Sulfer naturally forms near volcanic areas", "https://en.wikipedia.org/wiki/Sulfur");
var Cl = new Element("CHLORINE", 17, 35.453, "It was used as a chemical weapon in World War I", "https://en.wikipedia.org/wiki/Chlorine");
var Ar = new Element("ARGON", 18, 39.948, "Tires of luxury cars contain argon to reduce noise", "https://en.wikipedia.org/wiki/Argon");
var K = new Element("POTASSIUM", 19, 39.098, "Potassium is used to control fluid and electrolyte balance in the human body", "https://en.wikipedia.org/wiki/Potassium");
var Ca = new Element("CALCIUM", 20, 40.078, "Calicum is essential for the healthy development of strong bones and teeth in the human body", "https://en.wikipedia.org/wiki/Calcium");
var Sc = new Element("SCANDIUM", 21, 44.956, "The element is named after Scandinavia", "https://en.wikipedia.org/wiki/Scandium");
var Ti = new Element("TITANIUM", 22, 47.87, "Titanium is used in aircraft, spacecraft, and missiles because it has a very low density, is extremely strong, and does not melt easily", "https://en.wikipedia.org/wiki/Titanium");
var V = new Element("VANADIUM", 23, 50.942, "Around 80% of the vanadium produced is used as a steel additive", "https://en.wikipedia.org/wiki/Vanadium");
var Cr = new Element("CHROMIUM", 24, 51.996, "Chromium plating can give a substance a polished mirrored finish", "https://en.wikipedia.org/wiki/Chromium");
var Mn = new Element("MANGANESE", 25, 54.938, "The human body contains 12 milligrams of manganese to keep bones from breaking easily", "https://en.wikipedia.org/wiki/Manganese");
var Fe = new Element("IRON", 26, 55.845, "90% of all refined metal is iron", "https://en.wikipedia.org/wiki/Iron");
var Co = new Element("COBALT", 27, 58.933, "A radioactive isotope of colbalt is used to treat cancer", "https://en.wikipedia.org/wiki/Cobalt");
var Ni = new Element("NICKEL", 28, 58.693, "The US nickel coin contains only 25% of the element nickel", "https://en.wikipedia.org/wiki/Nickel");
var Cu = new Element("COPPER", 29, 63.546, "Copper is the first metal to be used by humans", "https://en.wikipedia.org/wiki/Copper");
var Zn = new Element("ZINC", 30, 65.39, "Zinc is used in the hardware, electrical, and automobile industry", "https://en.wikipedia.org/wiki/Zinc");
var Ga = new Element("GALLIUM", 31, 69.723, "Gallium will melt in your hand", "https://en.wikipedia.org/wiki/Gallium");
var Ge = new Element("GERMANIUM", 32, 72.61, "Germanium oxide is used in camera and microscope lenses because of its refraction and dispertion abilities", "https://en.wikipedia.org/wiki/Germanium");
var As = new Element("ARSENIC", 33, 74.922, "Arsenic is a well known form of poison, but it is also used for medical purposes", "https://en.wikipedia.org/wiki/Arsenic");
var Se = new Element("SELENIUM", 34, 78.96, "Every cell in the human body contains over one million selenium atoms", "https://en.wikipedia.org/wiki/Selenium");
var Br = new Element("BROMINE", 35, 79.904, "At room temprature, Bromine is a red, oily liquid that is toxic", "https://en.wikipedia.org/wiki/Bromine");
var Kr = new Element("KRYPTON", 36, 83.80, "From 1960 to 1983, the wavelength of an isotope of Krypton was used to measure length", "https://en.wikipedia.org/wiki/Krypton");
var Rb = new Element("RUBIDIUM", 37, 85.468, "Because of its radioactivity, rubidium has been used to locate brain tumours", "https://en.wikipedia.org/wiki/Rubidium");
var Sr = new Element("STRONTIUM", 38, 87.62, "A strontium compound is used for glow in the dark paints", "https://en.wikipedia.org/wiki/Stontium");
var Y = new Element("YTTRIUM", 39, 88.906, "Yttrium combined with Aluminium and Garnet produce lasers that can cut through metal", "https://en.wikipedia.org/wiki/Yttrium");
var Zr = new Element("SIRCONIUM", 40, 91.244, "Sirconium does not absord neutrons", "https://en.wikipedia.org/wiki/Sirconium");
var Nb = new Element("NIOBIUM", 41, 92.906, "The element's superconductor magnents is used in MRI scanners", "https://en.wikipedia.org/wiki/Niubium");
var Mo = new Element("MOLYBDENUM", 42, 95.45, "50 different enzymes in plants and animals use small amounts of molybdenum", "https://en.wikipedia.org/wiki/Molybdenum");
var Tc = new Element("TECHNETIUM", 43, 98, "This element is not found naturally, it is only made artifically", "https://en.wikipedia.org/wiki/Technetium");
var Ru = new Element("RUTHENIUM", 44, 101.07, "This element is extremely rare", "https://en.wikipedia.org/wiki/Ruthenium");
var Rh = new Element("RHODIUM", 45, 102.906, "Rhodium is used to reduce nitrogen oxides in exhaust gases", "https://en.wikipedia.org/wiki/Rhodium");
var Pd = new Element("PALLADIUM", 46, 106.42, "The element is used for tooth fillings and crowns", "https://en.wikipedia.org/wiki/Palladium");
var Ag = new Element("SILVER", 47, 107.868, "Silver is the best reflector of visible light known", "https://en.wikipedia.org/wiki/Silver");
var Cd = new Element("CADMIUM", 48, 112.41, "Cadmium is poisonous and is known to cause birth defects and cancer", "https://en.wikipedia.org/wiki/Cadmium");
var In = new Element("INDIUM", 49, 114.82, "Indium is part of the compund that makes touchscreens", "https://en.wikipedia.org/wiki/Indium");
var Sn = new Element("TIN", 50, 118.710, "Plants easily absorb tin", "https://en.wikipedia.org/wiki/Tin");
var Sb = new Element("ANTIMONY", 51, 121.760, "The word comes from the greek 'anti-monos' which means 'not alone'", "https://en.wikipedia.org/wiki/Antimony");
var Te = new Element("TELLURIUM", 52, 127.60, "Tellurium is found at Earth's crust at 0.001 parts per million", "https://en.wikipedia.org/wiki/tellurium");
var I = new Element("IODINE", 53, 126.905, "Iodine was first used in photography", "https://en.wikipedia.org/wiki/Iodine");
var Xe = new Element("XENON", 54, 131.29, "Xenon is used in sunbed lamps", "https://en.wikipedia.org/wiki/Xenon");
var Cs = new Element("CESIUM", 55, 132.905, "Cesium is used for the atomic clock", "https://en.wikipedia.org/wiki/Cesium");
var Ba = new Element("BARIUM", 56, 137.33, "Barium nitrate is used in fireworks to give them a green color", "https://en.wikipedia.org/wiki/Barium");
var La = new Element("LANTHANUM", 57, 138.906, "The element's name comes from the greek word 'hiddden'", "https://en.wikipedia.org/wiki/Lanthanum");
var Ce = new Element("CERIUM", 58, 140.12, "When struck, this element will create sparks", "https://en.wikipedia.org/wiki/Cerium");
var Pr = new Element("PRASEODYMIUM", 59, 140.908, "With magnesium, praseodymium is used is aircraft engines", "https://en.wikipedia.org/wiki/Praseodymium");
var Nd = new Element("NEODYMIUM", 60, 144.24, "This element colors glass shades of purple", "https://en.wikipedia.org/wiki/Neodymium");
var Pm = new Element("PROMETHIUM", 61, 145, "Promethium is used in atomic batteries for pacemakers and guided missiles", "https://en.wikipedia.org/wiki/Promethium");
var Sm = new Element("SAMARIUM", 62, 150.36, "This element can only be found by isolating other elements", "https://en.wikipedia.org/wiki/Samarium");
var Eu = new Element("EUROPIUM", 63, 151.964, "It is used for detecting forged euro banknotes", "https://en.wikipedia.org/wiki/Europium");
var Gd = new Element("GADOLINIUM", 64, 157.25, "It is used at the core of nuclear reactors", "https://en.wikipedia.org/wiki/Gadolinium");
var Tb = new Element("TERBIUM", 65, 158.925, "Terbium is used to increase the safety of x-rays", "https://en.wikipedia.org/wiki/Terbium");
var Dy = new Element("DYSPROSIUM", 66, 162.50, "It is used in wind turbines and eletrical cars", "https://en.wikipedia.org/wiki/Dysposium");
var Ho = new Element("HOLMIUM", 67, 164.930, "It is used in nuclear reactions to keep a chain reaction under control", "https://en.wikipedia.org/wiki/Holium");
var Er = new Element("ERBIUM", 68, 167.26, "Erbium is used in pink glazes", "https://en.wikipedia.org/wiki/Erbium");
var Tm = new Element("THULIUM", 69, 168.934, "It is used in surgical lasers", "https://en.wikipedia.org/wiki/Thulium");
var Yb = new Element("YTTERBIUM", 70, 173.04, "Ytterbium is one of four elements named after Ytterby, Sweeden", "https://en.wikipedia.org/wiki/Ytterbium");
var Lu = new Element("LUTETIU0M", 71, 174.967, "The word comes from the Roman's name for Paris", "https://en.wikipedia.org/wiki/Lutetiuom");
var Hf = new Element("HAFNIUM", 72, 178.49, "It is used in plasma welding torches because of its high melting point", "https://en.wikipedia.org/wiki/Hafnium");
var Ta = new Element("TANTALUM", 73, 180.948, "It is used to make surgical implants in the skull, bones, or connect nerves", "https://en.wikipedia.org/wiki/Tantalum");
var W = new Element("TUNGSTEN", 74, 183.84, "Tungsten has the highest melting point of all metals", "https://en.wikipedia.org/wiki/Tungsten");
var Re = new Element("RHENIUM", 75, 186.207, "The element is extremely resistant to poisoning", "https://en.wikipedia.org/wiki/Rhenium");
var Os = new Element("OSMIUM", 76, 190.23, "It is most commonly known for being in fountain pen nibs", "https://en.wikipedia.org/wiki/Osmium");
var Ir = new Element("IRIDIUM", 77, 192.22, "The word comes from the greek word 'iris' which means 'rainbow'", "https://en.wikipedia.org/wiki/Iridium");
var Pt = new Element("PLATINUM", 78, 195.08, "It is used in cars,trucks, and busses more than for jewellery", "https://en.wikipedia.org/wiki/Platinum");
var Au = new Element("GOLD", 79, 196.967, "18 and 9 Carat gold is not pure gold, but it is more durable", "https://en.wikipedia.org/wiki/Gold");
var Hg = new Element("MERCURY", 80, 200.59, "Almost all mercury uses no longer exsist because they are very dangerous", "https://en.wikipedia.org/wiki/Mercury");
var Tl = new Element("THALLIUM", 81, 204.383, "It is used to make a special reflective glass", "https://en.wikipedia.org/wiki/Thallium");
var Pb = new Element("LEAD", 82, 207.2, "Lead is used in exercise weights and weight belts for diving", "https://en.wikipedia.org/wiki/Lead");
var Bi = new Element("BISMUTH", 83, 208.980, "When mixed with other elements, Bimuth is used to tint makeup products", "https://en.wikipedia.org/wiki/Bismuth");
var Po = new Element("POLONIUM", 84, 209, "It was discovered by Marie Curie and named after her native contry, Poland", "https://en.wikipedia.org/wiki/Polonium");
var At = new Element("ASTATINE", 85, 210, "Astatine is only used in research and has a half life of 8 hours", "https://en.wikipedia.org/wiki/Atatine");
var Rn = new Element("RADON", 86, 222, "It is ued in radiation for cancer patients", "https://en.wikipedia.org/wiki/Radon");
var Fr = new Element("FRANCIUM", 87, 223, "Francium has a half life of 22 minutes", "https://en.wikipedia.org/wiki/Francium");
var Ra = new Element("RADIUM", 88, 225, "It is used to treat cancerous bone cells", "https://en.wikipedia.org/wiki/Radium");
var Ac = new Element("ACTINIUM", 89, 227, "Actinum glows blue in the dark", "https://en.wikipedia.org/wiki/Actinium");
var Th = new Element("THORIUM", 90, 232.038, "India and China are creating Thorium power plants because the element creates so much nuclear power", "https://en.wikipedia.org/wiki/Thorium");
var Pa = new Element("PROTACTINIUM", 91, 231.036, "Protactinium boils at 4000 C or 7232 F", "https://en.wikipedia.org/wiki/Protactinium");
var U = new Element("URANIUM", 92, 238.029, "Uranium emits nuclear fuel in power plants", "https://en.wikipedia.org/wiki/Uranium");
var Np = new Element("NEPTUNIUM", 93, 237, "It is named after the Roman God Neptune", "https://en.wikipedia.org/wiki/Neptunium");
var Pu = new Element("PLUTONIUM", 94, 244, "It is used in nuclear weapons, including the first atomic bomb", "https://en.wikipedia.org/wiki/Plutonium");
var Am = new Element("AMERICIUM", 95, 243, "It is used in smoke alarms", "https://en.wikipedia.org/wiki/Americium");
var Cm = new Element("CURIUM", 96, 247, "Curium was named to honor Marie and Pierre Curie", "https://en.wikipedia.org/wiki/Curium");
var Bk = new Element("BERKELIUM", 97, 247, "Less than one gram of Berkelium is made each year", "https://en.wikipedia.org/wiki/Berkelium");
var Cf = new Element("CALIFORNIUM", 98, 251, "It is a very strong neutron emitter", "https://en.wikipedia.org/wiki/Californium");
var Es = new Element("EINSTEINIUM", 99, 252, "It can only be obtained by neutron bonbardment of Plutonium", "https://en.wikipedia.org/wiki/Einsteinium");
var Fm = new Element("FERMIUM", 100, 257, "Fermium has no uses outside of research", "https://en.wikipedia.org/wiki/Fermium");
var Md = new Element("MENDELEVIUM", 101, 258, "It was named after Dmitri Mendeleev who created one of the first periodic tables", "https://en.wikipedia.org/wiki/Mendelevium");
var No = new Element("NOBELIUM", 102, 259, "It is named after Alfred Nobel, the creator of the Nobel Peace Prize", "https://en.wikipedia.org/wiki/Nobelium");
var Lr = new Element("LAWRENCIUM", 103, 262, "This element was discovered near Moscow, Russia and independently in Berkeley. California", "https://en.wikipedia.org/wiki/Lawrencium");
var Rf = new Element("RUTHERFORDIUM", 104, 261, "The melting point, boiling point, and density of this element are unknown", "https://en.wikipedia.org/wiki/Rutherfordium");
var Db = new Element("DUBNIUM", 105, 262, "It is named after the Russian town Dubna where it was discovered", "https://en.wikipedia.org/wiki/Dubnium");
var Sg = new Element("SEABORGIUM", 106, 263, "This element was produced in 1970", "https://en.wikipedia.org/wiki/Seaborgium");
var Bh = new Element("BOHRIUM", 107, 264, "A Bohrium isotope has a half life of around 10 seconds", "https://en.wikipedia.org/wiki/Bohrium");
var Hs = new Element("HASSIUM", 108, 265, "The word comes from 'Hesse' the German state where the element was discovered", "https://en.wikipedia.org/wiki/Hassium");
var Mt = new Element("MEITNERIUM", 109, 268, "Less than 10 atoms of this element were ever made", "https://en.wikipedia.org/wiki/Meitnerium");
var Ds = new Element("DARMSTADTIUM", 110, 269, "This element is created by fusing nickle and lead atoms together", "https://en.wikipedia.org/wiki/Darmstadtium");
var Rg = new Element("ROENTGENIUM", 111, 272, "One of the isotopes of this element has a half life of 1.5 milliseconds", "https://en.wikipedia.org/wiki/Roentgenium");
var Cn = new Element("COPERNICIUM", 112, 277, "It is named after Nicolaus Copernicus, the Renaissance scientist", "https://en.wikipedia.org/wiki/Coppernicium");
var Nh = new Element("NIHONIUM", 113, 286, "This element was discovered in 2015 in Japan", "https://en.wikipedia.org/wiki/Nihonium");
var Fl = new Element("FLEROVIUM", 114, 289, "5 billion billion atoms of calcium need to be fired at a target to produce a single atom of this element", "https://en.wikipedia.org/wiki/Flerovium");
var Mc = new Element("MOSCOVIUM", 115, 288, "This element was not offically named until 2016", "https://en.wikipedia.org/wiki/Moscovium");
var Lv = new Element("LIVERMORIUM", 116, 292, "It was named after the Lawrence Livermore National Labratory", "https://en.wikipedia.org/wiki/Livermorium");
var Ts = new Element("TENNESSINE", 117, 294, "The element is named after the state of Tennesse where it was created", "https://en.wikipedia.org/wiki/Tennessine");
var Og = new Element("OGANESSON", 118, 294, "It is named after the Russian scientist Yuri Oganessian", "https://en.wikipedia.org/wiki/Oganesson");
