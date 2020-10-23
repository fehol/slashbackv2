import Cookie from 'js-cookie';


export function getMovieCart() {
const movieCart = Cookie.getJSON('movieCart') || [];
return movieCart;
}

export function addMovieCookie(id) {
  const movieCart = getMovieCart();

  const newMovieCart = [...movieCart, {id}];

  Cookie.set('movieCart', newMovieCart);

  return newMovieCart;
}




