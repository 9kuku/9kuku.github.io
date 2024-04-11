/** @jsxImportSource @emotion/react */
import { ToastContainer } from "react-toastify";
import notice from "../../../utils/noticeUtils";
import { signUpApi } from "../../../api/auth";
import useSignForm from "../../../hooks/useSignForm";
import * as authSytle from "../authStyle";
import { signUperrorWrapper, signUplabelCss } from "./style";

const SignUp = ({ onOpen, onClose }) => {
  const {
    userInfo,
    handleInputValue,
    realNameIsAbled,
    realNameWarnList,
    usernameIsAbled,
    usernameWarnList,
    passwordIsAbled,
    passwordWarnList,
  } = useSignForm();

  const handleSignUpClick = (e) => {
    e.preventDefault();
    signUpApi(userInfo.realName, userInfo.username, userInfo.password)
      .then(() => {
        e.target.reset();
        notice("success", "회원가입 성공");
        onOpen();
      })
      .catch((err) => {
        notice("error", err.response.data.message);
      });
  };

  return (
    <form onSubmit={handleSignUpClick}>
      <label aria-hidden="true" css={signUplabelCss} onClick={onClose}>
        Sign up
      </label>

      <input
        type="text"
        placeholder="realName"
        required=""
        css={authSytle.inputCss}
        onChange={handleInputValue("realName")}
      />
      <input
        type="text"
        placeholder="username"
        required=""
        css={authSytle.inputCss}
        onChange={handleInputValue("username")}
      />
      <input
        type="password"
        placeholder="Password"
        required=""
        css={authSytle.inputCss}
        onChange={handleInputValue("password")}
      />

      <div css={signUperrorWrapper}>
        {realNameWarnList?.map((item) => (
          <div key={item}>{item}</div>
        ))}
        {usernameWarnList?.map((item) => (
          <div key={item}>{item}</div>
        ))}
        {passwordWarnList?.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>

      <authSytle.AuthButton
        disabled={!usernameIsAbled || !passwordIsAbled}
        realNameisabled={realNameIsAbled.toString()}
        emailisabled={usernameIsAbled.toString()}
        passwordisabled={passwordIsAbled.toString()}
      >
        Sign up
      </authSytle.AuthButton>
      <ToastContainer position="top-right" />
    </form>
  );
};

export default SignUp;
