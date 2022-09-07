import { atom } from "recoil";

const OrdersState = atom({
  key: 'Orders',
  default: {},
  effects: [
    ({ onSet }) => {
      const updateLocalStorage = (newValue, oldValue) => {
        window.localStorage.orders = JSON.stringify(newValue);
      }
      onSet(updateLocalStorage)
    }
  ],
});

export default OrdersState;