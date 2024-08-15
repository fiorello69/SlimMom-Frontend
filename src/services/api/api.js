// import axios from 'axios';

// axios.defaults.baseURL = 'https://diet-683f038f277a.herokuapp.com/';

// const END_POINTS = {
//   DailyCalorieIntake: '/api/products',
//   AddMyProduct: '/api/myProducts/addProduct',
//   ListMyProducts: '/api/myProducts/listMyProduct',
//   DeleteMyProduct: '/api/myProducts/',
//   GetSearchProducts: '/api/products/searchProducts',
//   UpdateUserInfo: '/api/users/infouser',
// };

// export const apiCalorieIntake = async body => {
//   const res = await axios.post(END_POINTS.DailyCalorieIntake, body);
//   return res.data;
// };

// export const apiUpdateInfoUser = async (token, body) => {
//   const res = await axios.put(END_POINTS.UpdateUserInfo, body, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.data.result;
// };

// export const apiAddMyProduct = async (body, token, date) => {
//   const res = await axios.post(END_POINTS.AddMyProduct, body, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const result = await res.data.newProduct.productInfo;
//   return result;
// };

// export const apiDeleteMyProduct = async (id, token, date) => {
//   const res = await axios.delete(END_POINTS.DeleteMyProduct + id, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     data: {
//       date,
//     },
//   });
//   const result = await res.data.newProduct.productInfo;
//   return result;
// };

// export const apiListMyProducts = async (date, token) => {
//   const res = await axios.post(
//     END_POINTS.ListMyProducts,
//     {
//       date,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   const result = await res.data.productList;
//   return result;
// };

// export const apiGetSearchProducts = async value => {
//   const res = await axios(END_POINTS.GetSearchProducts, {
//     params: {
//       title: value,
//     },
//   });
//   const result = await res.data.data;
//   return result;
// };

import axios from 'axios';

// Setăm URL-ul de bază pentru Axios
axios.defaults.baseURL = 'https://diet-683f038f277a.herokuapp.com/';

// Definim punctele finale ale API-ului
const END_POINTS = {
  DailyCalorieIntake: '/api/products',
  AddMyProduct: '/api/myProducts/addProduct',
  ListMyProducts: '/api/myProducts/listMyProduct',
  DeleteMyProduct: '/api/myProducts/',
  GetSearchProducts: '/api/products/searchProducts',
  UpdateUserInfo: '/api/users/infouser',
};

// Funcție pentru a adăuga produsul de calorii
export const apiCalorieIntake = async body => {
  try {
    const res = await axios.post(END_POINTS.DailyCalorieIntake, body);
    return res.data;
  } catch (error) {
    console.error('Error in apiCalorieIntake:', error);
    throw error;
  }
};

// Funcție pentru actualizarea informațiilor utilizatorului
export const apiUpdateInfoUser = async (token, body) => {
  try {
    const res = await axios.put(END_POINTS.UpdateUserInfo, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.result;
  } catch (error) {
    console.error('Error in apiUpdateInfoUser:', error);
    throw error;
  }
};

// Funcție pentru a adăuga un produs personalizat
export const apiAddMyProduct = async (body, token) => {
  try {
    const res = await axios.post(END_POINTS.AddMyProduct, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.newProduct.productInfo;
  } catch (error) {
    console.error('Error in apiAddMyProduct:', error);
    throw error;
  }
};

// Funcție pentru a șterge un produs personalizat
export const apiDeleteMyProduct = async (id, token) => {
  try {
    const res = await axios.delete(`${END_POINTS.DeleteMyProduct}${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.newProduct.productInfo;
  } catch (error) {
    console.error('Error in apiDeleteMyProduct:', error);
    throw error;
  }
};

// Funcție pentru a lista produsele personale
export const apiListMyProducts = async (date, token) => {
  try {
    const res = await axios.post(
      END_POINTS.ListMyProducts,
      { date },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.productList;
  } catch (error) {
    console.error('Error in apiListMyProducts:', error);
    throw error;
  }
};

// Funcție pentru a obține produsele căutate
export const apiGetSearchProducts = async value => {
  try {
    const res = await axios.get(END_POINTS.GetSearchProducts, {
      params: { title: value },
    });
    return res.data.data;
  } catch (error) {
    console.error('Error in apiGetSearchProducts:', error);
    throw error;
  }
};
