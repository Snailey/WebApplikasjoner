import React from "react";

function ToDos(props)  {

    function GetDate() {
        var d = new Date();
        var ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d)
        var mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
        var da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
        var date = da + "." + mo + "." + ye;   

        return date;
    }       

    const DoneCard  = (index) => {

        let newCompleted={
            title: props.todoData[index].title,
            description: props.todoData[index].description,
            author: props.todoData[index].author,
            date: GetDate()       
        }

        let compData = [...props.completedData]
        compData.push(newCompleted);
        let todoData = [...props.todoData]
        
        todoData.splice(index,1)
          
        props.updateToDoData(todoData)
                
        props.updateCompletedData(compData)
        
    }

    const RemoveCard = (index) => {

        let data = [...props.todoData]
        data.splice(index,1)

        props.updateToDoData(data)
        
    }   

    let data = [...props.todoData]

    if (data.length === 0) {
        return <h3>Jippi! Ingen todos i dag</h3>
        } else {   
        return (
            <>
                <div className="main">
                    <div id="cards">   
                        {data.slice(0, 3).map((data, index) => (
                        <div key={data.title} id={"card" + (index)} className="column" >
                            <h2 id="cardtitle">{data.title}</h2>
                            <p id="carddesc">{data.description}</p>
                            <button className="btn btndelete" onClick={() => { RemoveCard(index)}}>Delete</button>
                            <button className="btn btncomplete" onClick={() => { DoneCard(index)}}>Complete</button>
                        </div>
                        ))}       
                    </div>
                </div>
            </>
        );
    }
}

export default ToDos;