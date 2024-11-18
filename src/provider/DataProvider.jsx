import React, { createContext, useState } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({children}) => {

    const [activeCategory, setActiveCategory] = useState(null);
    const [services, setServices] = useState(null);
   
    const data = {
        activeCategory,
        setActiveCategory,
        services,
        setServices
    }

    return (
       <DataContext.Provider value={data}>
         {children}
       </DataContext.Provider>
    );
};

export default DataProvider;