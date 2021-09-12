export const COMPANY_GET_START = "@company/get start";
export const COMPANY_GET_SUCCESS = "@company/get success";
export const COMPANY_GET_ERROR = "@company/get error";
export const COMPANY_UPDATE_START = "@company/update start";
export const COMPANY_UPDATE_SUCCESS = "@company/update success";
export const COMPANY_UPDATE_ERROR = "@company/update error";

const initialState = {
  company: [
    {
      id: 0,
      unit: "title",
      titleUnit: "ЛЕГИОН",
      meta: {
        expand: false,
        about: false
      },
      contentUnit: 'ООО "Легион-62"'
    },
    {
      id: 1,
      unit: "about",
      titleUnit: "О компании",
      meta: {
        expand: true,
        about: true
      },
      contentUnit: "Грузовой автосервис"
    },
    {
      id: 2,
      unit: "adress",
      titleUnit: "Адрес",
      meta: {
        expand: false,
        about: true
      },
      contentUnit: "Рязань, станция Лесок, 25"
    },
    {
      id: 3,
      unit: "contacts",
      titleUnit: "Контакты",
      meta: {
        expand: true,
        about: true
      },
      contentUnit: {
        phones: ["+7(4912) 777‒123", "+7(920) 966‒32‒22", "+7(915) 619‒08‒62"],
        emails: { main: "info@legion-62.ru" }
      }
    },
    {
      id: 4,
      unit: "requisites",
      titleUnit: "Реквизиты",
      meta: {
        expand: true,
        about: false
      },
      contentUnit: {}
    },
    {
      id: 5,
      unit: "urlPhotos",
      titleUnit: "Фотографии",
      meta: {
        expand: false,
        about: false
      },
      contentUnit: {}
    }
  ],
  loading: false,
  error: null
};

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_GET_START:
    case COMPANY_UPDATE_START:
      return { ...state, loading: true };
    case COMPANY_GET_SUCCESS:
    case COMPANY_UPDATE_SUCCESS:
      return { ...state, loading: false, company: action.payload };
    case COMPANY_GET_ERROR:
    case COMPANY_UPDATE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
