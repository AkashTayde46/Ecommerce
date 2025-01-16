// import { configureStore } from '@reduxjs/toolkit';
// import { newReviewReducer, productReducer, productReviewsReducer, productsReducer, reviewReducer } from './reducers/productReducers';
// import { productDetailsReducer } from './reducers/productReducers';
// import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from './reducers/userReducers';
// import { cartReducer } from './reducers/cartReducers';
// import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderReducer } from './reducers/orderReducers';

// export const store = configureStore({
//   reducer: {
//     products:productsReducer,
//     productDetails: productDetailsReducer,
//     user:userReducer,
//     profile:profileReducer,
//     forgotPassword:forgotPasswordReducer,


//     cart:cartReducer,
//     newOrder:newOrderReducer,
//     myOrders:myOrdersReducer,
//     newReview:newReviewReducer,
//     product:productReducer,
//     allOrders:allOrdersReducer,
//     order:orderReducer,
//     allUsers:allUsersReducer,
//     userDetails:userDetailsReducer,
//     productReviews:productReviewsReducer,
//     review:reviewReducer,
//   }, // Add your reducers here
// });
// let initialState = {
//   cart: {
//     cartItems: localStorage.getItem("cartItems")
//       ? JSON.parse(localStorage.getItem("cartItems"))
//       : [],
//     shippingInfo: localStorage.getItem("shippingInfo")
//       ? JSON.parse(localStorage.getItem("shippingInfo"))
//       : {},
//   },
// };
// export default store; 


import { configureStore } from '@reduxjs/toolkit';
import { 
  newReviewReducer, 
  productReducer, 
  productReviewsReducer, 
  productsReducer, 
  newProductReducer,
  reviewReducer 
} from './reducers/productReducers';
import { productDetailsReducer } from './reducers/productReducers';
import { 
  allUsersReducer, 
  forgotPasswordReducer, 
  profileReducer, 
  userDetailsReducer, 
  userReducer 
} from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';
import { 
  allOrdersReducer, 
  myOrdersReducer, 
  newOrderReducer, 
  orderReducer 
} from './reducers/orderReducers';

// Define the preloaded initial state
const preloadedState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    newReview: newReviewReducer,
    product: productReducer,
    allOrders: allOrdersReducer,
    order: orderReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    productReviews: productReviewsReducer,
    newProduct: newProductReducer,
    review: reviewReducer,
  },
  preloadedState, // Use the preloaded initial state
});

export default store;
