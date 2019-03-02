import history from './Pages/history';
import axios from 'axios'
const url='http://172.17.104.204:3000/login';
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
               localStorage.setItem('token' , data.data.token);
               if(localStorage.hasOwnProperty('token')){
               var token= localStorage.getItem('token');
               alert(token);
                }
                Authenticated=true;
                history.push('/dashboard');
                
            
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





