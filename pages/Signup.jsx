
import { Button, Label, TextInput } from 'flowbite-react';
import BasicLayout from '../components/layouts/BasicLayout';
import { useState } from 'react';
import { axiosApi } from '../config/api';
import { useAuth } from '../context/auth';
import { redirect, useNavigate } from 'react-router-dom';


export default function Signup() {
    const navigate = useNavigate()
    const { error, setError, setUser } = useAuth()


    const [formData, setFormData] = useState({})

    function changeInput(e) {
        setFormData(p => ({ ...p, [e?.target?.id]: e?.target?.value }))
    }

    async function handleSignup(e) {
        e?.preventDefault();
        try {
            const { data: user } = await axiosApi.post('/auth/signup', formData)
            setUser(user)

            if (user) navigate('/')            
        } catch (error) {
            setError(error?.response?.data?.message || error?.message || "Something wrong!")
        }
    }

    return (
        <BasicLayout>

            <form onSubmit={handleSignup} className="flex lg:w-[600px] max-w-md flex-col gap-4">
                <p className='text-red-500 font-medium'> {error} </p>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your Name" />
                    </div>
                    <TextInput onChange={changeInput} id="name" type="text" required />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput onChange={changeInput} id="email" type="email" placeholder="name@flowbite.com" required />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput onChange={changeInput} id="password" type="password" required />
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </BasicLayout>
    )

}