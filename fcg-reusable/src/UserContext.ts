import createFastContext from "./createFastContext";

type Store = { first: string; last: string };

export const initialState: Store = {
  first: '', last: ''
}

const { Provider, useStore } = createFastContext(initialState);

export const useCustomerStore = (varName: keyof Store) => useStore((store) => store[varName])

export const CustomerProvider = Provider