import {
  Home as HomeIcon,
  BusinessCenter as BCIcon,
  NewReleases as NewsIcon,
  Info as InfoIcon
} from "@material-ui/icons";

const initialState = {
  menuList: [
    {
      name: "Главная",
      path: "/home",
      icon: <HomeIcon />,
      meta: {
        header: true,
        cms: true,
        menuIcons: true
      }
    },
    {
      name: "Коммерция",
      path: "/comerce",
      icon: <BCIcon />,
      meta: {
        header: true,
        cms: true,
        menuIcons: true
      }
    },
    {
      name: "Новости",
      path: "/cms/news",
      icon: <NewsIcon />,
      meta: {
        header: true,
        cms: true,
        menuIcons: true
      }
    },
    {
      name: "О компании",
      path: "/about",
      icon: <InfoIcon />,
      meta: {
        header: true,
        cms: true,
        menuIcons: true
      }
    }
  ],
  loading: false,
  error: null
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_GET_START:
    case MENU_UPDATE_START:
      return { ...state, loading: true };
    case MENU_GET_SUCCESS:
    case MENU_UPDATE_SUCCESS:
      return { ...state, loading: false, company: action.payload };
    case MENU_GET_ERROR:
    case MENU_UPDATE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const menuSelector = (selector) => (state) =>
  state.menu.menuList.reduce((arr, item) => {
    if (item.meta[selector]) arr = [...arr, item];
    return arr;
  }, []);

export const MENU_GET_START = "@menu/get start";
export const MENU_GET_SUCCESS = "@menu/get success";
export const MENU_GET_ERROR = "@menu/get error";
export const MENU_UPDATE_START = "@menu/update start";
export const MENU_UPDATE_SUCCESS = "@menu/update success";
export const MENU_UPDATE_ERROR = "@menu/update error";
