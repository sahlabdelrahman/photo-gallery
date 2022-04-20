import { useFetch } from "../../hooks/useFetch";
import {
  FETCH_IMAGES,
  REMOVE_SELECTED_IMAGE,
  SELECT_IMAGE,
  UPDATE_ACTIVE_IMAGE,
} from "./types";

export const fetchImages = () => (dispatch) => {
  const { data, error, loading } = useFetch(
    "https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy"
  );

  dispatch({
    type: FETCH_IMAGES,
    payload: {
      data,
      error,
      loading,
    },
  });
};

export const selectImage = (image, index) => (dispatch) => {
  dispatch({
    type: SELECT_IMAGE,
    payload: {
      image,
      index,
    },
  });
};

export const updateActiveImage = (newIndex) => (dispatch, getState) => {
  const length = getState().images?.images?.length;

  if (newIndex < 0) {
    newIndex = length - 1;
  } else if (newIndex >= length) {
    newIndex = 0;
  }

  dispatch({
    type: UPDATE_ACTIVE_IMAGE,
    payload: {
      activeImage: newIndex,
    },
  });
};

export const removeSelectedImage = () => (dispatch) => {
  dispatch({
    type: REMOVE_SELECTED_IMAGE,
  });
};
