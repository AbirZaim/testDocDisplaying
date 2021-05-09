import React , {useState, useEffect} from "react";
import ReactFileReader from 'react-file-reader';
import classes from './filereader.css';

const Filereader = () =>{

    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    useEffect(() =>{
        if(file){
            const reader = new FileReader();
            reader.onloadend = ( ) =>{
                setPreview(reader.result);
            };

            reader.readAsDataURL(file);
        }
        else{
            setPreview(null);
        }
    });

    const handleFiles = f => {
        console.log(f[0]);
        console.log(preview);
        setFile(f[0]);
    };

   return <div>
       <ReactFileReader handleFiles={handleFiles}
                        fileTypes={[".pdf",".docx"]}>
           <button className='btn'
                   onClick={(event) =>{
                       event.preventDefault();

                   }}
           >Upload</button>
       </ReactFileReader>

       <div className={classes.pdfViewer}>
            {file !== null && preview !== null ?
                <object

                    type={preview.split(';')[0].substr(5)}
                        data={preview} />: null}
       </div>
   </div>

       ;

};

export default Filereader;
