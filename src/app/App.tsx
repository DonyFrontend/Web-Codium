import { AuthProvider } from "./providers/auth/AuthProvider";
import { RoutesComponent } from "./providers/routes/Routes";
import "./styles/app.css";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RoutesComponent />
      </AuthProvider>
    </>
  );
};

export default App;
