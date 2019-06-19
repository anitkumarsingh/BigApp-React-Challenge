const getUserEmail = () =>{
    let data = JSON.parse(sessionStorage.getItem('userData'))
    let checkData = data ? data : ' ';
    let userEmail = checkData.email ? checkData.email : (' ');
    return userEmail
}
const getUserName  = () =>{
    let data = JSON.parse(sessionStorage.getItem('userData'))
    let checkData = data ? data : ' ';
    let userName = checkData.name ? checkData.name : (' ');
    return userName;
}
const getUserPic = () =>{
    let data = JSON.parse(sessionStorage.getItem('userData'))
    let checkData = data ? data : ' ';
    let userPic = checkData.provider_pic ? checkData.provider_pic:'Icons/user.png';
    return userPic;
}
const checkUser = () =>{
    const data = JSON.parse(sessionStorage.getItem('userData'))
    if(data)
    return true;
    else
    return false
}

export default {
    checkUser,
    getUserPic,
    getUserName,
    getUserEmail
}