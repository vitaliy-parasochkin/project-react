import React, {useState, useEffect} from "react";
import axios from 'axios';
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route } from 'react-router-dom';
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";


function App() {
   
    const [cartOpened, setCartOpened] = useState(false);
    const [items, setItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try { 
                const [ cartResponse, favoriteResponse, itemsResponse] = await Promise.all([
                    axios.get('https://611df8af7d273a0017e2f990.mockapi.io/cart'), 
                    axios.get('https://611df8af7d273a0017e2f990.mockapi.io/favorites'),
                    axios.get('https://611df8af7d273a0017e2f990.mockapi.io/sneakers')])
                
                setIsLoading(false);
                setCartItems(cartResponse.data);
                setFavorites(favoriteResponse.data);
                setItems(itemsResponse.data);
            } catch (error) {
                alert('Ошибка при запросе данных :(')
            }
        }
        fetchData()
    }, []);
    
    const onRemoveCard = (id) => {
        axios.delete(`https://611df8af7d273a0017e2f990.mockapi.io/cart/${id}`);
        setCartItems((items) => items.filter(obj => obj.id !== id))

    }

    const onAddToCart = async (obj) => {
        try {
          const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
          if (findItem) {
            setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
            await axios.delete(`https://611df8af7d273a0017e2f990.mockapi.io/cart/${findItem.id}`);
          } else {
            setCartItems((prev) => [...prev, obj]);
            const { data } = await axios.post('https://611df8af7d273a0017e2f990.mockapi.io/cart', obj);
            setCartItems((prev) =>
              prev.map((item) => {
                if (item.parentId === data.parentId) {
                  return {
                    ...item,
                    id: data.id,
                  };
                }
                return item;
              }),
            );
          }
        } catch (error) {
          alert('Ошибка при добавлении в корзину');
          console.error(error);
        }
      };

    const onAddToFavorite = async (obj) => {
        if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
            axios.delete(`https://611df8af7d273a0017e2f990.mockapi.io/favorites/${obj.id}`);
            setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
        } else {
            const {data} = await axios.post('https://611df8af7d273a0017e2f990.mockapi.io/favorites', obj);
            setFavorites((favorites) => [...favorites, data])
        }
        
    }
    
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    } 

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id))
    }

    return (
       <AppContext.Provider value={{items, onAddToCart, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems}}>
            <div className="wrapper clear">
                <Drawer onRemove={onRemoveCard} items={cartItems} onClose={() => setCartOpened(false)} opened={cartOpened}/>
                <Header onClickCart={() => setCartOpened(true)}/>
                <Route path='/' exact><Home
                    searchValue = {searchValue}
                    setSearchValue = {setSearchValue}
                    onChangeSearchInput = {onChangeSearchInput}
                    cartItems = {cartItems}
                    items = {items}
                    onAddToCard = {onAddToCart}
                    onAddToFavorite= {onAddToFavorite}
                    isLoading = {isLoading}
                /></Route>

                <Route path='/favorites' exact>
                    <Favorites/>
                </Route>

                <Route path='/orders' exact>
                    <Orders/>
                </Route>
            </div>
       </AppContext.Provider>
    )
    
;}

export default App;
