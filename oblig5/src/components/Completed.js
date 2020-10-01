import React, {useState} from 'react';

function Completed(props) {

  const [checkbox, setCheckbox] = useState(true);
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  var list = [...props.completedData]

  const ToggelCheckbox = (event) => {
    setCheckbox(checkbox ? false : true)
  }

  var completed = list

  if (checkbox) {
    completed.sort((a, b) => a.title.localeCompare(b.title));
  }
  else {
    completed.sort((a, b) => a.date.localeCompare(b.date));
  }

  return (
    <>
      <div className="main">
        <div id="complete">Completed todos</div>
          <form id="date">  
          <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange}></input> 
            <input type="checkbox" id="filterdate" onChange={ToggelCheckbox}></input>
            <label id="grey" htmlFor="filterdate"> Filter by date</label>
          </form>
            <ul className="table">
              <li className="thead">
                <div className="title">Title</div>
                <div className="author">Author</div>
                <div className="description">Description</div>
                <div className="date">Date</div>
              </li>
              {completed
                          .filter(data => data.title.includes(searchTerm))
                          .map(data => (
                            <li key={data.title} className="row">
                                <div className="title">{data.title}</div>
                                <div className="author">{data.author}</div>
                                <div className="description">{data.description}</div>
                                <div className="date">{data.date}</div>
                            </li>
                        ))}
           </ul>
      </div>
    </>
  );
}

export default Completed;
