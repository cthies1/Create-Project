function elementAlert(elem) {
    msg = "Element: " + elem.name + "<br>" + "Atomic Number: " + elem.atomicNum + "<br>" + "Fact: ";
    //var msg = elem;
    document.getElementById("output").innerHTML = msg;
    console.log(msg);
    document.getElementById("output").className = "alert alert - primary";
}


function element(name, atomicNum) {
    this.name = name;
    this.atomicNum = atomicNum;
    //this.funFact = funFact;
}

var H = new element("HYDROGEN", 1);
var He = new element("HELIUM", 2);
var Li = new element("LITHIUM", 3);
var Be = new element("BERYLLIUM", 4);
var B = new element("BORON", 5);
var C = new element("CARBON", 7);
var N = new element("NITROGEN", 8);
var O = new element("OXYGEN", 9);
var F = new element("FLUORNE", 10);
var Ne = new element("NEON", 11);
var Na = new element("SODIUM", 12);
var Mg = new element("MAGNESIUM", 13);
var Al = new element("ALUMINUM", 14);
var Si = new element("SILICON", 15);
var P = new element("PHOSPHORUS", 16);
var S = new element("SULFUR", 17);
var Cl = new element("CHLORINE", 18);
var Ar = new element("ARGON", 19);
var Ca = new element("CALCIUM", 20);
var Sc = new element("SCANDIUM", 21);
var Ti = new element("TITANIUM", 22);
var V = new element("VANADIUM", 23);
var Cr = new element("CHROMIUM", 24);
var Mn = new element("MANGANESE", 25);
var Fe = new element("IRON", 26);
var Co = new element("COBALT", 27);
var Ni = new element("NICKEL", 28);
var Cu = new element("COPPER", 29);
var Zn = new element("ZINC", 30);
var Ga = new element("GALLIUM", 31);
var Ge = new element("GERMANIUM", 32);
var As = new element("ARSENIC", 33);
var Se = new element("SELENIUM", 34);
var Br = new element("BROMINE", 35);
var Kr = new element("KRYPTON", 36);
var Rb = new element("RUBIDIUM", 37);
var Sr = new element("STRONTIUM", 38);
var Y = new element("YTTRIUM", 39);
var Zr = new element("SIRCONIUM", 40);
var Nb = new element("NIOBIUM", 41);
var Mo = new element("MOLYBDENUM", 42);
var Tc = new element("TECHNETIUM", 43);
var Ru = new element("RUTHENIUM", 44);
var Rh = new element("RHODIUM", 45);
var Pd = new element("PALLADIUM", 46);
var Ag = new element("SILVER", 47);
var Cd = new element("CADMIUM", 48);
var In = new element("INDIUM", 49);
var Sn = new element("TIN", 50);
var Sb = new element("ANTIMONY", 51);
var Te = new element("TELLURIUM", 52);
var I = new element("IODINE", 53);
var Xe = new element("XENON", 54);
var Cs = new element("CESIUM", 55);
var Ba = new element("BARIUM", 56);
var La = new element("LANTHANUM", 57);
var Ce = new element("CERIUM", 58);
var Pr = new element("PRASEODYMIUM", 59);
var Nd = new element("NEODYMIUM", 60);
var Pm = new element("PROMETHIUM", 61);
var Sm = new element("SAMARIUM", 62);
var Eu = new element("EUROPIUM", 63);
var Gd = new element("GADOLINIUM", 64);
var Tb = new element("TERBIUM", 65);
var Dy = new element("DYSPROSIUM", 66);
var Ho = new element("HOLMIUM", 67);
var Er = new element("ERBIUM", 68);
var Tm = new element("THULIUM", 69);
var Yb = new element("YTTERBIUM", 70);
var Lu = new element("LUTETIU0M", 71);
var Hf = new element("HAFNIUM", 72);
var Ta = new element("TANTALUM", 73);
var W = new element("TUNGSTEN", 74);
var Re = new element("RHENIUM", 75);
var Os = new element("OSMIUM", 76);
var Ir = new element("IRIDIUM", 77);
var Pt = new element("PLATINUM", 78);
var Au = new element("GOLD", 79);
var Hg = new element("MERCURY", 80);
var Tl = new element("THALLIUM", 81);
var Pb = new element("LEAD", 82);
var Bi = new element("BISMUTH", 83);
var Po = new element("POLONIUM", 84);
var At = new element("ASTATINE", 85);
var Rn = new element("RADON", 86);
var Fr = new element("FRANCIUM", 87);
var Ra = new element("RADIUM", 88);
var Ac = new element("ACTINIUM", 89);
var Th = new element("THORIUM", 90);
var Pa = new element("PROTACTINIUM", 91);
var U = new element("URANIUM", 92);
var Np = new element("NEPTUNIUM", 93);
var Pu = new element("PLUTONIUM", 94);
var Am = new element("AMERICIUM", 95);
var Cm = new element("CURIUM", 96);
var Bk = new element("BERKELIUM", 97);
var Cf = new element("CALIFORNIUM", 98);
var Es = new element("EINSTEINIUM", 99);
var Fm = new element("FERMIUM", 100);
var Md = new element("MENDELEVIUM", 101);
var No = new element("NOBELIUM", 102);
var Lr = new element("LAWRENCIUM", 103);
var Rf = new element("RUTHERFORDIUM", 104);
var Db = new element("DUBNIUM", 105);
var Sg = new element("SEABORGIUM", 106);
var Bh = new element("BOHRIUM", 107);
var Hs = new element("HASSIUM", 108);
var Mt = new element("MEITNERIUM", 109);
var Ds = new element("DARMSTADTIUM", 110);
var Rg = new element("ROENTGENIUM", 111);
var Cn = new element("COPERNICIUM", 112);
var Uut = new element("UNUNTRIUM", 113);
var Fl = new element("FLEROVIUM", 114);
var Uup = new element("UNUNPENTIUM", 115);
var Lv = new element("LIVERMORIUM", 116);
var Uus = new element("UNUNSEPTIUM", 117);
var Uuo = new element("UNUNOCTIUM", 118);
