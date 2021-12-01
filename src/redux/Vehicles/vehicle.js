import axios from 'axios';

const VEHICLE_SUCCESS = 'vehicle-recognition/vehicle/VEHICLE_SUCCESS';
// const imgurl='https://images.app.goo.gl/tspB8e1xZTn45moo7';


const initialState = {
  vehicles: [
{
    "car": {
        "make": "Audi",
        "model": "A4",
        "generation": "IV (B8) facelift (2011-2015)",
        "years": "2011-2015",
        "prob": "100.00",
    },
    "color": {"name": "Black", "probability": 0.952},
    "angle": {"name": "Front", "probability": 1},
    "bbox": {"br_x": 0.8987, "br_y": 0.87, "tl_x": 0.1164, "tl_y": 0.1555},
}
  ],
};
const setVehicles = (payload) => ({
  type: VEHICLE_SUCCESS,
  payload,
});


export const getVehicle = () => async (dispatch) => {

  

};
const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case VEHICLE_SUCCESS:
      return {
        ...state,
        vehicles: action.payload,
      };
    
    default:
      return state;
  }
};

export default vehicleReducer;
