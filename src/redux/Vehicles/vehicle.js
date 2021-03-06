const VEHICLE_SUCCESS = 'vehicle-recognition/vehicle/VEHICLE_SUCCESS';


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
  ]
};
const setVehicles = () => ({
  type: VEHICLE_SUCCESS,
  payload: initialState.vehicles,
});


export const getVehicle = () => async (dispatch) => {

dispatch(setVehicles());
  

};
const vehicleReducer = (state = [], action) => {
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
