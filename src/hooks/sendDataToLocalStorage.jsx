export function useSendDataToLocalStorage(operation, data) {
  if (operation === "set") {
    localStorage.setItem("cartData", JSON.stringify(data));
    return;
  } else if(operation === "get") {
        let cartInLocalStorage = JSON.parse(localStorage.getItem("cartData"));

        if (cartInLocalStorage !== undefined && cartInLocalStorage !== null) {
          return cartInLocalStorage;
        } else {
          return [];
        }
  }
}
