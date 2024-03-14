import React from 'react'
import './Filelist.css'

function FileList({ files }) {
    return (
        <div className='filelist'>
            <h3>Selected Files:</h3>
            <ul>
                {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default FileList