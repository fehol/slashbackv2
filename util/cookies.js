import cookie from 'js-cookie';


export function getMovieCart() {

const movieCart = cookie.getJSON('movieCart') || [];
   return movieCart;
}

export function addToCart(id) {
  const movieCart = getMovieCart ();

  let newMovieCart;

  if (movieCart.includes(id)) {
    newMovieCart = movieCart.filter((carted) => carted !== id);
  } else {
    newMovieCart = [...movieCart, id];
  }

  cookie.set('movieCart', newMovieCart);

  return newMovieCart;
}


// Followed================ added to cart
// following================ cart condition
// followUser=============== Add to cart
// unfollow================= Remove from cart
// toggleFollowUser=========add to cart
// getfollowingfromcookie====getCartConditionFromCookie
// togglefollowuserincookie== addToCartFromCookie
// newFollowing============newCartCondition
// following from cookie=====cartConditionFromCookie
// setfollowingfromcookie===setCartConditionFromCookie
// userswithfollowingdata======productsWithCartConditionData
// setuserswithfollowingdata===setProductsWithCartConditionData