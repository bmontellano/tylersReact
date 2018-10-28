const userName = 'BrianMontellano'

var getProfilePic = function (userName) {
    return 'https://photo.whatever.com/' + userName;
}

var getProfileLink = function (uersname) {
    return 'https://wwww.whatever.com/' + userName;
}

var getUserInfo = function (userName) {
    return {
        pic: getProfilePic(userName);
        link: getProfileLink(userName);
    }
}

getUserInfo('brianmontellano');