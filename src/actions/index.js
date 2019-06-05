// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from "axios";

export const FETCH_CHARS_START = "FETCH_CHARS_START";
export const FETCH_CHARS_SUCCESS = "FETCH_CHARS_SUCCESS";
export const FETCH_CHARS_FAILURE = "FETCH_CHARS_FAILURE";

export const getPhoto = () => dispatch => {
    dispatch({ type: FETCH_CHARS_START });
    axios
        .get(
            'https://api.nasa.gov/planetary/apod?api_key=PNkbbVZPDxLC8gApaHy0mZTvEqFBUvwjQ7ns0SuP'
        )
        .then(res => {
            console.log(res.data);
            dispatch({
                type: FETCH_CHARS_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: FETCH_CHARS_FAILURE,
                payload: err
            })
        })
};

