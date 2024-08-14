import { Link } from "react-router-dom";
import "./App.css";
import { APP_ROUTES } from "./constants/constants";

function App() {
  return (
    <>
      <div>
        <Link to={APP_ROUTES.CONTROLLED}>Controlled form</Link>
        <Link to={APP_ROUTES.UNCONTROLLED}>Uncontrolled form</Link>
      </div>
    </>
  );
}

export default App;
