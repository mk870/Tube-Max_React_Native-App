import axios from "axios";
import { Alert } from "react-native";

import { backendUrl, expoSecureValueKeyNames } from "~/src/Utils/Constants";
import { saveSecureValue } from "~/src/Utils/Funcs";

export const verificationRequest = (
  data: {
    Id: number;
    VerificationCode: number;
  },
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  handleNavigate: () => void,
) => {
  setIsLoading(true);
  axios
    .post(`${backendUrl}verification-code`, data)
    .then((res) => {
      saveSecureValue(expoSecureValueKeyNames.accessToken, res.data.accessToken)
        .then((_data) => {
          handleNavigate();
        })
        .catch((e) => {
          console.log("error", e);
          Alert.alert("AccessToken Saving Error", "please retry again");
        })
        .finally(() => {
          setIsLoading(false);
        });
    })
    .catch((e) => {
      if (e.response?.data?.error !== "") {
        setError(e.response?.data?.error);
      } else setError(e.message);
    })
    .finally(() => setIsLoading(false));
};
