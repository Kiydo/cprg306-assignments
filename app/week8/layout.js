import { AuthContextProvider } from "./shopping-list/_utils/auth-context";
 
const Layout = ({ children }) => {
    if(typeof window === "undefined") {
        return <AuthContextProvider>{children}</AuthContextProvider>;
    }
    return children;
  
};
 
export default Layout;