import {Select, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import {Input} from "../ui/input";
import {Label} from "../ui/label";
import { Button } from "../ui/button";
import { SelectContent } from "@radix-ui/react-select";




function CommonForm({formControls, formData, setFormData, onSubmit, buttonText}) {

    function renderInputByComponentType(getControlItem) {
        let element = null;

        const value = formData[getControlItem.name] || '';


        switch (getControlItem.componentType) {
            case 'input':
                element =(
                    <Input 
                    type={getControlItem.type} 
                    name={getControlItem.name} 
                    placeholder={getControlItem.placeholder} 
                    id={getControlItem.name}    
                    value={value}
                    onChange={event=> setFormData({
                        ...formData,
                        [getControlItem.name] : event.target.value,
                    })}
                    className={`${value ? 'bg-blue-100' : 'bg-white'} transition-colors duration-300`}
                />
                );

                break;
            case 'select':
                element = (
                   <Select onValueChange={(value)=> setFormData({
                        ...formData,
                        [getControlItem.name] : value,
                   })} value={value}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={getControlItem.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                getControlItem.options && 
                                getControlItem.options.length > 0 ? 
                                getControlItem.options.map(optionItem => 
                                    <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.labe}</SelectItem>

                                ): null
                            }
                        </SelectContent>
                   </Select>
                );
                break;
            case 'textarea':
                element =(
                    <Textarea
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.id}
                        value={value}
                        onChange={event=> setFormData({
                        ...formData,
                        [getControlItem.name] : event.target.value,
                    })}
                        
                    />
                )
                break;
            
                default:
                 element =(
                    <Input 
                    type={getControlItem.type} 
                    name={getControlItem.name} 
                    placeholder={getControlItem.placeholder} 
                    id={getControlItem.name}
                    value={value}
                    onChange={event=> setFormData({
                        ...formData,
                        [getControlItem.name] : event.target.value,
                    })}
                />
                );
                break;

        } 
        return element;
    };


    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
                {
                
                formControls.map(controlItem => <div className="grid w-full gap-1.5 " key={controlItem.name}>   
                    <Label className="mb-1 text-primary font-semibold">{controlItem.label}</Label>
                    {
                        renderInputByComponentType(controlItem)
                    }
                </div>
                )}

            </div>
            <Button className="mt-2 w-full" type="submit">{buttonText || 'Submit'}</Button>
        </form>
    );
}

export default CommonForm;