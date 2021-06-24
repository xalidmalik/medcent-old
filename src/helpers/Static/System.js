export const patient = {
  identity: {
    title: "Kimlik Bilgileri",
    desc:
      "Kimlik bilgileri, kişinin ismini, soyismini, doğum tarihini, cinsiyetini, kimlik numarasını, kısacası kişiyi tanımlayan kimlik bilgilerini içerir."
  },
  contact: {
    title: "İletişim Bilgileri",
    desc:
      "İletişim bilgileri, kişinin telefon numarasını, SMS ve bildirim onayını, e-mail adresini veya bu bilgilerin ait olduğu kişiye ulaşılamadığı halde ikinci bir şahısla iletişim kurulmasını mümkün kılan bilgileri içerir."
  },
  process: {
    title: "İşlem Bilgileri",
    desc:
      "İşlem bilgileri, kişinin dosya numarasını, şikayetçi olduğu rahatsızlıkarını, kullandığı ilaçlarını ve gerektiği halde ilave edilen notların bulunduğu benzer bilgileri içerir."
  },
  warranty: { title: "Garanti", desc: "Anything" },
  payment: { title: "Ödemeler", desc: "Anything" },
  appointment: { title: "Randevular", desc: "Anything" }
};

export const message = {
  success: {
    title: "İşlem Başarılı",
    type: "success"
  },
  error: {
    title: "İşlem Başarısız",
    type: "error"
  }
};
export const gender = [
  { value: 0, label: "Erkek" },
  { value: 1, label: "Kadın" }
];

export const diseases = [
  { value: 0, label: "Verem" },
  { value: 1, label: "Ak Ciger Kanseri" },
  { value: 2, label: "Lösemi" },
  { value: 3, label: "Astım" }
];

export const color = [
  { value: "gray-800", label: "gray-800" },
  { value: "gray-500", label: "gray-500" },
  { value: "red-500", label: "red-500" },
  { value: "pink-500", label: "pink-500" },
  { value: "indigo-500", label: "indigo-500" },
  { value: "blue-500", label: "blue-500" },
  { value: "med-500", label: "med-500" },
  { value: "green-500", label: "green-500" },
  { value: "yellow-500", label: "yellow-500" },
  { value: "orange-500", label: "orange-500" }
];

export const StringGenderType = typeId => {
  let type = null;
  switch (typeId) {
    case "0":
      type = "Erkek";
      break;
    case "1":
      type = "Kadın";
      break;
  }
  return type;
};
