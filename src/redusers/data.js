import { SET_MOVIES, SET_SESSIONS, SET_ROOMS } from '../constants';

const InitialValues = {
    movies: [],
    genres: [],
    rooms: [],
    sessions: []
};

export const data = (state = InitialValues, action) => {
    switch (action.type) {
        case SET_MOVIES:
            const genres = action.payload.reduce((acc, item) => {
                if (item.genre && item.genre.length) {
                    item.genre.forEach(element => {
                        if(!acc.includes(element.trim()) && element.length){
                            acc.push(element.trim());
                        }
                    });
                }
                return acc

            }, []);

            return {
                ...state,
                movies: action.payload,
                genres
            };

        case SET_SESSIONS:
            const sortedArr = action.payload.sort((a, b) => {
                if (new Date(a.date) > new Date(b.date)){
                    return 1;
                }
                if (new Date(a.date) < new Date(b.date)){
                    return -1;
                }
                return 0;
            }) 
            const newArray = sortedArr.reduce((acc, item) => {
                if (!acc.length){
                    acc.push([])
                };

                const lastElement = acc[acc.length-1];
                const lastElementDate = lastElement.length ? lastElement[0].date.split("T")[0] : null;
                const itemDate = item.date.split("T")[0];
                const differentDates = +new Date(lastElementDate) !== +new Date(itemDate);

                if (lastElement.length && differentDates){
                    return [...acc, [item]];
                };

                acc[acc.length-1].push(item);

                return acc;
            },[])

            return {
                ...state,
                sessions: newArray
            };
        
        case SET_ROOMS:
            return {
                ...state,
                rooms: action.payload
            }; 
    
        default:
            return state;
    }
}
