import { Dentist } from "./Icons";

export const mainLink = {
  dashboard: {
    title: "Pano",
    link: "/",
    icon: Dentist.Dashboard
  },
  patient: {
    title: "Hastalar",
    link: "/patient",
    icon: Dentist.Patient
  },
  cadre: {
    title: "Kadro",
    link: "/cadre/doctor",
    icon: Dentist.Cadre
  },
  lab: {
    title: "Lab",
    link: "/lab/technician",
    icon: Dentist.Lab
  },
  settings: {
    title: "Ayarlar",
    link: "/settings/services",
    icon: Dentist.Setting
  }
};
export const patientDetail = {
  overview: {
    title: "Genel Bakış",
    link: "/patient/detail",
    icon: Dentist.Overview
  },
  edit: {
    title: "Düzenle",
    link: "/patient/detail/edit",
    icon: Dentist.Edit
  }
};
export const patientList = {
  list: {
    title: "Hasta Listesi",
    link: "/patient",
    icon: Dentist.PageList
  }
};
export const doctorDetail = {
  overview: {
    title: "Genel Bakış",
    link: "/cadre/doctor/detail",
    icon: Dentist.Overview
  },
  edit: {
    title: "Düzenle",
    link: "/cadre/doctor/detail/edit",
    icon: Dentist.Edit
  }
};
export const technicianDetail = {
  overview: {
    title: "Genel Bakış",
    link: "/lab/technician/detail",
    icon: Dentist.Overview
  },
  edit: {
    title: "Düzenle",
    link: "/lab/technician/detail/edit",
    icon: Dentist.Edit
  }
};
