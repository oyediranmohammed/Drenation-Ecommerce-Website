import {useState} from 'react';
import {Link} from 'react-router-dom';
import CommonForm from '../../components/common/form';
import { registerFormControls } from '@/config';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/store/auth-slice';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

const initialState = {
    username: '',
    email: '',
    password: ''
};

function AuthRegister() {

    const[formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {toast} = useToast()
         
    function onSubmit(event) {
        event.preventDefault();
        dispatch(registerUser(formData)).then((data)=>{
            if(data?.payload?.success)
                { 
                    toast({
                        title: data?.payload?.message,
                    })
                    navigate('/auth/login')
                }
            else
            {
                toast({
                    title: "Email already exist", 
                    variant: 'destructive',
                    description: "Please try again with different credentials.",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                   
                })
            }
        });
    }

    console.log(formData);
        
        return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new account</h1>
                <p className='mt-2'>Already have an account? 
                    <Link className='text-primary hover:underline ml-2 font-semibold' to='/auth/login'>Login</Link>
                </p>
            </div>
            <CommonForm
                formControls={registerFormControls}
                buttonText={'Sign Up'}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
            
        </div>
    );
}

export default AuthRegister;