import { SessionWrapper } from "../../components/SessionWraper";
import SignInPage  from "../../components/login/LoginComponent";
import SignOutPage from "../../components/login/SignOutComponent";
import {auth} from "../../lib/auth";


export default async function Login() {
  
    const session = await auth();
    const isAuthenticated = !!session?.user;

    return (
      <div>
        <SessionWrapper>
          {
          isAuthenticated? <SignOutPage/>:<SignInPage/>
          }
        </SessionWrapper>
      </div>
    );
    

}








