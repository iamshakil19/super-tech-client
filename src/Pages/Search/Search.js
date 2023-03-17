import React, { useEffect } from 'react';
import WhySuperTech from '../Shared/WhySuperTech/WhySuperTech';
import SearchInput from './SearchInput';

const Search = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <div className='mt-10 poppins'>
            <h2 className='text-3xl font-bold font-serif text-center mb-5'>Search</h2>
            <SearchInput/>
            this is search page

            <WhySuperTech/>
        </div>
    );
};

export default Search;