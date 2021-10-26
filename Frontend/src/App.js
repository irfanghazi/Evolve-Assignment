import NavBar from "./component/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./component/HomeScreen";
import BlogScreen from "./component/Admin/BlogList";
import AddNewBlog from "./component/Admin/AddNewBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/admin" component={BlogScreen} exact />
          <Route path="/admin/addblog" component={AddNewBlog} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
