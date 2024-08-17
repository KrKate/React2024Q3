import { Link } from "react-router-dom";
import "./App.css";
import { APP_ROUTES } from "./constants/constants";

function App() {
  return (
    <>
      <main>
        <Link className="mainLink" to={APP_ROUTES.CONTROLLED}>
          Controlled form
        </Link>
        <Link className="mainLink" to={APP_ROUTES.UNCONTROLLED}>
          Uncontrolled form
        </Link>
      </main>
    </>
  );
}

export default App;
