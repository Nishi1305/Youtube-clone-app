import { createContext, useState, useEffect, Children } from 'react';
import { fetchDataFromApi } from '../utils/api.js';

// Creating context
export const Context = createContext();

// Context Function for DATA Flow in APP
export const AppContext = ({ children }) => {
    // STATES for page
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectCategories, setSelectCategories] = useState('New');
    const [mobileMenu, setMobileMenu] = useState(false);

    // API Call in every change category and page refresh
    useEffect(() => {
        fetchSelectedCategoryData(selectCategories);
    }, [selectCategories])

    // function for selected category API call
    const fetchSelectedCategoryData = (query) => {

        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            // console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        })

    }

    return (
        <Context.Provider value={
            {
                loading, setLoading,
                searchResults, setSearchResults,
                selectCategories, setSelectCategories,
                mobileMenu, setMobileMenu
            }
        }>
            {children}
        </Context.Provider>
    )
}