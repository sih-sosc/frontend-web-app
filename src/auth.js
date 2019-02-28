import history from './Pages/history';
import axios from 'axios'

let Authenticated = false;
const auth={

    
    login_check(userdetails)
    {
                //QUERY CHECKING
      axios.post('http://localhost:7000/login',userdetails)
            .then((resp,err)=>{
                console.log(resp)
            if(resp.status===200)
            {
               console.log(resp.statusText);
               
                Authenticated=true;
            
                return true
            
                }
                else{
                    console.log("not a user");
                }
         })
            },
    

        isAuthenticated(){
            if(Authenticated===true)
            {
                return true;
            }
            else{
                return false    ;
            }
            
        }, 

    }

export default auth;    





