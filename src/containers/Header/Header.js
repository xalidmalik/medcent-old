import React from "react";
import { CardWrapper } from "../../components/Card/CardWrapper";
import { History } from "../../helpers/History";

export const HeaderWrapper = props => {
  return (
    <CardWrapper>
      <div className="px-4 h-16 w-full flex items-center">{props.children}</div>
    </CardWrapper>
  );
};

// Patient------------------------------------------------------------

export const HeaderPatientList = props => {
  return (
    <HeaderWrapper>
      <h2 className="text-2xl font-bold leading-none justify-between">
        Hastalar
      </h2>
      <button
        className="btn-style-1 ml-auto "
        onClick={() => History.push("/patient/new")}
      >
        Yeni Ekle
      </button>
    </HeaderWrapper>
  );
};

export const HeaderPatientDetails = props => {
  return (
    <HeaderWrapper>
      <h2
        className="text-2xl font-bold leading-none justify-between cursor-pointer text-med-500"
        onClick={() => History.push("/patient")}
      >
        Hastalar
      </h2>
      <span className="text-2xl font-bold leading-none mx-2 text-med-500">
        >
      </span>
      <h2 className="text-2xl font-bold leading-none justify-between">
        {`${props.patients.Name} ${props.patients.Surname}`}
      </h2>
    </HeaderWrapper>
  );
};
export const HeaderPatientEdit = props => {
  return (
    <HeaderWrapper>
      <h2
        className="text-2xl font-bold leading-none justify-between cursor-pointer text-med-500"
        onClick={() => History.push("/patient")}
      >
        Hastalar
      </h2>
      <span className="text-2xl font-bold leading-none mx-2">></span>
      <h2
        className="text-2xl font-bold leading-none justify-between cursor-pointer text-med-500"
        onClick={() => History.push("/patient/detail")}
      >
        {`${props.patients.Name} ${props.patients.Surname}`}
      </h2>
      <span className="text-2xl font-bold leading-none mx-2 ">></span>
      <h2 className="text-2xl font-bold leading-none justify-between">
        Bilgileri Düzenle
      </h2>
      <button
        type="submit"
        form="PatientFormSubmit"
        className="btn-style-1 ml-auto "
      >
        Kaydet
      </button>
    </HeaderWrapper>
  );
};

export const HeaderPatientNew = props => {
  return (
    <HeaderWrapper>
      <h2
        className="text-2xl font-bold leading-none justify-between cursor-pointer text-med-500"
        onClick={() => History.push("/patient")}
      >
        Hastalar
      </h2>
      <span className="text-2xl font-bold leading-none mx-2">></span>
      <h2 className="text-2xl font-bold leading-none justify-between">
        Yeni Hasta Ekle
      </h2>
      <button
        type="submit"
        form="PatientFormSubmit"
        className="btn-style-1 ml-auto "
      >
        Kaydet
      </button>
    </HeaderWrapper>
  );
};

// Technician------------------------------------------------------------

