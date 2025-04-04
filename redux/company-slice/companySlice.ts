import { ICompany } from "@/types/company-type";
import { createSlice } from "@reduxjs/toolkit";
export interface ICompanyState {
  company: ICompany | null;
  companyLogo: string | null;
}

const initialState: ICompanyState = {
  company: null,
  companyLogo: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setCompanyLogo: (state, action) => {
      state.companyLogo = action.payload;
    },
  },
});

export default companySlice.reducer;

export const { setCompany, setCompanyLogo } = companySlice.actions;
