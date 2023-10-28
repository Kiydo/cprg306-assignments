import { useUserAuth } from "./shopping-list/_utils/auth-context";
 
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

const handlePageLoad = async () => {
  await gitHubSignIn();
  await firebaseSignOut();
};
// await gitHubSignIn();
 
// await firebaseSignOut();

if (typeof window !== "undefined") {
  handlePageLoad();
}
 
<p>
  Welcome, {user.displayName} ({user.email})
</p>;