export const zipValidate = (zip: string): boolean => {
    return /^\d{5}$/.test(zip);
};
