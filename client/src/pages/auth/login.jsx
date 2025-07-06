import {useState} from 'react';
import {Link} from 'react-router-dom';
import CommonForm from '../../components/common/form';
import { loginFormControls } from '@/config';

const initialState = {
    email: '',
    password: ''
};


function AuthLogin() {
   
    const[formData, setFormData] = useState(initialState)
        
    function onSubmit() {}
        
        return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Sign in to your Account</h1>
                <p className='mt-2'>Don't have an account? 
                    <Link className='text-primary hover:underline ml-2 font-semibold' to='/auth/register'>Register</Link>
                </p>
            </div>
            <CommonForm
                formControls={loginFormControls}
                buttonText={'Login'}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
            
        </div>
    );
}

export default AuthLogin;