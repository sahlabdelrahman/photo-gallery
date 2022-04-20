import { useFetch } from "../../hooks/useFetch";
import { FETCH_IMAGES, REMOVE_SELECTED_IMAGE, SELECT_IMAGE } from "./types";

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

export const selectImage = (image) => (dispatch) => {
  dispatch({
    type: SELECT_IMAGE,
    payload: {
      image,
    },
  });
};

export const removeSelectedImage = () => (dispatch) => {
  dispatch({
    type: REMOVE_SELECTED_IMAGE,
  });
};
