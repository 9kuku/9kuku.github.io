import { useCallback, useState } from "react";
import useValidate from "./useValidate";

const useSignForm = () => {
  const [realNameIsAbled, realNameWarnList, oncheckRealName] = useValidate("realName");
  const [usernameIsAbled, usernameWarnList, oncheckUsername] = useValidate("username");
  const [passwordIsAbled, passwordWarnList, oncheckPassword] = useValidate("password");

  const [userInfo, setUserInfo] = useState({
    realName: "",
    username: "",
    password: "",
  });

  const handleInputValue = useCallback(
    (key) => (e) => {
      setUserInfo({ ...userInfo, [key]: e.target.value });

      if (key === "username") {
        oncheckUsername(e.target.value);
      }
      if (key === "password") {
        oncheckPassword(e.target.value);
      }
    },
    [userInfo]
  );

  return {
    userInfo,
    setUserInfo,
    handleInputValue,
    realNameIsAbled,
    realNameWarnList,
    usernameIsAbled,
    usernameWarnList,
    passwordIsAbled,
    passwordWarnList,
  };
};

export default useSignForm;
