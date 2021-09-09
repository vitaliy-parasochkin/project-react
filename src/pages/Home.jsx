import Card from "../components/Card"

function Home({isLoading, searchValue,  onChangeSearchInput, onAddToCard, setSearchValue,items,  onAddToFavorite,}) {
    

    const renderItems = () => {

        const filtered = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
        return (isLoading ? [...Array(12)] : filtered).map((obj, index) => (
            <Card 
                onPlus={(obj) => onAddToCard(obj)}
                onFavorite={(obj) => onAddToFavorite(obj)}
                key={index}
                isLoading = {isLoading}
                {...obj}
            />
        ))
    }
    return (
        <div className='content p-40'>
            <div className='d-flex align-center mb-40 justify-between'>
                <h1>{searchValue ? `Поиск по запросу: '${searchValue}' ` : 'Все кроссовки'}</h1>
                <div className='search-block'>
                    <img src='img/search.svg' alt='Search'/>
                    {searchValue ? <img onClick={() => setSearchValue('')} className="clear cu-p" src="img/btn-remove.svg" alt="Close" /> : null}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder='Search'/>
                </div>
            </div>
            
            <div className='card-wrapper d-flex flex-wrap'>
                {renderItems()} 
                
            </div>

        </div>
    )
}

export default Home;