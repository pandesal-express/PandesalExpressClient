import { atom } from "nanostores";

// For register page
export const $regCurrStep = atom(0);
export const $regData = atom<{
    firstname: string;
    lastname: string;
    email: string;
    position: string;
    departmentId: string;
    storeId: string;
    agreed: boolean;
}>({
    firstname: '',
    lastname: '',
    email: '',
    position: '',
    departmentId: '',
    storeId: '',
    agreed: false,
});
