import React , {useState} from 'react'
import ImageUploading from 'react-images-uploading';
import { useDispatch } from 'react-redux';
import   { getVehicle } from '../redux/Vehicles/vehicle';
import {useNavigate} from 'react-router-dom';
import '../styles/Car.css'

export default function Car(props) {
    const dispatch = useDispatch();
 const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList, ) => {
    setImages(imageList);
  };
  const display = images.length === 1 ? 'd-none' : ''
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
      
          <div className="">
          <div  className="card">
              <button className={`btn border ${display}`}
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
            <h1>Drag or Upload a Car Image</h1>
            </button>
          </div>
            {imageList.map((image, index) => (
              <div key={index} className="image-item card d-flex justify-content-center align-items-center">
                <img src={image['data_url']} alt="" className="img-uploaded" />
                <div className="d-flex justify-content-center mt-3">
                  <button className="btn border me-2" onClick={() => onImageUpdate(index)}>Update</button>
                    <button className="btn border ms-2"  onClick= {onUpload}>Upload</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
 

      </div>
  
  );
}
