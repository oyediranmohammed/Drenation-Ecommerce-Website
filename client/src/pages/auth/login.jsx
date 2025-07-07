import {useState} from 'react';
import {Link} from 'react-router-dom';
import CommonForm from '../../components/common/form';
import { loginFormControls } from '@/config';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/store/auth-slice';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

const initialState = {
    email: '',
    password: ''
};


function AuthLogin() {
   
    const[formData, setFormData] = useState(initialState)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {toast} = useToast();
        
    function onSubmit(event) {
        event.preventDefault();

        dispatch(loginUser(formData)).then((data)=>{
            if(data?.payload?.success){
                toast({
                    title: data?.payload?.message,
                });
                
              
            }

            else {
                toast({
                    title: data?.payload?.message || "⚠️ Login failed", 
                    variant: 'destructive',
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                });
            }
           
            
        });
    }
        
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