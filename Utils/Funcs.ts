import * as SecureStore from "expo-secure-store";

export const saveSecureValue = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getSecureValue = async (key: string) => {
  let result = await SecureStore.getItemAsync(key);
  return result;
};

export const passwordValidator: (
  setIsPasswordValidationError: React.Dispatch<React.SetStateAction<boolean>>,
  passwordValue: string | undefined
) => void = (setIsPasswordValidationError, passwordValue) => {
  if (passwordValue) {
    const regexPasswordValidator = new RegExp(
      "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (regexPasswordValidator.test(passwordValue)) {
      setIsPasswordValidationError(false);
    } else {
      setIsPasswordValidationError(true);
    }
  }
};

export const emailValidator: (
  setIsEmailValidationError: React.Dispatch<React.SetStateAction<boolean>>,
  emailValue: string | undefined
) => void = (setIsEmailValidationError, emailValue) => {
  if (emailValue) {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailValue
      )
    ) {
      setIsEmailValidationError(true);
    } else {
      setIsEmailValidationError(false);
    }
  }
};

export const passwordGuideLines = [
  "longer than 8 characters",
  "have atleast 1 special character",
  "have atleast 1 number",
  "have atleast 1 capital letter",
];

