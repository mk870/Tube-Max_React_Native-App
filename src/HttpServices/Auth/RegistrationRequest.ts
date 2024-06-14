import axios from "axios";

import { ITextInputType } from "~/src/Types/Shared/Types";
import { backendUrl } from "~/src/Utils/Constants";

export const registrationRequest = (
  userData: {
    FirstName: ITextInputType;
    LastName: ITextInputType;
    Email: ITextInputType;
    Password: ITextInputType;
  },
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  handleNavigate:(id:number)=>void
) => {
  axios
    .post(`${backendUrl}user-mobil`, userData)
    .then((res) => {
      console.log(res.data);
      handleNavigate(res.data.userId);
    })
    .catch((e) => {
      if (e.response?.data?.error !== "") {
        setError(e.response?.data?.error);
      } else setError(e.message);
    })
    .finally(() => setIsLoading(false));
};
