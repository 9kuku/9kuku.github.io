/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import { loginApi } from "../../../api/auth";
import notice from "../../../utils/noticeUtils";
import useSignForm from "../../../hooks/useSignForm";
import * as authSytle from "../authStyle";
import { buttonCss } from "../authStyle";
import { LoginContainer, loginErrorWrapper, loginLabelCss } from "./style";
import { KAKAO_AUTH_URL } from "./OAuth";
import kakologin from "./kakaologin.png";
import styled from "@emotion/styled";

const KakaoButton = styled.a`
  ${buttonCss}
`;

const Login = ({ isShown, onOpen }) => {
  const navigate = useNavigate();
  const {
    userInfo,
    handleInputValue,
    emailIsAbled,
    emailWarnList,
    passwordIsAbled,
    passwordWarnList,
  } = useSignForm();

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const handleLoginClick = () => {
    loginApi(userInfo.email, userInfo.password)
      .then((res) => {
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
          placeholder="Email"
          required=""
          onChange={handleInputValue("email")}
        />
        <input
          css={authSytle.inputCss}
          type="password"
          placeholder="password"
          required=""
          onChange={handleInputValue("password")}
        />
        <div css={loginErrorWrapper}>
          {emailWarnList?.map((item) => (
            <div key={item}>{item}</div>
          ))}
          {passwordWarnList?.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>

        <authSytle.AuthButton
          onClick={handleLoginClick}
          disabled={!emailIsAbled || !passwordIsAbled}
          emailisabled={emailIsAbled.toString()}
          passwordisabled={passwordIsAbled.toString()}
        >
          Login
        </authSytle.AuthButton>
        <KakaoButton onClick={handleKakaoLogin} className={"kakaobtn"}>
          <img src={kakologin} />
        </KakaoButton>
      </LoginContainer>
      <ToastContainer position="top-right" />
    </>
  );
};

export default Login;
