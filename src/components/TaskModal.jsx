import { useState } from "react";
import { toast } from "react-toastify";

const TaskModal = ({handleTask,members}) => {

  const [data,setData] = useState({});

  const handleChange = (e) => {
    setData((prev) => ({...prev, [e.target.name]: e.target.value}))
    setData((prev) => ({...prev, status: "pending"}))
  }

    const submitTask = () => {

      if(data.name === ''){
        toast.error("Please enter Task Name")
      }else if(data.due === ""){
        toast.error("Please Select Due Date")
      }else if( data.description === ""){
        toast.error("Please enter Description")
      }else if(data.assign === ''){
        toast.error("Please select member")
      }else {
        handleTask(data);
      }
      
    }

  return (
    <div
      class="modal fade"
      id="taskModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Create Task
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form id="taskForm">

                <div className="mb-3">
                    <label htmlFor="name">Task Name</label>
                    <input onChange={handleChange} className="form-control" type="text" name="name" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="due">Due Date</label>
                    <input onChange={handleChange} className="form-control" type="date" name="due" id="due" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description">Description</label>
                    <input onChange={handleChange} className="form-control" type="text" name="description" id="description" />
                </div>
                <div className="mb-3">
                    {
                        members.map( member => <div key={member.email} className="assign">                       
                        <input onChange={handleChange} class="form-check-input" type="radio" name="assign" id={member.name} value={member.email} />
                        <label class="form-check-label ms-2" htmlFor={member.name}>{member.name}</label>
                    </div>)
                    }
                  
                </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              id="closeModal"
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button onClick={submitTask} type="button" class="btn btn-primary">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
