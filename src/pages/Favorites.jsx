import React from "react";
import Card from "../components/Card";
import Info from "../components/Info";
import AppContext from "../context";

function Favorites({items}) {
    const {favorites, onAddToFavorite} = React.useContext(AppContext);
    
    return (
        <div className='content p-40'>
            <div className='d-flex align-center mb-40 justify-between'>
                <h1>Мои закладки</h1>
                
            </div>
            
            {
                favorites.length > 0 ?
                    <div className='card-wrapper d-flex flex-wrap'>
                        {favorites.map((obj, index) => (
                            <Card 
                                key={index}
                                favorited = {true}
                                onFavorite={onAddToFavorite}
                                imageUrl={obj.imageUrl}
                                title={obj.title}
                                price={obj.price}
                                id={obj.id}
                            />
                        ))}
                    </div>
                    :
                    <Info image='/img/face-favorites.svg' title='Закладок нет' description='Вы ничего не добавляли в закладки'/>
            }

            

        </div>
    )
}

export default Favorites;