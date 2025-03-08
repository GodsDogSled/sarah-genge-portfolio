import { useSelector } from "react-redux"
import { useGetFilmsQuery } from "../features/films/filmDetailsSlice";


function CurrentFilms() {
  const {
    data: films,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetFilmsQuery()

  let content

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = films[0].title
  } else if (isError) {
    content = <p>{error}</p>
  }



  return (
    <>
      <h2>Current Films</h2>
      <p>{content}</p>
    </>
  )
}

export default CurrentFilms