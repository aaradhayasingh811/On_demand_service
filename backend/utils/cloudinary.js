import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"


cloudinary.config({ 
    cloud_name: import.meta.env.CLOUD_NAME, 
    api_key: import.meta.env.API_KEY , 
    api_secret: import.meta.env.API_SECRET
});

const uploadCloudinary = async (localPath)=> {
    try{
        if(!localPath) console.log("No local path found");
    const uploadResult = await cloudinary.uploader
       .upload( localPath ,{resource_type:'auto'} )
       .catch((error) => {
           console.log("Not able to upload on cloudinary");
       });
       fs.unlinkSync(localPath);
       return uploadResult.url ;
   

    }
    catch(err){
        fs.unlinkSync(localPath);
        console.log("error in uploading");
        return null;
    }      
};

export {uploadCloudinary};