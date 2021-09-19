export const PROFILE_GET_START = "@profile/get start";
export const PROFILE_GET_SUCCESS = "@profile/get success";
export const PROFILE_GET_ERROR = "@profile/get error";
export const PROFILE_UPDATE_START = "@profile/update start";
export const PROFILE_UPDATE_SUCCESS = "@profile/update success";
export const PROFILE_UPDATE_ERROR = "@profile/update error";

const initialState = {
  user: {
    name: "",
    email: "",
    role: ""
  },
  loading: false,
  error: null
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_GET_START:
    case PROFILE_UPDATE_START:
      return { ...state, loading: true };
    case PROFILE_GET_SUCCESS:
    case PROFILE_UPDATE_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case PROFILE_GET_ERROR:
    case PROFILE_UPDATE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
