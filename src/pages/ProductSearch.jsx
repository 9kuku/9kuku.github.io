import { useState } from 'react';
import search from './css/ProductSearch.module.css';

const ProductSearch = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // 여기에 검색을 처리하는 로직 추가
    };

    return (
        <div className={search.container}>
            <div className={search.searchContainer}>
                <form onSubmit={handleSearchSubmit}>
                    <input
                        className={search.searchBox}
                        type='text'
                        placeholder='상품 검색'
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                    <button
                        type='submit'
                        className={search.searchButton}
                    >검색</button>
                </form>
                <div className={search.dataContainer}>
                    {/* 여기에 첫 번째 검색 결과 출력 */}
                </div>
            </div>

            <div className={search.searchContainer}>
                <form onSubmit={handleSearchSubmit}>
                    <input
                        className={search.searchBox}
                        type='text'
                        placeholder='브랜드 검색'
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                    <button
                        type='submit'
                        className={search.searchButton}
                    >검색</button>
                </form>
                <div className={search.dataContainer}>
                    {/* 여기에 두 번째 검색 결과 출력 */}
                </div>
            </div>
        </div>
    );
}

export default ProductSearch;
