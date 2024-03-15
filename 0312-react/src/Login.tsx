interface LoginProps {
  email: string;
  password: string;
}

interface ForgotPasswordProps {
  email: string;
}

export const Login = (props: LoginProps) => {
  const { email, password } = props;
  const result =
    email === "subashkarki68@gmail.com" ? "Welcome Subash" : "Invalid User";
  return <>{result}</>;
};

export const ForgotPassword = (props: ForgotPasswordProps) => {
  const { email } = props;
  return <>Your Email is {email}</>;
};
