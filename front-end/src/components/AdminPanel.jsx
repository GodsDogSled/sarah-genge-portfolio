import { selectSession } from "../features/auth/authSlice"
import { useSelector } from "react-redux"
function AdminPanel() {
  const session = useSelector(selectSession);

  console.log("Admin pannel session:", session)
  return (
    <div>
      <h1>Admin Panel</h1>
      {session ? (
        <div>
          <p>Welcome, {session.user.email}!</p>
          <p>You are authenticated.</p>
        </div>
      ) : (
        <p>Please log in to access the admin panel.</p>
      )}
    </div>
  )
}

export default AdminPanel