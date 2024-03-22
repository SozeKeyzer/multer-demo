import multer from "multer";

export const multerFunc = ()=>{
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'src/images')
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    });
    
    const upload = multer({
        storage: storage
    });
    
    return upload;
}
