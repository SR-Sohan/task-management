const TaskModal = ({handleTask,members}) => {

    const submitTask = () => {
        handleTask("asdf")
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
            <form>
                <div className="mb-3">
                    <label htmlFor="name">Task Name</label>
                    <input className="form-control" type="text" name="name" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="due">Due Date</label>
                    <input className="form-control" type="date" name="due" id="due" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description">Description</label>
                    <input className="form-control" type="text" name="description" id="description" />
                </div>
                <div className="mb-3">
                    {
                        members.map( member => <div key={member.email} className="assign">                       
                        <input class="form-check-input" type="radio" name="assign" id={member.name} value={member.email} />
                        <label class="form-check-label ms-2" htmlFor={member.name}>{member.name}</label>
                    </div>)
                    }
                 
                  
                </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
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
