import { useParams } from "react-router-dom";
import TaskModal from "../components/TaskModal";

const Teams = () => {
  const { name } = useParams();

  return (
    <div className="container-fluid">
      <div className="row mt-3 p-4">
        <div className="col-md-4">
            <div className="task_title">
                <h2>Task Title</h2>
            </div>
        </div>
        <div className="col-md-4">
            <h2>Task Members</h2>
        </div>
        <div className="col-md-4">
            <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#taskModal">Create Task</button>
            <TaskModal/>
        </div>
      </div>
      <div className="row mt-5 bg-white shadow-lg p-4">
        <div className="col-md-4">
          <div className="single_task ">
            <h3 className=" text-center">Tasks</h3>
            <hr />
            <div className="task_list">
              <div className="task_item border border-danger p-2 mb-2">
                <div className="d-flex align-items-center justify-content-between">
                  <h6>Task Title</h6>
                  <p>Due : 22/8/2023</p>
                </div>
                <p> <strong>Assign to :</strong> Akash</p>
                <p>
                  <strong>Description :</strong> Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>

                <select className="form-select" name="" id="">
                  <option value="-1">Change Status</option>
                  <option value="progress">Progress</option>
                  <option value="complete">Complete</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single_task ">
            <h3 className=" text-center">Progress</h3>
            <hr />
            <div className="task_list">
              <div className="task_item border border-danger p-2 mb-2">
                <div className="d-flex align-items-center justify-content-between">
                  <h6>Task Title</h6>
                  <p>Due : 22/8/2023</p>
                </div>
                <p>
                  <strong>Description</strong>: Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>

                <select className="form-select" name="" id="">
                  <option value="-1">Change Status</option>
                  <option value="progress">Progress</option>
                  <option value="complete">Complete</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single_task ">
            <h3 className=" text-center">Complete </h3>
            <hr />
            <div className="task_list">
              <div className="task_item border border-danger p-2 mb-2 shadow-lg">
                <div className="d-flex align-items-center justify-content-between">
                  <h6>Task Title</h6>
                  <p>Due : 22/8/2023</p>
                </div>
                <p>
                  <strong>Description</strong>: Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>

                <select className="form-select" name="" id="">
                  <option value="-1">Change Status</option>
                  <option value="progress">Progress</option>
                  <option value="complete">Complete</option>
                </select>
              </div>
              <div className="task_item border border-danger p-2 mb-2 shadow-lg">
                <div className="d-flex align-items-center justify-content-between">
                  <h6>Task Title</h6>
                  <p>Due : 22/8/2023</p>
                </div>
                <p>
                  <strong>Description</strong>: Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>

                <select className="form-select" name="" id="">
                  <option value="-1">Change Status</option>
                  <option value="progress">Progress</option>
                  <option value="complete">Complete</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
