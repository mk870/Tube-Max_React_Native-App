import axios from "axios";
import { Alert } from "react-native";

import { backendUrl } from "~/src/Utils/Constants";

export const resendVerificationCodeRequest = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  userId: number,
) => {
  setIsLoading(true);
  axios
    .get(`${backendUrl}resend-verification-code/${userId}`)
    .then((_res) => {
      Alert.alert(
        "Resend Successful",
        "please check your email for the verification code"
      );
    })
    .catch((e) => {
      if (e.response?.data?.error !== "") {
        setError(e.response?.data?.error);
      } else setError(e.message);
    })
    .finally(() => setIsLoading(false));
};
