import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./ui/Form";
import CompletedForm from "./ui/CompletedForm";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Form} />
        <Route path="/completed" component={CompletedForm} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
