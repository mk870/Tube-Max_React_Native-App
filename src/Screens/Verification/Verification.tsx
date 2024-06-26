import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import InputField from "~/src/Components/InputField/InputField";
import { IStringOrNull } from "~/src/Types/Shared/Types";
import { styles } from "./styles";
import { verificationRequest } from "~/src/HttpServices/Auth/VerificationRequest";
import ButtonSpinner from "~/src/Components/Spinner/ButtonSpinner";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import { resendVerificationCodeRequest } from "~/src/HttpServices/Auth/ResendVerificationCodeRequest";
import { useAppDispatch } from "~/src/Redux/Hooks/Hooks";
import { updateAccessToken } from "~/src/Redux/Slices/AccessToken/AccessTokenSlice";
import ServerError from "~/src/Components/HttpError/ServerError";

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [isVerificationLoading, setIsVerificationLoading] =
    useState<boolean>(false);
  const [isResendLoading, setIsResendLoading] = useState<boolean>(false);
  const [typingError, setTypingError] = useState<IStringOrNull>(null);
  const [verificationError, setVerificationError] = useState<string>("");
  const { userId } = useLocalSearchParams();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleNavigate = () => router.replace("/movies");
  const processedUserId = userId
    ? Array.isArray(userId)
      ? 0
      : Number(userId)
    : 0;
  const { width } = useWindowDimensions();
  const handleVerification = () => {
    const data = {
      Id: processedUserId,
      VerificationCode: Number(verificationCode),
    };
    if (!typingError) {
      verificationRequest(
        data,
        setIsVerificationLoading,
        setVerificationError,
        handleNavigate,
        (accessToken: string) => dispatch(updateAccessToken(accessToken))
      );
      setVerificationCode("");
    }
  };
  const handleResendCode = () => {
    if (!typingError) {
      resendVerificationCodeRequest(
        setIsResendLoading,
        setVerificationError,
        processedUserId
      );
    }
  };
  useEffect(() => {
    if (verificationCode && verificationCode.length < 6)
      setTypingError("verification code should be 6 digits");
    else setTypingError(null);
  }, [verificationCode]);
  const handleAlertCancel = () => {
    if (
      verificationError ===
      "this verification code has expired please signup again"
    ) {
      setVerificationError("");
      router.push("/register");
    } else {
      setVerificationError("");
    }
  };
  return (
    <View style={styles.container}>
      {isVerificationLoading ? (
        <ScreenSpinner />
      ) : (
        <View
          style={[styles.inputWrapper, { width: width > 700 ? 600 : "95%" }]}
        >
          <Text style={styles.title}>Verification</Text>
          <InputField
            width={"100%"}
            height={40}
            handleOnChangeText={(e) => setVerificationCode(e)}
            textValue={verificationCode}
            label="Code"
            type="number"
            handleOnEnter={handleVerification}
            contentType="none"
            placeHolder=""
          />
          {typingError && <Text style={styles.errorText}>{typingError}</Text>}
          <TouchableOpacity
            onPress={handleResendCode}
            style={styles.linkContainer}
          >
            {isResendLoading ? (
              <ButtonSpinner />
            ) : (
              <Text style={styles.resendCodeText}>Resend Code</Text>
            )}
          </TouchableOpacity>
          {verificationError && (
            <ServerError
              handleCancel={handleAlertCancel}
              message={verificationError}
              isModalVisible={verificationError ? true : false}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default ScreenWrapper(Verification);
