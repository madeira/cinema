import React, { useState } from 'react';

export const Filter = ({movies, genres, setFilteredMovies}) => {
    
    const [valueInput, setValueInput] = useState("");
    const [valueSelect, setValueSelect] = useState("");

    const getFilteredMovies = (valueInput, valueSelect) => {
        return movies.reduce((acc, item) => {
            const hasAllFilters = valueInput && valueSelect;
            const hasSelectFilter = !valueInput && valueSelect;
            const hasInputFilter = valueInput && !valueSelect;
            const checkGenre = item.genre && item.genre.length;
            const withGenre = item.genre.some(elem => elem.trim() === valueSelect);
            const withTitle = item.title.toLowerCase().includes(valueInput.toLowerCase());
            
            if (hasAllFilters && checkGenre) {
                if (withGenre && withTitle) {
                    acc.push(item);
                }
            } else if (hasInputFilter && withTitle) {
                acc.push(item);
            } else if (hasSelectFilter && checkGenre && withGenre){
                acc.push(item);
            }

            return acc;
        }, []);
    }

    const handleChangeInput = (e) => {
        const {value} = e.target;
        setValueInput(value);
        setFilteredMovies(getFilteredMovies(value, valueSelect));
    }

    const handleChangeSelect = (e) => {
        const {value} = e.target;
        setValueSelect(value);
        setFilteredMovies(getFilteredMovies(valueInput, value));
    }

    return(
        <div className="FilterHolder">
            <select onChange={handleChangeSelect}>
                {genres.map((item, i) => 
                    <option key={i} value={item}>{item}</option>
                )}
                
            </select>

            <input 
                className="Search"
                type="text" 
                name="filter-name" 
                onChange={handleChangeInput}
                placeholder="Поиск по названию ..."
                value = {valueInput}/>
        </div>
    )
};
