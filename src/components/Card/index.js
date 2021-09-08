import React, {useState, useContext} from 'react';
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader"
import AppContext from '../../context';

export default function Card({isLoading,title,price,imageUrl, onPlus, onFavorite, id, favorited = false, added= false}) {
    
    const {isItemAdded} = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorited)


    const onClickPlus = () => {
        onPlus({id ,parentId:id,title, price, imageUrl})
    }

    const onClickHeart = () => {
        onFavorite({id,title, price, imageUrl})
        setIsFavorite(!isFavorite);
    }
    return (
        <div className={styles.card}>
            {isLoading ? (
                <ContentLoader
                    speed={2}
                    width={210}
                    height={260}
                    viewBox="0 0 210 260"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect
                        x="0"
                        y="36"
                        rx="10"
                        ry="10"
                        width="150"
                        height="91"
                    />
                    <rect x="0" y="143" rx="2" ry="2" width="150" height="15" />
                    <rect x="0" y="162" rx="2" ry="2" width="93" height="15" />
                    <rect x="0" y="199" rx="3" ry="3" width="80" height="24" />
                    <rect
                        x="115"
                        y="191"
                        rx="10"
                        ry="10"
                        width="32"
                        height="32"
                    />
                </ContentLoader>
            ) : (
                <>
                    {onFavorite && 
                        <div onClick={onClickHeart} className={styles.favorite}>
                            <img
                                src={
                                    isFavorite
                                        ? "img/heart-liked.svg"
                                        : "img/heart-unliked.svg"
                                }
                                alt="unliked"
                            />
                        </div>
                    }
                    <img
                        width={133}
                        height={112}
                        src={imageUrl}
                        alt="Sneakers"
                    />
                    <h5>{title}</h5>
                    <div className="d-flex justify-between">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>
                        {onPlus && 
                            <div className={styles.plus} onClick={onClickPlus}>
                                <img
                                    src={
                                        isItemAdded(id)
                                            ? "img/btn-checked.svg"
                                            : "img/btn-plus.svg"
                                    }
                                    alt="Plus"
                                />
                            </div>
                        }
                    </div>
                </>
            )}
        </div>
    );
}
