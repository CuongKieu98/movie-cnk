import { makeApiCall } from "./apiUtils";

const baseUrl = "https://ophim1.com";

export function getListMovie (page) {
    const url = `${baseUrl}/danh-sach/phim-moi-cap-nhat?page=${page}`
    var option = {
        url:url,
        method:"GET"
    };
    return makeApiCall(option)
}

export function getDetails (param){
    const url = `${baseUrl}/phim/${param}`
    var option = {
        url:url,
        method:"GET"
    };
    return makeApiCall(option)
}

export function getDetailPlaylist (param){
    const url = `${baseUrl}/detailplaylist?id=${param}`
    var option = {
        url:url,
        method:"GET"
    };
    return makeApiCall(option)
}

export function getInfoSong (param){
    const url = `${baseUrl}/infosong?id=${param}`
    var option = {
        url:url,
        method:"GET"
    };
    return makeApiCall(option)
}

export function getHome (param){
    const url = `${baseUrl}/home?page=${param}`
    var option = {
        url:url,
        method:"GET"
    };
    return makeApiCall(option)
}

export function getCharthome (){
    const url = `${baseUrl}/charthome`
    var option = {
        url:url,
        method:"GET"
    };
    return makeApiCall(option)
}

export function getNewReleaseChart (){
    const url = `${baseUrl}/newreleasechart`
    var option = {
        url:url,
        method:"GET"
    };
    return makeApiCall(option)
}

export function getArtist (artist){
    const url = `${baseUrl}/artist?name=${artist}`
    var option = {
        url:url,
        method:"GET"
    };
    return makeApiCall(option)
}

export function getLyric (param){
    const url = `${baseUrl}/lyric?id=${param}`
    var option = {
        url:url,
        method:"GET"
    };
    return makeApiCall(option)
}

export function SearchData (value){
    const url = `${baseUrl}/search?keyword=${value}`
    var option = {
        url:url,
        method:"GET"
    };
    return makeApiCall(option)
}

export function getListMV (id,page,count){
    const url = `${baseUrl}/listmv?${id,page,count}`
    var option = {
        url:url,
        method:"GET"
    };
    return makeApiCall(option)
}

export function getCategotyMV (param){
    const url = `${baseUrl}/categorymv?id=${param}`
    var option = {
        url:url,
        method:"GET"
    };
    return makeApiCall(option)
}

export function getVideo (param){
    const url = `${baseUrl}/video?id=${param}`
    var option = {
        url:url,
        method:"GET"
    };
    return makeApiCall(option)
}