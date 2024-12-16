import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 사용자 정보 스키마 정의
const schema = yup.object().shape({
  email: yup.string().email().matches(emailPattern).required(),
  password: yup.string().min(6).max(18).required(),
});

const SignInBox = () => {
  const { login } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  // 제출 시 발생할 이벤트
  const onSubmit = async (data) => {
    login(data.email, data.password);
  };

  return (
    <UserContainer>
      <UserBox>
        <h3 style={{ color: "white" }}>누구?</h3>
        <SignInForm onSubmit={handleSubmit(onSubmit)}>
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
          <SignInBtn disabled={!isValid}>저 맞습니다?</SignInBtn>
        </SignInForm>
      </UserBox>
      <MoveToSignUp onClick={() => navigate("/signup")}>
        click to sign up
      </MoveToSignUp>
    </UserContainer>
  );
};

export default SignInBox;

const UserContainer = styled.div`
  position: fixed;
  top: 300px;
  left: 400px;
  display: flex;
  flex-direction: column;
`;
const UserBox = styled.div`
  position: relative;
  background-color: #7e9040;
  width: 400px;
  height: 280px;
`;
const InputBox = styled.input`
  margin: 3px;
  padding: 5px;
  border: none;
`;
const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SignInBtn = styled.button`
  margin: 3px;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const MoveToSignUp = styled.div`
  position: absolute;
  font-size: 0.8rem;
  bottom: -25px;
  right: 10px;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;
