import axios from "axios";
import { Alert } from "react-native";

import { ITextInputType } from "~/src/Types/Shared/Types";
import { backendUrl, expoSecureValueKeyNames } from "~/src/Utils/Constants";
import { saveSecureValue } from "~/src/Utils/Funcs";

export const loginRequest = (
  data: {
    Email: ITextInputType;
    Password: ITextInputType;
  },
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  handleNavigate: () => void,
) => {
  setIsLoading(true);
  axios
    .post(`${backendUrl}login`, data)
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
