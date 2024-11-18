import React, { createContext, useState } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({children}) => {

    const [activeCategory, setActiveCategory] = useState(null);
    const [services, setServices] = useState([]);
    const [bookedService, setBookedService] = useState([])
   
    const data = {
        activeCategory,
        setActiveCategory,
        services,
        setServices,
        bookedService,
        setBookedService
    }

    // console.log(bookedService);

    return (
       <DataContext.Provider value={data}>
         {children}
       </DataContext.Provider>
    );
};

export default DataProvider;