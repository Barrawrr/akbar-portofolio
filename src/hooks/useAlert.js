import Swal from "sweetalert2";

export const useAlert = () => {
  const showAlert = ({ title, text, icon = "info", confirmButtonText = "OK" }) => {
    return Swal.fire({
      title,
      text,
      icon,
      confirmButtonText,

      customClass: {
        confirmButton: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md",
        popup: "rounded-xl shadow-lg ",
      },
      buttonsStyling: false,
    });
  };

  const success = (text, title = "Berhasil") => showAlert({ title, text, icon: "success" });

  const error = (text, title = "Error") => showAlert({ title, text, icon: "error" });

  const info = (text, title = "Info") => showAlert({ title, text, icon: "info" });

  return { showAlert, success, error, info };
};
