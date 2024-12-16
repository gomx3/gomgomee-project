import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 사용자 정보 스키마 정의
const schema = yup.object().shape({
  email: yup.string().email().matches(emailPattern).required(),
  password: yup.string().min(6).max(18).required(),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});

const SignupPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    if (isValid) {
      const userData = {
        email: data.email,
        password: data.password,
        passwordCheck: data.passwordCheck,
      };

      fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("회원가입 실패: 다시 시도해 주세요.");
        });
    }
    reset();
  };

  return (
    <SignUpBox>
      <h3>회원가입</h3>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <InputBox
          type="email"
          {...register("email")}
          placeholder="id"
          error={errors.email?.message}
        />
        <InputBox
          type="password"
          {...register("password")}
          placeholder="pw"
          error={errors.password?.message}
        />
        <InputBox
          type="password"
          {...register("passwordCheck")}
          placeholder="pw check"
          error={errors.passwordCheck?.message}
        />
        <SignUpBtn disabled={!isValid}>제출</SignUpBtn>
      </SignUpForm>
      <MoveToHome onClick={() => navigate("/")}>
        click to home
      </MoveToHome>
    </SignUpBox>
  );
};

export default SignupPage;

const SignUpBox = styled.div`
  position: fixed;
  top: 30%;
  left: 20%;
  display: flex;
  align-items: center;
  padding: 30px;
  border: 1px solid black;
  background-color: white;
  z-index: 1;
`;
const InputBox = styled.input`
  margin: 3px;
  padding: 7px;
  border: none;
`;
const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  margin-left: 30px;
`;
const SignUpBtn = styled.button`
  margin-top: 10px;
  padding: 7px 0;
  border: 1px solid #000;
  border-radius: 10px;
  transition: color 0.3s ease;
  background-color: #fff;
  color: #000;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background-color: #ccc;
    color: #fff;
    border: none;
    &:hover {
      color: #fff;
      cursor: default;
    }
  }
`;
const MoveToHome = styled.div`
  position: absolute;
  font-size: 0.8rem;
  bottom: -25px;
  right: 0px;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;
