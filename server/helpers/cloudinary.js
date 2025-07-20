import cloudinary from "cloudinary";
import multer from "multer";


cloudinary.config({
    cloud_name : 'dljmim20t',
    api_key : '852536984617668',
    api_secret : 'ulI-y1UHPZGaBS78hTpQPRk2Bl0',
});


const storage = new multer.memoryStorage();

async function imageUploadUtil(file){
    const result = await cloudinary.uploader.upload(file, {
        resource_type : 'auto'
    })

    return result;
}

const upload = multer({storage});

export {upload, imageUploadUtil};


