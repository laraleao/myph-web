export const removeUserFromLocalStorageAndRedirect = () => {
  localStorage.removeItem("user");
  window.location.href = "/";
};
