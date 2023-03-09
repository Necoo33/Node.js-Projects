// this function gets the exact cookie if it's
// source and name provided. First argument is
// cookie header which it could be finded in
// "req.headers.cookie" value. Second argument is
// the name of cookie which you want to find.

// it checks if there cookies exist and if the
// cookie that has the same name with second 
// argument exist. Later than split all cookies,
// find the cookie has the same name with second
// argument and return the value of that cookie. 

// I wrote it for finding my auth token in cookies
// without problem and i'm using it.

function getTrueCookie(cookieHeader, exactCookie){
    if(cookieHeader.length === 0 || !exactCookie){
        return;
    }

    let splitCookies = cookieHeader.split("; ");

    let findTheExactCookie = splitCookies.find(param => JSON.stringify(param).includes(exactCookie));

    if(!findTheExactCookie){
        return
    }

    let getExactCookie = findTheExactCookie.split("=")[1];

    return getExactCookie
};