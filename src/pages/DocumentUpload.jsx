import React, { useState } from 'react'
import "../App.css"
import { IoCloudUploadOutline } from "react-icons/io5";
import jerry from "../images/jerry.png"
import FileUploadModal from '../components/FileUploadModal';

const DocumentUpload = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    return (
        <section className='section'>
            <div className='btn'>
                <button type='button' onClick={openModal}>
                    <IoCloudUploadOutline />
                    Upload file</button>
                {modalOpen && <FileUploadModal onClose={() => setModalOpen(false)} />}

            </div>
            <div className='hr__document'>
                <h1>Human Resource Documents</h1>
                <div className='file__upload'>
                    <div className='file'>
                        <img src={jerry} alt='jey' />
                        <span>Title</span>
                    </div>
                    <div className='file'>
                        <img src={jerry} alt='jey' />
                        <span>Title</span>
                    </div>
                </div>
                <div className='uploads'>
                    <div className='upload'>
                        <IoCloudUploadOutline size={40} />
                        <span>There are no files uploaded yet</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DocumentUpload