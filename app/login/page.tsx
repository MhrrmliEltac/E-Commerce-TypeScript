import { getCurrentUser } from "../actions/getCurrentUser";
import LoginClient from "../components/Auth/LoginClient";

const Login = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div>
      <LoginClient currentUser={currentUser} />
    </div>
  );
};

export default Login;
