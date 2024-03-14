import React, { useState } from 'react'
import './FileUploadModal.css'
import { IoCloudUploadOutline } from "react-icons/io5";
import Filelist from './Filelist';


const FileUploadModal = ({ onClose }) => {
    const [files, setFiles] = useState([]);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFiles(prevFiles => [...prevFiles, file])
    }
    return (
        <section>
            <div className='modal'>
                <div className='modal__content'>
                    <div className='modal__close'>
                        <h1>File Upload</h1>
                        <div className='close__btn'>
                            <span onClick={onClose}>&times;</span>
                        </div>
                    </div>
                    <div className='file__title'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' name='title' placeholder='Enter titile here...' />
                    </div>
                    <div className="upload__button">
                        <label htmlFor="file-input" className="upload__label">
                            <span className="upload__text">Drag & drop files or Browse</span>
                            <IoCloudUploadOutline size={40} />
                            <span className='upload__texter'>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</span>
                        </label>
                        <input id="file-input" onChange={handleFileChange} type="file" />
                        <Filelist files={files} />


                        <div className='file__buttons'>
                            <button type='button' className='cancel__upload'>Cancel</button>
                            <span type='submit' className='upload__btn'>Upload</span>

                        </div>
                    </div>


                </div>
            </div>


        </section>
    )
}

export default FileUploadModal