import Card from "./components/Card";
import {CardVariant} from "./components/Card";
import EventItem from "./components/EventItem";
import {BrowserRouter,Routes, Route, Link} from "react-router-dom";
import UserPage from "./page/UserPage";
import TodosPage from "./page/TodosPage";
import UsersItemPage from "./page/UsersItemPage";
import TodosItemPage from "./page/TodosItemPage";

const App = () => {

  return (
    <div>

        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/users'>Users</Link>
                        <Link to='/todos'>Todos</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path='/users' element={<UserPage/>}/>

                <Route path='/todos' element={<TodosPage/>}/>

                <Route path='/users/:id' element={<UsersItemPage/>}/>
                <Route path='/todos/:id' element={<TodosItemPage/>}/>

            </Routes>
        </BrowserRouter>
        <Card width='200px' height='200px' variant={CardVariant.outlined}>
            <button>Click me</button>
            text
        </Card>

        <EventItem/>
    </div>
  );
}

export default App;
