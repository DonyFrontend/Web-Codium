import { AuthProvider } from "./providers/auth/AuthProvider";
import ErrorBoundary from "./providers/error/ErrorBoundary";
import { RoutesComponent } from "./providers/routes/Routes";
import "./styles/app.css";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <AuthProvider>
          <RoutesComponent />
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;
