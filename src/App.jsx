import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import LoggedIn from "./components/LoggedIn";
import LoggedOut from "./components/LoggedOut";

export default function App() {
  const { isLoading, isAuthenticated } = useKindeAuth();

  if (isLoading) return <>Loading...</>;

  return isAuthenticated ? <LoggedIn /> : <LoggedOut />;
}
