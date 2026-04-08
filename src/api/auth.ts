export const isAdmin = (email: string): boolean => {
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    if  (email === adminEmail) {
        return true;
    }
    return false;
}