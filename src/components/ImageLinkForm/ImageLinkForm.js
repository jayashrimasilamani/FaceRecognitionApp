import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This AI Brain can locate the face in the pictures.Upload a picture and witness it!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}></input>
                    <button className='w-30 grow f4 link ph3 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
                </div>

            </div>
        </div>

    );
}

export default ImageLinkForm;