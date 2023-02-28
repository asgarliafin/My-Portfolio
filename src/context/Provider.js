import context from 'context';
import React, { useState } from 'react';


const Provider = ({children}) =>{
    const [menu, setMenu] = useState(true);
    return <context.Provider value={{
        menu,
        setMenu
    }}>{children}</context.Provider>
}

export default Provider;