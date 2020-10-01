import React, {useState} from "react";
import './App.css';
import Header from "./components/Header"
import Completed from "./components/Completed"
import ToDos from "./components/Todos"
import MyModal from "./components/MyModal"
import NewToDoBTN from './components/NewToDoBTN'


function App() {

  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const [todoData, setTodoData] = useState([
    {
        title: 'Dette er en ToDo 1',
        description: 'Her bør det stå noe',
        author: 'Test Testesen',
    },
    {
        title: 'Dette er en ToDo 2',
        description: 'Her bør det stå noe',
        author: 'Test Testesen',
    },
    {
        title: 'Dette er en ToDo 3',
        description: 'Her bør det stå noe',
        author: 'Test Testesen',
    },
    {
        title: 'Dette er en ToDo 4',
        description: 'Her bør det stå noe',
        author: 'Test Testesen',
    }
  ]);

  const [completedData, setCompletedData] = React.useState([
    {
        title: 'Her er en Completed 1',
        description: 'Her bør det stå noe',
        author: 'Test Testesen',
        date: "01.06.20",
    },
    {
        title: 'Dette er en Completed 2',
        description: 'Her bør det stå noe',
        author: 'Test Testesen',
        date: "16.09.20",
    },
    {
        title: 'Kanskje dette er en Completed 3',
        description: 'Her bør det stå noe',
        author: 'Test Testesen',
        date: "05.06.20",
    },
    {
        title: 'Noen ganger er dette en Completed 4',
        description: 'Her bør det stå noe',
        author: 'Test Testesen',
        date: "10.05.20",
    }
  ])

  const updateModalIsOpen = data => {
    setModalIsOpen(data)
  }

  const updateToDoData = data => {
    setTodoData(data)
  }

  const updateCompletedData = data => {
    setCompletedData(data)
  }

  console.log((new Date()).toLocaleDateString('en-US'))

  return (
    <div className="App">
      <Header />
      <NewToDoBTN updateModalIsOpen={updateModalIsOpen}/>
      <MyModal todoData={todoData} updateToDoData={updateToDoData} modalIsOpen={modalIsOpen} updateModalIsOpen={updateModalIsOpen}/>
      <ToDos todoData={todoData} completedData={completedData} updateToDoData={updateToDoData} updateCompletedData={updateCompletedData}/>
      <Completed completedData={completedData}/>
    </div>
  );

}  

export default App;


