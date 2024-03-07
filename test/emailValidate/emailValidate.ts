export const emailValidate = (email: string): boolean => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValid.test(email);
}
