import { useState } from "react";

/**
 * validity 체크하는 hook
 * @param {"username" || "password"} type
 * @returns
 */
const useValidate = (type) => {
  const [validity, setValidity] = useState(false);
  const [warnList, setWarnList] = useState([]);

  const oncheckValidity = (text) => {
    const warnList = [];
    if (!text) {
      return setValidity(false);
    }
    const regexforValAuth = {
      password: {
        warnText: "비밀번호는 8글자 이상이어야 합니다.",
        fn: new RegExp("(?=.{8,})"),
      },
      username: {
        warnText: "username(이메일)에는 @가 포함되어야 합니다.",
        fn: new RegExp("@"),
      },
    };
    const { warnText, fn } = regexforValAuth[type];
    if (!fn.test(text)) {
      warnList.push(warnText);
    }

    setWarnList(warnList);
    if (warnList.length > 0) {
      setValidity(false);
    } else {
      setValidity(true);
    }
  };
  return [validity, warnList, oncheckValidity];
};

export default useValidate;
