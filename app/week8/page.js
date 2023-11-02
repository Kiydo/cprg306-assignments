"use client"; 

import { useUserAuth } from "./_utils/auth-context";
import ShopList from "./shopping-list/page";
// await gitHubSignIn();
  
// await firebaseSignOut();
export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  
  const handleSignIn = async () => {
    await gitHubSignIn();
    // console.log(user)
  }
  const handleSignOut = async () => {
    await firebaseSignOut();
  }


  return (
    <main>
      
      {!user && (
        <button onClick={handleSignIn}>Sign In</button>
      )
      }
      {user && (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleSignOut}>Sign Out</button>
          <ShopList />
        </div>
      )}
    </main>
  )

  // return (
  //   {}
  // )

  // if (await FirebaseAuth.currentUser() !== null) {
  //   // User is signed in.
  //   return (
  //     <div>
  //       <p>Welcome, {user.displayName} ({user.email})</p>
  //       <button onClick={firebaseSignOut}>Sign Out</button>
  //     </div>
      
  //   )
  // } else {
  //   return (
  //     <div>
  //       <p>Sign in</p>
  //       <button onClick={gitHubSignIn}>Sign In</button>
  //     </div>
  //   )
  // }

  
  {/* <p>
    Welcome, {user.displayName} ({user.email})
    {!user}
    <button onClick={firebaseSignOut}>Sign Out</button>
  </p>; */}

}