
import { Button, Label, TextInput } from 'flowbite-react';
import BasicLayout from '../components/layouts/BasicLayout';
import axios from 'axios';


export default function Login() {

    const hadlelogin = (e) =>{
        e.preventDefault()
        const from = e.target
        const password = from.password.value
        const email = from.email.value
        const user = {email,password}

        // fetch('http://localhost:5000/login',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json' // Specify the content type as JSON
        //       },
        //       body: JSON.stringify(user) // Convert the data to a JSON string
        // })
        // .then(res=>{
        //     console.log(res);
        // })
        // .catch(err=>{
        //     console.log(err);
        // })

        axios.post('http://localhost:5000/login',user,{withCredentials:true})
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <BasicLayout>
            <form className="flex lg:w-[600px] max-w-md flex-col gap-4" onSubmit={hadlelogin}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" name='email' placeholder="name@flowbite.com" required />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" password='password' value="Your password" />
                    </div>
                    <TextInput id="password" type="password" required />
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </BasicLayout>
    )

}