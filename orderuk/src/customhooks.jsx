const useGetUser  = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null; 
};

export {useGetUser}