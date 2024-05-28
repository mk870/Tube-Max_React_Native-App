import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useRouter } from "expo-router";

import ScreenWrapper from "../../HOCs/ScreenWrapper";
import InputField from "../../Components/InputField/InputField";
import { appTheme } from "../../Theme/Apptheme";
import CustomButton from "../../Components/CustomButton/CustomButton";
import {
  bold,
  expoSecureValueKeyNames,
  medium,
  regular,
} from "../../Utils/Constants";
import {
  emailValidator,
  passwordGuideLines,
  passwordValidator,
  saveSecureValue,
} from "../../Utils/Funcs";
import { IUserLogin } from "../../Types/Auth/Types";
import { IVoidFunc } from "../../Types/Shared/Types";

const login = () => {
  const { width } = useWindowDimensions();
  const [loginUserData, setLoginUserData] = useState<IUserLogin>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordValidationError, setIsPasswordValidationError] =
    useState<boolean>(false);
  const [isEmailValidationError, setIsEmailValidationError] =
    useState<boolean>(false);
  const router = useRouter();
  const {
    container,
    inputWrapper,
    text,
    btnWrapper,
    errorContainer,
    errorText,
    guidelineHeaderText,
    registerContainer,
    registerLink,
    registerText,
  } = styles;
  const handlePost: IVoidFunc = () => {
    if (!isEmailValidationError && !isPasswordValidationError) {
      setIsLoading(true);
      if (loginUserData.email !== "" && loginUserData.password !== "") {
        const userData = {
          Email: loginUserData.email,
          Password: loginUserData.password,
        };
        //api call
        saveSecureValue(expoSecureValueKeyNames.accessToken, "hello")
          .then((data) => {
            console.log("success", data);
          })
          .catch((e) => {
            console.log("error", e);
          })
          .finally(() => {
            setIsLoading(false);
          });
        setLoginUserData({ ...loginUserData, email: "", password: "" });
      } else if (loginUserData.email === "" && loginUserData.password !== "") {
        setIsEmailValidationError(true);
        setIsLoading(false);
      } else if (loginUserData.email !== "" && loginUserData.password === "") {
        setIsPasswordValidationError(true);
        setIsLoading(false);
      } else if (loginUserData.email === "" && loginUserData.password === "") {
        setIsEmailValidationError(true);
        setIsPasswordValidationError(true);
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    if (loginUserData.password !== "") {
      passwordValidator(setIsPasswordValidationError, loginUserData.password);
    } else {
      setIsPasswordValidationError(false);
    }
  }, [loginUserData.password]);
  useEffect(() => {
    if (loginUserData.email !== "") {
      emailValidator(setIsEmailValidationError, loginUserData.email);
    } else {
      setIsEmailValidationError(false);
    }
  }, [loginUserData.email]);
  return (
    <ScrollView
      style={container}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <View style={[inputWrapper, { width: width > 700 ? 600 : "95%" }]}>
        <Text style={text}>Welcome Back!</Text>
        <InputField
          textValue={loginUserData.email}
          placeHolder="email"
          width={"100%"}
          handleOnChangeText={(e) =>
            setLoginUserData({ ...loginUserData, email: e })
          }
          height={50}
          contentType="emailAddress"
          type="emailAddress"
          label="Email"
        />
        {isEmailValidationError && (
          <View style={errorContainer}>
            <Text style={errorText}>please enter valid email address</Text>
          </View>
        )}
        <InputField
          textValue={loginUserData.password}
          placeHolder="password"
          width={"100%"}
          handleOnChangeText={(e) =>
            setLoginUserData({ ...loginUserData, password: e })
          }
          height={50}
          contentType="password"
          type="password"
          label="Password"
        />
        {isPasswordValidationError && (
          <View style={errorContainer}>
            <Text style={guidelineHeaderText}>Password Guideines:</Text>
            {passwordGuideLines.map((guideline: string) => (
              <Text key={guideline} style={errorText}>
                {guideline}
              </Text>
            ))}
          </View>
        )}
        <View style={btnWrapper}>
          <View style={registerContainer}>
            <Text style={registerText}>you don't have an account? </Text>
            <Link href={"/register"} asChild>
              <Text style={registerLink}>please register here</Text>
            </Link>
          </View>
          <CustomButton
            title={isLoading ? "loading" : "Login"}
            onPressFunc={handlePost}
            isDisabled={isLoading ? true : false}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default ScreenWrapper(login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },
  text: {
    fontFamily: bold,
    fontSize: appTheme.font.large,
    color: appTheme.colors.white,
    marginBottom: 10,
  },
  inputWrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 12,
    backgroundColor: appTheme.colors.background,
    borderRadius: 10,
  },
  errorContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: -5,
  },
  guidelineHeaderText: {
    color: appTheme.colors.red,
    fontFamily: medium,
    fontSize: appTheme.font.medium,
    marginBottom: 5,
  },
  errorText: {
    color: appTheme.colors.red,
    fontFamily: regular,
    fontSize: appTheme.font.small,
  },
  registerContainer: {
    alignSelf: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: 20,
  },
  registerText: {
    color: appTheme.colors.white,
    fontFamily: regular,
    fontSize: appTheme.font.small,
  },
  registerLink: {
    color: appTheme.colors.primary,
    fontFamily: medium,
    fontSize: appTheme.font.small,
    textDecorationLine: "underline",
  },
  btnWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
