const cookieName = "data";

const GetCookieData = () => {
    let dc,
        prefix,
        begin,
        end;

    dc = document.cookie;
    prefix = cookieName + "=";
    begin = dc.indexOf("; " + prefix);
    end = dc.length;

    if (begin !== -1) {
        begin += 2;
    } else {
        begin = dc.indexOf(prefix);
        if (begin === -1 || begin !== 0) return null;
    };

    if (dc.indexOf(";", begin) !== -1) {
        end = dc.indexOf(";", begin);
    };

    return decodeURIComponent(dc.substring(begin + prefix.length, end).replace("\\"));
};

const getCookie = (name) => {
    let dataCookie = GetCookieData();
    if (dataCookie == null) {
        return null;
    };
    dataCookie = decodeURIComponent(dataCookie.replace("\\", ""));
    dataCookie = JSON.parse(dataCookie);

    if (dataCookie == null) {
        return null;
    };

    return dataCookie[name];
};

const setCookie = (key, value) => {
    let cookie = GetCookieData() || {};
    console.log(cookie);
    console.log(typeof(cookie));
    console.log("Key: " + key);
    console.log("Value: " + value + " with type " + typeof(value));
    console.log(cookie[key]);
    cookie[key] = value;
    document.cookie = cookieName + "=" + encodeURIComponent(JSON.stringify(cookie).replace("\\", ""));
};

export { getCookie, setCookie };
