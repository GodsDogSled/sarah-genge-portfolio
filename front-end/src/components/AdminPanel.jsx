import { selectSession } from "../features/auth/authSlice"
import { useSelector } from "react-redux"
import AddContentPanel from "./AddContentPanel";
import CurrentFilms from "./CurrentFilms";
import UppyUpload from "./UppyUpload";
function AdminPanel() {
  const session = useSelector(selectSession);


  return (
    <div>
      <h1>Admin Panel</h1>
      {session ? (
        <div>
          <p>Welcome, {session.user.email}!</p>
          <AddContentPanel />
        </div>
      ) : (
        <p>Please log in to access the admin panel.</p>
      )}
      <CurrentFilms />
      <UppyUpload />
    </div>
  )
}

export default AdminPanel