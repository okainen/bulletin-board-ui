export const validateEmail = email => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

export const validatePassword = password => /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,128}/.test(password);
