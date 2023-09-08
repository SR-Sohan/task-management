import { useParams } from "react-router-dom";
import TaskModal from "../components/TaskModal";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import defaultImage from "../assets/preview.png";

const Teams = () => {
  const { name } = useParams();
  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let teams = JSON.parse(localStorage.getItem("teams")) || [];

    let filterTeam = teams.find((team) => team.teamName == name);

    setMembers(filterTeam.members);
    setTasks(filterTeam.tasks);

   
  }, []);


  const handleSubmit = (data) => {
    let teams = JSON.parse(localStorage.getItem("teams")) || [];

    const index = teams.findIndex((team) => team.teamName === name);

    if (index !== -1) {
      teams[index].tasks.push(data);
      localStorage.setItem("teams", JSON.stringify(teams));
      document.getElementById("taskForm").reset();
      document.getElementById("closeModal").click();
      toast.success("Task Create Succefully");

      let filterTeam = teams.find((team) => team.teamName == name);
      setTasks(filterTeam.tasks);
    }
  };

  const statusChange = (e, taskName) => {
    let teams = JSON.parse(localStorage.getItem("teams")) || [];
    const teamContainingTask = teams.find((team) =>
      team.tasks.some((task) => task.name === taskName)
    );

    if (teamContainingTask) {
      const newStatus = e.target.value;
      const taskToUpdate = teamContainingTask.tasks.find(
        (task) => task.name === taskName
      );

      if (taskToUpdate) {
        taskToUpdate.status = newStatus;
        localStorage.setItem("teams", JSON.stringify(teams));
        let filterTeam = teams.find((team) => team.teamName == name);
        setTasks(filterTeam.tasks);
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row mt-3 p-4">
        <div className="col-md-4">
          <div className="task_title">
            <h2>Team Name: {name}</h2>
          </div>
        </div>
        <div className="col-md-4">
          <h2>Task Members</h2>
          {members && members.map((member) => <h4>{member.name}</h4>)}
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-outline-success"
            data-bs-toggle="modal"
            data-bs-target="#taskModal"
          >
            Create Task
          </button>
          <TaskModal members={members} handleTask={handleSubmit} />
        </div>
      </div>
      <div className="row mt-5 bg-white shadow-lg p-4">
        <div className="col-md-4">
          <div className="single_task ">
            <h3 className=" text-center">Tasks</h3>
            <hr />
            <div className="task_list">
              {tasks &&
                tasks.map((task) => {
                  if (task.status === "pending") {
                    return (
                      <div
                        key={task.name}
                        className="task_item border border-danger p-2 mb-2"
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          <h6>{task.name}</h6>
                          <p>Due : {task.due}</p>
                        </div>
                        <p>
                          <strong>Assign to :</strong> {task.assign}
                        </p>
                        <p>
                          <strong>Description :</strong> {task.description}
                        </p>

                        <select
                          onChange={(e) => statusChange(e, task.name)}
                          className="form-select"
                          name=""
                          id=""
                          value={task.status}
                        >
                          <option value="-1">Change Status</option>
                          <option value="pending">Pending</option>
                          <option value="progress">Progress</option>
                          <option value="complete">Complete</option>
                        </select>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single_task ">
            <h3 className=" text-center">Progress</h3>
            <hr />
            <div className="task_list">
              {tasks &&
                tasks.map((task) => {
                  if (task.status === "progress") {
                    return (
                      <div
                        key={task.name}
                        className="task_item border border-danger p-2 mb-2"
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          <h6>{task.name}</h6>
                          <p>Due : {task.due}</p>
                        </div>
                        <p>
                          {" "}
                          <strong>Assign to :</strong>
                          {task.assign}
                        </p>
                        <p>
                          <strong>Description :</strong>
                          {task.description}
                        </p>

                        <select
                          onChange={(e) => statusChange(e, task.name)}
                          className="form-select"
                          name=""
                          id=""
                          value={task.status}
                        >
                          <option value="-1">Change Status</option>
                          <option value="pending">Pending</option>
                          <option value="progress">Progress</option>
                          <option value="complete">Complete</option>
                        </select>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single_task ">
            <h3 className=" text-center">Complete </h3>
            <hr />
            <div className="task_list">
              {tasks &&
                tasks.map((task) => {
                  if (task.status === "complete") {
                    return (
                      <div
                        key={task.name}
                        className="task_item border border-danger p-2 mb-2"
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          <h6>{task.name}</h6>
                          <p>Due : {task.due}</p>
                        </div>
                        <p>
                          <strong>Assign to :</strong>
                          {task.assign}
                        </p>
                        <p>
                          <strong>Description :</strong>
                          {task.description}
                        </p>

                        <select
                          onChange={(e) => statusChange(e, task.name)}
                          className="form-select"
                          name=""
                          id=""
                          value={task.status}
                        >
                          <option value="-1">Change Status</option>
                          <option value="pending">Pending</option>
                          <option value="progress">Progress</option>
                          <option value="complete">Complete</option>
                        </select>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
