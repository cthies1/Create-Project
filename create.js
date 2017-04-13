function elementAlert(elem) {
    msg = elem.name + "<br>" + "Atomic Number: " + elem.atomicNum + "<br>" + "Fact: " + elem.fact + "<br>" + "Link: ";
    document.getElementById("output").innerHTML = msg;
    //console.log(msg);
    document.getElementById("output").className = "alert alert-info";
}

function Element(name, atomicNum, fact) {
    this.name = name;
    this.atomicNum = atomicNum;
    this.fact = fact;
}
var H = new Element("HYDROGEN", 1, "The word hydrogen comes from the greek roots hydro which means water and genes which means forming");
var He = new Element("HELIUM", 2, "Helium has the lowest boiling point out on the periodic table");
var Li = new Element("LITHIUM", 3, "Lithium is the lightest metal");
var Be = new Element("BERYLLIUM", 4, "The United States, China, and Kazakhstan are the only countries involved in the production of Beryllium");
var B = new Element("BORON", 5, "Boron is found in meteroids");
var C = new Element("CARBON", 6, "Carbon occurs in all living organisms");
var N = new Element("NITROGEN", 7, "78% of Earth's atmosphere is made of nitrogen gas");
var O = new Element("OXYGEN", 8, "Oxygen's solubility in water makes life for underwater animals possible");
var F = new Element("FLUORNE", 9, "The most reactive element on the periodic table");
var Ne = new Element("NEON", 10, "Neon will not react with any other element");
var Na = new Element("SODIUM", 11, "Sodium will tarnish within seconds of being exposed to air");
var Mg = new Element("MAGNESIUM", 12, "Magnesium is used in flares, fireworks, and sparklers because it emits a bright light when it burns");
var Al = new Element("ALUMINUM", 13, "Aluminum is used for consumer products because its low density and high thermal activity");
var Si = new Element("SILICON", 14, "Ultrapure forms of this element are used as semiconductors in computers and microelectronics");
var P = new Element("PHOSPHORUS", 15, "Phosphorus forms Sugar-Phosphate which is the backbone of DNA and RNA");
var S = new Element("SULFUR", 16, "Sulfer naturally forms near volcanic areas");
var Cl = new Element("CHLORINE", 17, "It was used as a chemical weapon in World War I");
var Ar = new Element("ARGON", 18, "Tires of luxury cars contain argon to reduce noise");
var K = new Element("POTASSIUM", 19, "Potassium is used to control fluid and electrolyte balance in the human body");
var Ca = new Element("CALCIUM", 20, "Calicum is essential for the healthy development of strong bones and teeth in the human body");
var Sc = new Element("SCANDIUM", 21, "The element is named after Scandinavia");
var Ti = new Element("TITANIUM", 22, "Titanium is used in aircraft, spacecraft, and missiles because it has a very low density, is extremely strong, and does not melt easily");
var V = new Element("VANADIUM", 23, "Around 80% of the vanadium produced is used as a steel additive");
var Cr = new Element("CHROMIUM", 24, "Chromium plating can give a substance a polished mirrored finish");
var Mn = new Element("MANGANESE", 25, "The human body contains 12 milligrams of manganese to keep bones from breaking easily");
var Fe = new Element("IRON", 26, "90% of all refined metal is iron");
var Co = new Element("COBALT", 27, "A radioactive isotope of colbalt is used to treat cancer");
var Ni = new Element("NICKEL", 28, "The US nickel coin contains only 25% of the element nickel");
var Cu = new Element("COPPER", 29, "Copper is the first metal to be used by humans");
var Zn = new Element("ZINC", 30, "Zinc is used in the hardware, electrical, and automobile industry");
var Ga = new Element("GALLIUM", 31, "Gallium will melt in your hand");
var Ge = new Element("GERMANIUM", 32, "Germanium oxide is used in camera and microscope lenses because of its refraction and dispertion abilities");
var As = new Element("ARSENIC", 33, "Arsenic is a well known form of poison, but it is also used for medical purposes");
var Se = new Element("SELENIUM", 34, "Every cell in the human body contains over one million selenium atoms");
var Br = new Element("BROMINE", 35, "At room temprature, Bromine is a red, oily liquid that is toxic");
var Kr = new Element("KRYPTON", 36, "From 1960 to 1983, the wavelength of an isotope of Krypton was used to measure length");
var Rb = new Element("RUBIDIUM", 37, "Because of its radioactivity, rubidium has been used to locate brain tumours");
var Sr = new Element("STRONTIUM", 38, "A strontium compound is used for glow in the dark paints");
var Y = new Element("YTTRIUM", 39, "Yttrium combined with Aluminium and Garnet produce lasers that can cut through metal");
var Zr = new Element("SIRCONIUM", 40, "Sirconium does not absord neutrons");
var Nb = new Element("NIOBIUM", 41, "The element's superconductor magnents is used in MRI scanners");
var Mo = new Element("MOLYBDENUM", 42, "50 different enzymes in plants and animals use small amounts of molybdenum");
var Tc = new Element("TECHNETIUM", 43, "This element is not found naturally, it is only made artifically");
var Ru = new Element("RUTHENIUM", 44, "This element is extremely rare");
var Rh = new Element("RHODIUM", 45, "Rhodium is used to reduce nitrogen oxides in exhaust gases");
var Pd = new Element("PALLADIUM", 46, "The element is used for tooth fillings and crowns");
var Ag = new Element("SILVER", 47, "Silver is the best reflector of visible light known");
var Cd = new Element("CADMIUM", 48, "Cadmium is poisonous and is known to cause birth defects and cancer");
var In = new Element("INDIUM", 49, "Indium is part of the compund that makes touchscreens");
var Sn = new Element("TIN", 50, "Plants easily absorb tin");
var Sb = new Element("ANTIMONY", 51, "The word comes from the greek 'anti-monos' which means 'not alone'");
var Te = new Element("TELLURIUM", 52, "Tellurium is found at Earth's crust at 0.001 parts per million");
var I = new Element("IODINE", 53, "Iodine was first used in photography");
var Xe = new Element("XENON", 54, "Xenon is used in sunbed lamps");
var Cs = new Element("CESIUM", 55, "Cesium is used for the atomic clock");
var Ba = new Element("BARIUM", 56, "Barium nitrate is used in fireworks to give them a green color");
var La = new Element("LANTHANUM", 57, "The element's name comes from the greek word 'hiddden'");
var Ce = new Element("CERIUM", 58, "When struck, this element will create sparks");
var Pr = new Element("PRASEODYMIUM", 59, "With magnesium, praseodymium is used is aircraft engines");
var Nd = new Element("NEODYMIUM", 60, "This element colors glass shades of purple");
var Pm = new Element("PROMETHIUM", 61, "Promethium is used in atomic batteries for pacemakers and guided missiles");
var Sm = new Element("SAMARIUM", 62, "This element can only be found by isolating other elements");
var Eu = new Element("EUROPIUM", 63, "It is used for detecting forged euro banknotes");
var Gd = new Element("GADOLINIUM", 64, "It is used at the core of nuclear reactors");
var Tb = new Element("TERBIUM", 65, "Terbium is used to increase the safety of x-rays");
var Dy = new Element("DYSPROSIUM", 66, "It is used in wind turbines and eletrical cars");
var Ho = new Element("HOLMIUM", 67, "It is used in nuclear reactions to keep a chain reaction under control");
var Er = new Element("ERBIUM", 68, "Erbium is used in pink glazes");
var Tm = new Element("THULIUM", 69, "It is used in surgical lasers");
var Yb = new Element("YTTERBIUM", 70, "Ytterbium is one of four elements named after Ytterby, Sweeden");
var Lu = new Element("LUTETIU0M", 71, "The word comes from the Roman's name for Paris");
var Hf = new Element("HAFNIUM", 72, "It is used in plasma welding torches because of its high melting point");
var Ta = new Element("TANTALUM", 73, "It is used to make surgical implants in the skull, bones, or connect nerves");
var W = new Element("TUNGSTEN", 74, "Tungsten has the highest melting point of all metals");
var Re = new Element("RHENIUM", 75, "The element is extremely resistant to poisoning");
var Os = new Element("OSMIUM", 76, "It is most commonly known for being in fountain pen nibs");
var Ir = new Element("IRIDIUM", 77, "The word comes from the greek word 'iris' which means 'rainbow'");
var Pt = new Element("PLATINUM", 78, "It is used in cars,trucks, and busses more than for jewellery");
var Au = new Element("GOLD", 79, "18 and 9 Carat gold is not pure gold, but it is more durable");
var Hg = new Element("MERCURY", 80, "Almost all mercury uses no longer exsist because they are very dangerous");
var Tl = new Element("THALLIUM", 81, "It is used to make a special reflective glass");
var Pb = new Element("LEAD", 82, "Lead is used in exercise weights and weight belts for diving");
var Bi = new Element("BISMUTH", 83, "When mixed with other elements, Bimuth is used to tint makeup products");
var Po = new Element("POLONIUM", 84, "It was discovered by Marie Curie and named after her native contry, Poland");
var At = new Element("ASTATINE", 85, "Astatine is only used in research and has a half life of 8 hours");
var Rn = new Element("RADON", 86, "It is ued in radiation for cancer patients");
var Fr = new Element("FRANCIUM", 87, "Francium has a half life of 22 minutes");
var Ra = new Element("RADIUM", 88, "It is used to treat cancerous bone cells");
var Ac = new Element("ACTINIUM", 89, "Actinum glows blue in the dark");
var Th = new Element("THORIUM", 90, "India and China are creating Thorium power plants because the element creates so much nuclear power");
var Pa = new Element("PROTACTINIUM", 91);
var U = new Element("URANIUM", 92);
var Np = new Element("NEPTUNIUM", 93);
var Pu = new Element("PLUTONIUM", 94);
var Am = new Element("AMERICIUM", 95);
var Cm = new Element("CURIUM", 96);
var Bk = new Element("BERKELIUM", 97);
var Cf = new Element("CALIFORNIUM", 98);
var Es = new Element("EINSTEINIUM", 99);
var Fm = new Element("FERMIUM", 100);
var Md = new Element("MENDELEVIUM", 101);
var No = new Element("NOBELIUM", 102);
var Lr = new Element("LAWRENCIUM", 103);
var Rf = new Element("RUTHERFORDIUM", 104);
var Db = new Element("DUBNIUM", 105);
var Sg = new Element("SEABORGIUM", 106);
var Bh = new Element("BOHRIUM", 107);
var Hs = new Element("HASSIUM", 108);
var Mt = new Element("MEITNERIUM", 109);
var Ds = new Element("DARMSTADTIUM", 110);
var Rg = new Element("ROENTGENIUM", 111);
var Cn = new Element("COPERNICIUM", 112);
var Uut = new Element("UNUNTRIUM", 113);
var Fl = new Element("FLEROVIUM", 114);
var Uup = new Element("UNUNPENTIUM", 115);
var Lv = new Element("LIVERMORIUM", 116);
var Uus = new Element("UNUNSEPTIUM", 117);
var Uuo = new Element("UNUNOCTIUM", 118);
