export const NEWS_GET_START = "@news/get start";
export const NEWS_GET_SUCCESS = "@news/get success";
export const NEWS_GET_ERROR = "@news/get error";
export const NEWS_ADD_START = "@news/add start";
export const NEWS_ADD_SUCCESS = "@news/add success";
export const NEWS_ADD_ERROR = "@news/add error";
export const NEWS_UPDATE_START = "@news/update start";
export const NEWS_UPDATE_SUCCESS = "@news/update success";
export const NEWS_UPDATE_ERROR = "@news/update error";

const initialState = {
  newsList: [
    {
      id: 0,
      title: "Новость дня",
      shortDescription: "Самая главная...",
      description: "Самая главная новость дня - мы заработали",
      imageList: [],
      created_at: null
    }
  ],
  loading: false,
  error: null
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_GET_START:
    case NEWS_UPDATE_START:
      return { ...state, loading: true };
    case NEWS_GET_SUCCESS:
    case NEWS_UPDATE_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case NEWS_GET_ERROR:
    case NEWS_UPDATE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
