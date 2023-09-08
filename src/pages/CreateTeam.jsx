import { useState } from "react";
import { toast } from "react-toastify";

const CreateTeam = () => {

  const [suggestion, setSuggestion] = useState([]);
  const [showSuggection,setShowSuggestion] = useState(false)
  const [select,setSelect] = useState({});
  const [member,setMember] = useState([]);
  const [team,setTeam] = useState('');

  const users = JSON.parse(localStorage.getItem("users"));
  const loginUser = JSON.parse(localStorage.getItem("isLogin"));

  const searchChange = (e) => {
    setShowSuggestion(true)
    setSelect({name: e.target.value})
    let val = e.target.value    
    let searchVal = users.filter( user => {
        return user.name.toLowerCase().includes(val.toLowerCase()) && user.email !== loginUser.email
    } )
    setSuggestion(searchVal)
  }

  const addMember = () => {  
    setMember((prev) => [...prev, select])
    setSelect({})
  }

  const deleteMember = (email) => {
     let filterMember = member.filter( item => item.email !== email)
     setMember(filterMember)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(team === ''){
        toast.error("Team name is Required")
    }else if(member.length < 1){
        toast.error("Member name is Required")
    }else{
        let existingTeams = JSON.parse(localStorage.getItem("teams")) || [];

        let teamCreate = {
            teamName: team,
            owner: loginUser.email,
            members:member,
            tasks: []
        }

        existingTeams.push(teamCreate)

        localStorage.setItem("teams",JSON.stringify(existingTeams))

        setSelect({})
        setTeam('')
        setMember([])
        toast.success("Team Create Successfully")

    }
  }
  

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="mt-5 w-75 p-5 mx-auto shadow-lg" action="">
          <h1 className="text-success">Create Team</h1>
          <hr />
          <div className="mb-3 mt-4">
            <label htmlFor="name">Team Name</label>
            <input onChange={(e) => setTeam(e.target.value)} className="form-control" type="text" name="name" id="name" value={team} />
          </div>
          <div className="mb-3">
            <ol className="user_list">
                {
                    member && member.map( item =>  <li key={item.email} className="d-flex ">
                    <h4>{item.name}</h4>
                    <p onClick={e => deleteMember(item.email)} className="ms-3 text-danger">
                      <i class="fa-solid fa-trash "></i>
                    </p>
                  </li>)
                }
           
            </ol>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <div className="position-relative">
              <input
                className="form-control "
                type="text"
                name="user"
                id="user"
                placeholder="Add team member"
                onChange={searchChange}
                value={select.name ? select.name : ''}
              />
              {
                showSuggection &&  <div
                style={{ height: "300px" }}
                className="dropDown  bg-white p-3 w-100 position-absolute"
              >
                {
                    suggestion.map( item => <p key={item.email} onClick={(e) => {
                        setSelect({name: item.name, email: item.email})
                        setShowSuggestion(false)
                    }} style={{ cursor: "pointer" }}>{item.name}</p>)
                }
                
              </div>
              }
             
            </div>

            <button onClick={addMember} className="btn btn-outline-danger ms-3" type="button">
              Add Member
            </button>
          </div>
          <input
            className="btn btn-outline-danger"
            type="submit"
            value="Create Team"
          />
        </form>
      </div>
    </>
  );
};

export default CreateTeam;
