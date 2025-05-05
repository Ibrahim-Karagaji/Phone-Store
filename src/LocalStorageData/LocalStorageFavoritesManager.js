export default function addProductToLocalStorageFavorites(product){
    if(window.localStorage.getItem("favorites") == null){
        let favorites = [];
        favorites.push(product)
        window.localStorage.setItem("favorites",JSON.stringify(favorites))
    }
    else{
    let fav = window.localStorage.getItem("favorites"); 
    let convert = JSON.parse(fav)
    const check = convert.some((p)=> p.name == product.name)
    if(!check){
        convert.push(product);
         window.localStorage.setItem("favorites",JSON.stringify(convert));
         console.log(convert)
        }
    }
}