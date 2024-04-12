/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import { loginApi } from "../../../api/auth";
import notice from "../../../utils/noticeUtils";
import useSignForm from "../../../hooks/useSignForm";
import * as authSytle from "../authStyle";
import { LoginContainer, loginErrorWrapper, loginLabelCss } from "./style";

const Login = ({ isShown, onOpen }) => {
  const navigate = useNavigate();
  const {
    userInfo,
    handleInputValue,
    usernameIsAbled,
    usernameWarnList,
    passwordIsAbled,
    passwordWarnList,
  } = useSignForm();

  const handleLoginClick = () => {
    loginApi(userInfo.username, userInfo.password)
      .then((res) => {
        console.log(res)
        notice("success", "로그인 성공");
        localStorage.setItem("Authorization", res.headers['authorization']);
        navigate("/main");
      })
      .catch((err) => {
        notice("error", err.response.data.message);
      });
  };

  return (
    <>
      <LoginContainer isShown={isShown} onSubmit={(e) => e.preventDefault()}>
        <label aria-hidden="true" onClick={onOpen} css={loginLabelCss}>
          Login
        </label>
        <input
          css={authSytle.inputCss}
          type="text"
          placeholder="username"
          required=""
          onChange={handleInputValue("username")}
        />
        <input
          css={authSytle.inputCss}
          type="password"
          placeholder="password"
          required=""
          onChange={handleInputValue("password")}
        />
        <div css={loginErrorWrapper}>
          {usernameWarnList?.map((item) => (
            <div key={item}>{item}</div>
          ))}
          {passwordWarnList?.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>

        <authSytle.AuthButton
          onClick={handleLoginClick}
          disabled={!usernameIsAbled || !passwordIsAbled}
          emailisabled={usernameIsAbled.toString()}
          passwordisabled={passwordIsAbled.toString()}
        >
          Login
        </authSytle.AuthButton>
      </LoginContainer>
      <ToastContainer position="top-right" />
    </>
  );
};

export default Login;
