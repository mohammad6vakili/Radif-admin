export const HAMBURGER="HAMBURGER";
export const PROFILE="PROFILE";


export const setHamburger=(data)=>{
    return(
        {
            type:HAMBURGER,
            payload:data
        }
    )
}

export const setProfile=(data)=>{
    return(
        {
            type:PROFILE,
            payload:data
        }
    )
}