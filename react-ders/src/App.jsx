import "./index.css"
import Header from "./components/Header"
import Footer from "./components/Footer";
import { useState } from "react";
import Card from "./components/Card";
import users from "./components/Data/Data";
import TodoList from "./components/TodoList";
import Todo from "./components/Test";

function App() {

  return (
    <>
      <Header />


      {/* <div className="card">
        {showData && users.map(({ id, name, username }) => {
          return <Card key={id}
            name={name}
            username={username} />
        })}
      </div> */}
      <TodoList />
      {/* <Todo /> */}

      <Footer />
    </>
  )
}
export default App;
