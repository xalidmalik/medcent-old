export const patientForm = {
  Name: {
    title: "İsim",
    placeholder: "Lütfen İsim Giriniz",
    type: "text",
    for: "Name",
    required: true
  },
  Surname: {
    title: "Soyisim",
    placeholder: "Lütfen Soyisim Giriniz",
    type: "text",
    for: "Surname",
    required: true
  },
  BirthDate: {
    title: "Doğum Tarihi",
    type: "date",
    for: "BirthDate",
    // placeholder: "Gün / Ay / Yıl",
    required: true
    // mask: true,
    // masked: [/[1-9]/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]
  },
  BirthPlace: {
    title: "Doğum Yeri",
    placeholder: "Lütfen Doğum Yeri Giriniz",
    for: "BirthPlace"
  },
  FatherName: {
    title: "Baba Adı",
    placeholder: "Lütfen İsim Giriniz",
    type: "text",
    for: "FatherName"
  },
  MoherName: {
    title: "Anne Adı",
    placeholder: "Lütfen İsim Giriniz",
    type: "text",
    for: "MotherName"
  },
  Gender: {
    title: "Cinsiyet",
    type: "radio",
    for: "Gender",
    required: true
  },
  Bloodtype: {
    title: "Kan Grubu",
    placeholder: "Kan Grubu Giriniz",
    for: "Bloodtype"
  },
  Tc: {
    title: "T.C. Numarası",
    placeholder: "Lütfen T.C. Numarası Giriniz",
    type: "text",
    for: "Tc",
    required: true,
    mask: true,
    masked: [
      /[1-9]/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ]
  },
  PassportNo: {
    title: "Pasaport Numarası",
    placeholder: "Lütfen Pasaport Numarası Giriniz",
    type: "number",
    for: "PassportNo"
  },
  MobilePhone: {
    title: "Cep Telefonu",
    placeholder: "Lütfen Telefon Numarası Giriniz",
    type: "tel",
    for: "MobilePhone",
    mask: true,
    masked: [
      "(",
      /[1-9]/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ]
  },
  WorkPhone: {
    title: "İş Telefonu",
    placeholder: "Lütfen Telefon Numarası Giriniz",
    type: "tel",
    for: "WorkPhone"
  },
  EmergencyMobilePhone: {
    title: "Acil Durum Telefonu",
    placeholder: "Lütfen Telefon Numarası Giriniz",
    type: "tel",
    for: "EmergencyMobilePhone",
    mask: true,
    masked: [
      "(",
      /[1-9]/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ]
  },
  Email: {
    title: "Email Adresi",
    placeholder: "Email adresi giriniz",
    type: "text",
    for: "EMail",
    required: false
  },
  Profession: {
    title: "Meslek",
    placeholder: "Lütfen Meslek Giriniz",
    type: "text",
    for: "Profession"
  },
  HomeAdress: {
    title: "Ev Adresi",
    placeholder: "Lütfen Ev Adresi Giriniz",
    type: "text",
    for: "HomeAdress"
  },
  CanSendSms: {
    title: "Bildirim Onayı",
    placeholder: "SMS ve E-Posta Gönderimini Onaylıyorum",
    type: "checkbox",
    for: "CanSendSms"
  },
  Color: {
    title: "Renk Seçimi",
    type: "radio",
    for: "Color"
  },
  Diseases: {
    title: "Hastalıklar",
    type: "radio",
    for: "Diseases"
  },
  DocumentNo: {
    title: "Dosya Numarası",
    type: "text",
    for: "DocumentNo",
    placeholder: "Lütfen Dosya Numarası Giriniz",
    required: true
  },
  Note: {
    title: "Not",
    type: "text",
    for: "Note",
    placeholder: "Not Giriniz"
  },
  Tag: {
    title: "Rahatsızlıklar",
    type: "text",
    for: "Tag",
    placeholder: "Rahatsızlık Giriniz"
  }
};

export const signForm = {
  Username: {
    title: "Kullanıcı Adı",
    placeholder: "Lütfen kullanıcı adı giriniz",
    type: "text",
    for: "Username",
    required: true
  },
  Password: {
    title: "Şifre",
    placeholder: "Lütfen şifre giriniz",
    type: "password",
    for: "Password",
    required: true
  },
  ConfirmPassword: {
    title: "Şifre",
    placeholder: "Lütfen şifre giriniz",
    type: "password",
    for: "ConfirmPassword"
  }
};
