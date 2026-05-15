export interface Branch {
  name: string;
  address: string;
  phone: string;
  email: string;
  district: string;
  type: string;
}

export const branches: Branch[] = [
  {
    name: "Zekeriyaköy Nazmi Arıkan Fen Bilimleri",
    address: "Uskumruköy, Zekeriyaköy Mah. Kilyos Cad. No: 238/2, Sarıyer/İstanbul",
    phone: "+90 212 201 58 48",
    email: "zekeriyakoyfenbilimleri@gmail.com",
    district: "Sarıyer",
    type: "Fen Bilimleri",
  },
  {
    name: "Esenler Nazmi Arıkan Fen Bilimleri",
    address: "Menderes Mah. Atışalanı Cad. No:11, Esenler/İstanbul",
    phone: "+90 212 508 71 00",
    email: "esenlerfenbilimleriozelogretim@abdkurumlari.com",
    district: "Esenler",
    type: "Fen Bilimleri",
  },
  {
    name: "Halkalı Nazmi Arıkan Fen Bilimleri",
    address: "Halkalı Merkez, Kent Hastanesi Karşısı, Fatih Cad. No: 18/8 Kat: 1, Küçükçekmece/İstanbul",
    phone: "+90 542 825 08 68",
    email: "nazmiarikanfenbilimlerihalkali@gmail.com",
    district: "Küçükçekmece",
    type: "Fen Bilimleri",
  },
  {
    name: "Bakırköy Nazmi Arıkan Fen Bilimleri",
    address: "Zeytinlik, Yakut Sk. no:20, Bakırköy/İstanbul",
    phone: "+90 212 543 71 21",
    email: "",
    district: "Bakırköy",
    type: "Fen Bilimleri",
  },
  {
    name: "Bahçelievler Sevinç Dershanesi",
    address: "Haznedar, Bahçelievler Mah. Bağcılar Cad. No:11, Bahçelievler/İstanbul",
    phone: "+90 212 505 40 01",
    email: "bahcelievlersevinckurs@gmail.com",
    district: "Bahçelievler",
    type: "Dershane",
  },
  {
    name: "Florya Sevinç VIP Dershanesi",
    address: "Şenlikköy, Florya Cad. Özgen Sok. No: 3A/1, Bakırköy/İstanbul",
    phone: "+90 212 598 45 50",
    email: "floryasevinckurumlari@abdkurumlari.com",
    district: "Bakırköy",
    type: "Dershane",
  },
  {
    name: "Tarabya Final Dershanesi",
    address: "Ferahevler, Aydın Sok. No:13, Sarıyer/İstanbul",
    phone: "+90 212 223 82 83",
    email: "tarabyaozelogretimkursu@abdkurumlari.com",
    district: "Sarıyer",
    type: "Final Dershanesi",
  },
  {
    name: "Şirinevler Final Dershanesi",
    address: "Şirinevler, Hürriyet Mah. Mahmutbey Cad. No:5, Bahçelievler/İstanbul",
    phone: "+90 212 551 72 73",
    email: "sirinevlerfinalozelogretim@abdkurumlari.com",
    district: "Bahçelievler",
    type: "Final Dershanesi",
  },
  {
    name: "Mimaroba Final Dershanesi",
    address: "Sinanoba Mah. Mustafa Kemal Bulvarı, Melek Plaza, No: 52/1, Büyükçekmece/İstanbul",
    phone: "+90 212 863 25 27",
    email: "mimarobafinalozelogretim@abdkurumlari.com",
    district: "Büyükçekmece",
    type: "Final Dershanesi",
  },
  {
    name: "Sefaköy Final Dershanesi",
    address: "Kartaltepe Mah. Halkalı Cad. 2. Orkide Sok. No: 2, Küçükçekmece/İstanbul",
    phone: "+90 212 601 15 00",
    email: "sefakoyfinalozelogretimkursu@abdkurumlari.com",
    district: "Küçükçekmece",
    type: "Final Dershanesi",
  },
  {
    name: "Şirinevler Final LGS Dershanesi",
    address: "Hürriyet Mah. Mahmutbey Cad. No: 5A, Bahçelievler/İstanbul",
    phone: "+90 212 551 72 73",
    email: "sirinevlerfinalkisiselgelisim@abdkurumlari.com",
    district: "Bahçelievler",
    type: "LGS Dershanesi",
  },
  {
    name: "Halkalı Final LGS Dershanesi",
    address: "Halkalı Merkez, Fatih Cad. No: 18 Kat 2, Küçükçekmece/İstanbul",
    phone: "+90 212 495 30 21",
    email: "halkalifinaletutmerkezi@abdkurumlari.com",
    district: "Küçükçekmece",
    type: "LGS Dershanesi",
  },
  {
    name: "Sefaköy Final LGS Dershanesi",
    address: "Kartaltepe Mah. Halkalı Cad. 2. Orkide Sok. No: 2, Küçükçekmece/İstanbul",
    phone: "+90 212 601 15 00",
    email: "",
    district: "Küçükçekmece",
    type: "LGS Dershanesi",
  },
];

export const districts = Array.from(new Set(branches.map((b) => b.district))).sort();
export const types = Array.from(new Set(branches.map((b) => b.type))).sort();
