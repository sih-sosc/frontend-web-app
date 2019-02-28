import history from './Pages/history';
import axios from 'axios'
const url='http://192.168.43.47:3000/login';
let Authenticated = false;
const auth={

    
    login_check(userdetails)
    {
                //QUERY CHECKING
            axios.post(url,userdetails)
            .then((data)=>{
                console.log(data)
            if(data.status===200)
            {
               console.log(data.statusText);
               
                Authenticated=true;
                history.push('/dashboard')
                
            
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





