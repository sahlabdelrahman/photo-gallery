import {
  FETCH_IMAGES,
  REMOVE_SELECTED_IMAGE,
  SELECT_IMAGE,
} from "../actions/types";

const imagesReducer = (
  state = {
    images: [],
    loading: false,
    error: null,
    selectedImage: null,
  },
  action
) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        images: action.payload.data,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case SELECT_IMAGE:
      return {
        ...state,
        selectedImage: action.payload.image,
      };
    case REMOVE_SELECTED_IMAGE:
      return {
        ...state,
        selectedImage: null,
      };
    default:
      return state;
  }
};

export default imagesReducer;
