import Swal from "sweetalert2";

export const AlertSwal = (title, type) => {
  return Swal.fire({
    title: title,
    type: type,
    showConfirmButton: false,
    customClass: {
      container: "swal-container ml-80"
    },
    timer: 1000
  });
};