export const HeaderTechnicianDetails = props => {
  return (
    <HeaderWrapper>
      <h2
        className="text-2xl font-bold leading-none justify-between cursor-pointer text-med-500"
        onClick={() => History.push("/lab/technician")}
      >
        Teknisyenler
      </h2>
      <span className="text-2xl font-bold leading-none mx-2">></span>
      <h2 className="text-2xl font-bold leading-none justify-between">
        {`${props.technician.Name} ${props.technician.Surname}`}
      </h2>
    </HeaderWrapper>
  );
};
export const HeaderTechnicianEdit = props => {
  return (
    <HeaderWrapper>
      <h2
        className="text-2xl font-bold leading-none justify-between cursor-pointer text-med-500"
        onClick={() => History.push("/lab/technician")}
      >
        Teknisyenler
      </h2>
      <span className="text-2xl font-bold leading-none mx-2">></span>
      <h2
        className="text-2xl font-bold leading-none justify-between cursor-pointer text-med-500"
        onClick={() => History.push("/lab/technician/detail")}
      >
        {`${props.technician.Name} ${props.technician.Surname}`}
      </h2>
      <span className="text-2xl font-bold leading-none mx-2 ">></span>
      <h2 className="text-2xl font-bold leading-none justify-between">
        Bilgileri Düzenle
      </h2>
      <button
        type="submit"
        form="DoctorFormSubmit"
        className="btn-style-1 ml-auto "
      >
        Kaydet
      </button>
    </HeaderWrapper>
  );
};
export const HeaderTechnicianList = props => {
  return (
    <HeaderWrapper>
      <h2 className="text-2xl font-bold leading-none justify-between">
        Teknisyenler
      </h2>
      <button
        className="btn-style-1 ml-auto "
        onClick={() => History.push("/lab/technician/new")}
      >
        Yeni Ekle
      </button>
    </HeaderWrapper>
  );
};
export const HeaderTechnicianNew = props => {
  return (
    <HeaderWrapper>
      <h2
        className="text-2xl font-bold leading-none justify-between cursor-pointer text-med-500"
        onClick={() => History.push("/lab/technician")}
      >
        Teknisyenler
      </h2>
      <span className="text-2xl font-bold leading-none mx-2">></span>
      <h2 className="text-2xl font-bold leading-none justify-between">
        Yeni Teknisyen Ekle
      </h2>
      <button
        type="submit"
        form="DoctorFormSubmit"
        className="btn-style-1 ml-auto "
      >
        Kaydet
      </button>
    </HeaderWrapper>
  );
};

// Doctor------------------------------------------------------------

export const HeaderDoctorList = props => {
  return (
    <HeaderWrapper>
      <h2 className="text-2xl font-bold leading-none justify-between">
        Doktorlar
      </h2>
      <button
        className="btn-style-1 ml-auto "
        onClick={() => History.push("/cadre/doctor/new")}
      >
        Yeni Ekle
      </button>
    </HeaderWrapper>
  );
};
export const HeaderDoctorDetail = props => {
  return (
    <HeaderWrapper>
      <h2
        className="text-2xl font-bold leading-none justify-between cursor-pointer text-med-500"
        onClick={() => History.push("/cadre/doctor")}
      >
        Doktorlar
      </h2>
      <span className="text-2xl font-bold leading-none mx-2">></span>
      <h2 className="text-2xl font-bold leading-none justify-between">
        {`${props.doctor.Name} ${props.doctor.Surname}`}
      </h2>
    </HeaderWrapper>
  );
};
export const HeaderDoctorEdit = props => {
  return (
    <HeaderWrapper>
      <h2
        className="text-2xl font-bold leading-none justify-between cursor-pointer text-med-500"
        onClick={() => History.push("/cadre/doctor")}
      >
        Doktorlar
      </h2>
      <span className="text-2xl font-bold leading-none mx-2">></span>
      <h2
        className="text-2xl font-bold leading-none justify-between cursor-pointer text-med-500"
        onClick={() => History.push("/cadre/doctor/detail")}
      >
        {`${props.doctor.Name} ${props.doctor.Surname}`}
      </h2>
      <span className="text-2xl font-bold leading-none mx-2 ">></span>
      <h2 className="text-2xl font-bold leading-none justify-between">
        Bilgileri Düzenle
      </h2>
      <button
        type="submit"
        form="DoctorFormSubmit"
        className="btn-style-1 ml-auto "
      >
        Kaydet
      </button>
    </HeaderWrapper>
  );
};
export const HeaderDoctorNew = props => {
  return (
    <HeaderWrapper>
      <h2 className="text-2xl font-bold leading-none justify-between">
        Yeni Doktor Ekle
      </h2>
      <button
        type="submit"
        form="DoctorFormSubmit"
        className="btn-style-1 ml-auto "
      >
        Kaydet
      </button>
    </HeaderWrapper>
  );
};

// Setting > Services------------------------------------------------------------

export const HeaderServicesList = props => {
  return (
    <HeaderWrapper>
      <h2 className="text-2xl font-bold leading-none justify-between">
        Hizmetler
      </h2>
      <button
        className="btn-style-1 ml-auto "
        onClick={() => History.push("/settings/services/new")}
      >
        Yeni Ekle
      </button>
    </HeaderWrapper>
  );
};
