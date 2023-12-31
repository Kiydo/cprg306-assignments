"use client"; 

import { useUserAuth } from "./_utils/auth-context";
import ShopList from "./shopping-list/page";

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
    <main className="min-h-screen">
      
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

}