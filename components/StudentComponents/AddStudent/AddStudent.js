import {useState, useEffect} from 'react';
import axios from 'axios';


const AddStudent = ({closeModal}) => {
    const [formData, setFormData] = useState({})

    
 async function handleSubmit() {
    try{
        response = await axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            url: '/api/student/add',
            data: formData,
        })
        let data = response.data;
        return {
            tokenInfo: data,
            timeStamp: new Date().getTime(),
        }
    } catch(error){
        console.log("err->", err.response.data)
        return resizeBy.status(500).send({rret_code: ReturnCodes.SOMETHING_WENT_WRONG})
    }
 }

  return (
    <div className="modal">
        <div className="modal-backdrop" onClick={closeModal}></div>
        <div className="modal-content">
            <div className="modal-header">
                <h3>Add a Student</h3>
                <span
                style={{padding: "10px", cursor: "pointer"}}
                onClick={() => closeModal()}
                >
                X
                </span>
            </div>
            <div className="modal-body content">
                <form onSubmit={handleSubmit}>
                    <div style={{display: "flex", margin: "2px 2px 0 0"}}>
                        <div
                            style={{flex: "1 1 100%", margin: "0 0 2px 5px"}}
                            className="inputField"
                        >
                            <label className="label" htmlFor="firstName">Name</label>
                            <input type="text" id="firstName" name="firstName"
                             onChange={e => setFormData({...formData, name: e.target.value})} 
                             />
                        </div>
                         <div
                            style={{flex: "1 1 100%", margin: "0 0 2px 5px"}}
                            className="inputField"
                        >
                            <label className="label" htmlFor="course">Class</label>
                            <input type="text" id="course" name="course"
                             onChange={e => setFormData({...formData, classes: e.target.value})} 
                             />
                        </div> 
                    </div>
               
                    <div className="modal-footer">
                        <button style={{margin: "0 5px"}} onClick={() => closeModal()}>Cancel</button>
                        <button style={{margin: "0 5px"}}  >Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddStudent;