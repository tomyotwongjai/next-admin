import {useRef, useState} from 'react';
import axios from 'axios';

const AddClass = ({closeModal}) => {
    const [disable, setDisable] = useState(false);
    const formRef = useRef();

    // Async POST method api need create push data to database

    

    //  submission handling function need create


  return (
    <div className="modal">
        <div className="modal-backdrop" onClick={closeModal}></div>
        <div className="modal-content">
            <div className="modal-header">
                <h3>Add Class</h3>
                <span
                style={{padding: "10px", cursor: "pointer"}}
                onClick={() => closeModal()}
                >
                X
                </span>
            </div>
            <div className="modal-body content">
                <form ref={formRef}>
                    <div style={{display: "flex", margin: "2px 2px 0 0"}}>
                        <div
                            style={{flex: "1 1 100%", margin: "0 0 2px 5px"}}
                            className="inputField"
                        >
                            <label className="label" htmlFor="firstName">Class Name</label>
                            <input type="text" id="firstName" name="firstName" />
                        </div>
                         <div
                            style={{flex: "1 1 100%", margin: "0 0 2px 5px"}}
                            className="inputField"
                        >
                            <label className="label" htmlFor="course">Class description</label>
                            <input type="text" id="course" name="course" />
                        </div> 
                    </div>
                </form>
            </div>

            <div className="modal-footer">
                <button style={{margin: "0 5px"}} onClick={() => closeModal()}>Cancel</button>
                <button style={{margin: "0 5px"}}  disabled={disable}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default AddClass;