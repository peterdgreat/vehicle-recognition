import React , {useState} from 'react'
import ImageUploading from 'react-images-uploading';
import { useDispatch, useSelector } from 'react-redux';
import   { getVehicle } from '../redux/Vehicles/vehicle';
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export default function Car(props) {
    const dispatch = useDispatch();
 const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
const navigate = useNavigate();

  const onUpload = () => {
      if (images.length ===1) {
          navigate('/details');
        dispatch(getVehicle());
     
      }
  };

  return (
    <div className="App">

      <ImageUploading
        multiple= "false"
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          isDragging,
          dragProps,
        }) => (
      
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
            Drag or Upload a Car Image
            </button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button  onClick= {onUpload}>Upload</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
 

      </div>
  
  );
}
