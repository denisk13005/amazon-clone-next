import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"
const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useSession()
  console.log(data)
  if (data) {
    return (
      <>
        <div>welcome, {data.user.name} </div>
        <button onClick={() => signOut()}>loggout</button>
      </>
    )
  } else {
    return (
      <>
        <div>please login</div>;<button onClick={() => signIn()}>login</button>
      </>
    )
  }
}

export default login
