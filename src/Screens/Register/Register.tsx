import {
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useRouter } from "expo-router";

import ScreenWrapper from "../../HOCs/ScreenWrapper";
import { IUserRegister } from "../../Types/Auth/Types";
import { INumberOrNull, ITextInputType } from "../../Types/Shared/Types";
import {
  emailValidator,
  passwordGuideLines,
  passwordValidator,
} from "../../Utils/Funcs";
import CustomButton from "../../Components/CustomButton/CustomButton";
import InputField from "../../Components/InputField/InputField";
import { styles } from "./styles";
import { registrationRequest } from "~/src/HttpServices/Auth/RegistrationRequest";
import ServerError from "~/src/Components/HttpError/ServerError";

const register = () => {
  const [signUpData, setSignUpData] = useState<IUserRegister>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [registrationError, setRegistrationError] = useState<string>("");
  const [userId, setUserId] = useState<INumberOrNull>(null);
  const [isPasswordValidationError, setIsPasswordValidationError] =
    useState<boolean>(false);
  const [isEmailValidationError, setIsEmailValidationError] =
    useState<boolean>(false);
  const [isFirstNameValidationError, setIsFirstNameValidationError] =
    useState<boolean>(false);
  const [isLastNameValidationError, setIsLastNameValidationError] =
    useState<boolean>(false);
  const handleOnChangeFirstName = (value: ITextInputType) => {
    setSignUpData({
      ...signUpData,
      firstName: value,
    });
  };
  const handleOnChangeLastName = (value: ITextInputType) => {
    setSignUpData({
      ...signUpData,
      lastName: value,
    });
  };
  const handleOnChangePassword = (value: ITextInputType) => {
    setSignUpData({
      ...signUpData,
      password: value,
    });
  };
  const handleOnChangeEmail = (value: ITextInputType) => {
    setSignUpData({
      ...signUpData,
      email: value,
    });
  };
  const handleNavigate = (userId: number) => {
    router.push({
      pathname: "/verification",
      params: {
        userId,
      },
    });
  };
  const handleSignUp = () => {
    if (
      !isEmailValidationError &&
      !isPasswordValidationError &&
      !isFirstNameValidationError &&
      !isLastNameValidationError
    ) {
      setIsLoading(true);
      if (
        signUpData.email !== "" &&
        signUpData.password !== "" &&
        signUpData.firstName !== "" &&
        signUpData.lastName !== ""
      ) {
        const userData = {
          FirstName: signUpData.firstName,
          LastName: signUpData.lastName,
          Email: signUpData.email,
          Password: signUpData.password,
        };
        registrationRequest(
          userData,
          setIsLoading,
          setRegistrationError,
          handleNavigate
        );
        setSignUpData({
          ...signUpData,
          email: "",
          password: "",
          firstName: "",
          lastName: "",
        });
      } else if (
        signUpData.email === "" &&
        signUpData.password !== "" &&
        signUpData.firstName !== "" &&
        signUpData.lastName !== ""
      ) {
        setIsEmailValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email !== "" &&
        signUpData.password === "" &&
        signUpData.firstName !== "" &&
        signUpData.lastName !== ""
      ) {
        setIsPasswordValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email !== "" &&
        signUpData.password !== "" &&
        signUpData.firstName === "" &&
        signUpData.lastName !== ""
      ) {
        setIsFirstNameValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email !== "" &&
        signUpData.password !== "" &&
        signUpData.firstName !== "" &&
        signUpData.lastName === ""
      ) {
        setIsLastNameValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email === "" &&
        signUpData.password === "" &&
        signUpData.firstName === "" &&
        signUpData.lastName === ""
      ) {
        setIsEmailValidationError(true);
        setIsPasswordValidationError(true);
        setIsLastNameValidationError(true);
        setIsFirstNameValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email === "" ||
        signUpData.password === "" ||
        signUpData.firstName === "" ||
        signUpData.lastName === ""
      ) {
        if (signUpData.email === "") setIsEmailValidationError(true);
        if (signUpData.password === "") setIsPasswordValidationError(true);
        if (signUpData.firstName === "") setIsFirstNameValidationError(true);
        if (signUpData.lastName === "") setIsLastNameValidationError(true);
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    if (signUpData.password !== "") {
      passwordValidator(setIsPasswordValidationError, signUpData.password);
    } else {
      setIsPasswordValidationError(false);
    }
  }, [signUpData.password]);
  useEffect(() => {
    if (signUpData.email !== "") {
      emailValidator(setIsEmailValidationError, signUpData.email);
    } else {
      setIsEmailValidationError(false);
    }
  }, [signUpData.email]);
  useEffect(() => {
    if (signUpData.firstName !== "" || !signUpData.firstName) {
      if (signUpData.firstName && signUpData.firstName.length < 4) {
        setIsFirstNameValidationError(true);
      } else {
        setIsFirstNameValidationError(false);
      }
    } else {
      setIsFirstNameValidationError(false);
    }
  }, [signUpData.firstName]);
  useEffect(() => {
    if (signUpData.lastName !== "") {
      if (signUpData.lastName && signUpData.lastName.length < 4) {
        setIsLastNameValidationError(true);
      } else {
        setIsLastNameValidationError(false);
      }
    } else {
      setIsLastNameValidationError(false);
    }
  }, [signUpData.lastName]);
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
  const { width } = useWindowDimensions();
  return (
    <ScrollView
      style={container}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop:30
      }}
    >
      <View style={[inputWrapper, { width: width > 700 ? 600 : "95%" }]}>
        <Text style={text}>Registration</Text>
        <InputField
          textValue={signUpData.firstName}
          placeHolder="given name"
          width={"100%"}
          handleOnChangeText={handleOnChangeFirstName}
          height={50}
          contentType="givenName"
          type="givenName"
          label="Given Name"
        />
        {isFirstNameValidationError && (
          <View style={errorContainer}>
            <Text style={errorText}>please enter atleast 4 characters</Text>
          </View>
        )}
        <InputField
          textValue={signUpData.lastName}
          placeHolder="family name"
          width={"100%"}
          handleOnChangeText={handleOnChangeLastName}
          height={50}
          contentType="familyName"
          type="familyName"
          label="Family Name"
        />
        {isLastNameValidationError && (
          <View style={errorContainer}>
            <Text style={errorText}>please enter atleast 4 characters</Text>
          </View>
        )}
        <InputField
          textValue={signUpData.email}
          placeHolder="email"
          width={"100%"}
          handleOnChangeText={handleOnChangeEmail}
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
          textValue={signUpData.password}
          placeHolder="password"
          width={"100%"}
          handleOnChangeText={handleOnChangePassword}
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
            <Text style={registerText}>you already have an account? </Text>
            <TouchableOpacity
              onPress={() => router.push("/login")}
              style={styles.linkContainer}
            >
              <Text style={registerLink}>please login here</Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            title={isLoading ? "loading" : "Register"}
            onPressFunc={handleSignUp}
            isDisabled={isLoading ? true : false}
          />
        </View>
      </View>
      {registrationError && (
        <ServerError
          message={registrationError}
          handleCancel={() => setRegistrationError("")}
          isModalVisible={registrationError ? true : false}
        />
      )}
    </ScrollView>
  );
};

export default ScreenWrapper(register);
