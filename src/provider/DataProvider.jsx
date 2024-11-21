import React, { createContext, useState } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({children}) => {

    const [activeCategory, setActiveCategory] = useState(null);
    const [services, setServices] = useState([]);
    const [bookedService, setBookedService] = useState([])
    const [selectCounselor, setSelectCounselor] = useState([])
  //  console.log(services);
    const data = {
        activeCategory,
        setActiveCategory,
        services,
        setServices,
        bookedService,
        setBookedService,
        selectCounselor,
        setSelectCounselor
    }

    // console.log(bookedService);

    return (
       <DataContext.Provider value={data}>
         {children}
       </DataContext.Provider>
    );
};

export default DataProvider;