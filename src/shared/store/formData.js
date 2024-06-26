import { create } from "zustand";

export const useFormDataStore = create()((set, get) => ({
  formData: {
    contact: { phone: "", email: "", firstname: "", lastname: "", comment: "" },
    information: {
      transport_from: "",
      transport_to: "",
    },
    shipping: {
      transportation_type: null,
      estimated_ship_date: null,
    },
    vehicles: {
      make: "",
      model: "",
      year: "",
      vehicle_runs: null,
    },
  },
  current: 0,
  setCurrent: (newCurrent) =>
    set({
      current: newCurrent,
    }),
  isChecked: false,
  setIsChecked: (data) =>
    set({
      isChecked: data,
    }),
  setFormData: (data) =>
    set({
      formData: { ...get().formData, ...data },
    }),
}));
