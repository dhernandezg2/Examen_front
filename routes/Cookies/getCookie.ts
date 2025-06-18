
export function getCookie(cookieHead:string | null, name:string): string | null {
    if(!cookieHead) return null

    const cookies = cookieHead.split(";")
    const cookie =  cookies.find((c) => c.includes(`${name}=`))
    return cookie ? decodeURIComponent(cookie.split("=")[1]): null
}