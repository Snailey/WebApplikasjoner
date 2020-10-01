import React, {useState} from 'react';
import Modal from 'react-modal';



function MyModal(props) {
    //Form
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [characters, setCharacters] = useState(30)
    

    const TitleHandleChange = (event) => {
        setTitle(event.currentTarget.value);
      };
    
    const DescriptionHandleChange = (event) => {
        setDescription(event.currentTarget.value);
        setCharacters(50 - event.currentTarget.value.length)   
    };
    
    const AuthorHandleChange = (event) => {
        setAuthor(event.currentTarget.value);
    };

    const SaveTodo = (event) => {
        props.updateModalIsOpen(false)

        const data={
            title: title,
            description: description,
            author: author
        }

        let dataarray = [...props.todoData];
        dataarray.unshift(data);

        props.updateToDoData(dataarray);
        
    };  

    return(
        <>
            
            <Modal
                isOpen={props.modalIsOpen}
                onRequestClose={() => props.updateModalIsOpen(false)}
                shouldCloseOnOverlayClick={true}
                className="modal-content"
                ariaHideApp={false}
            >
                <div className="modal-header">
                    <button id="modalclose" type="button" className="close" data-dismiss="modal" onClick={() => props.updateModalIsOpen(false)}>&times;</button>
                    <h4 className="modal-title">New todo</h4>
                </div>
                <div className="modal-body">
                    <form className="modal-form">
                        <div>
                            <label htmlFor="title">Title</label>
                        </div>
                        <div>
                            <input className="input" type="text" id="modaltitle" name="title" value={title} onChange={TitleHandleChange}></input>
                        </div>
                        <div>
                            <label htmlFor="description" >Description  <label id = "count">({characters} characters left)</label></label>
                        </div>
                        <div>
                            <input className="input" type="text" id="modaldescription" name="Description" value={description} onChange={DescriptionHandleChange}></input>
                        </div>
                        <div>
                            <label htmlFor="author">Author</label>
                        </div>
                        <div>
                            <input className="input" type="text" id="modalauthor" name="author" value={author} onChange={AuthorHandleChange}></input>
                        </div>
                        
                        </form> 
                        <div>
                            <button className="input btncomplete" type="submit" value="Submit" onClick={SaveTodo}>Lagre</button>
                        </div>
                </div>               
            </Modal>
        </>
    )
}      

export default MyModal;