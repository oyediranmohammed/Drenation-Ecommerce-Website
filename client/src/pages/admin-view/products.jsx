import { Fragment, useState } from "react";
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet"
import CommonForm from "@/components/common/form"
import { addProductFormElements } from "@/config";

const initialFormData = {
    image : null,
    title : '',
    description : '',
    category : '',
    brand : '',
    price : "",
    salePrice : '',
    totalStock : ''
}

function AdminProducts() {

    const [openCreateProductsDialog, setOpenCreateProductDialog] = useState(false);

    const [formData, setFormData] = useState(initialFormData); 

    function onSubmit(){};

    return <Fragment>
        <div className="mb-5 w-full flex justify-end">
            <Button onClick={()=>setOpenCreateProductDialog(true)}>
                Add new Product
            </Button>

        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">

        </div>
        <Sheet open={openCreateProductsDialog} onOpenChange={()=> {
            setOpenCreateProductDialog(false);
        }}>
            <SheetContent side="right" className="overflow-auto">
                <SheetHeader>
                    <SheetTitle>
                        Add new product
                    </SheetTitle>
                </SheetHeader>
                <div className="py-6">
                    <CommonForm 
                        onSubmit={onSubmit}
                        formData = {formData}
                        setFormData={setFormData}
                        formControls={addProductFormElements}
                        buttonText='Add'

                    />
                </div>
            </SheetContent>

        </Sheet>
    </Fragment>
        
    
}

export default AdminProducts;