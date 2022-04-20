import {
  FETCH_IMAGES,
  REMOVE_SELECTED_IMAGE,
  SELECT_IMAGE,
  UPDATE_ACTIVE_IMAGE,
} from "../actions/types";

const imagesReducer = (
  state = {
    images: [],
    loading: false,
    error: null,
    selectedImage: null,
    activeImage: 0,
    totalImages: 0,
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
        totalImages: action.payload.data?.length,
      };
    case SELECT_IMAGE:
      return {
        ...state,
        selectedImage: action.payload.image,
        activeImage: action.payload.index,
      };

    case UPDATE_ACTIVE_IMAGE:
      return {
        ...state,
        activeImage: action.payload.activeImage,
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
