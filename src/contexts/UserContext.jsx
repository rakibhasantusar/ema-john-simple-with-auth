import React, { createContext } from 'react';

// aita holo context toiri korar jonno mone rakhte hobe aikhan a authcontext ta k export korte hobe must nahole onno jaigai import kora jabe na
export const AuthContext = createContext()


const UserContext = ({ children }) => {



    const authInfo = { tusar: 'tusar' } // aita auth provider er value gula aikhan theke pathabo
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;