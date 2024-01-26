import logo from "../assets/ChatFlix.png"
export const userIcon = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
// export const userIcon = "https://avatars.githubusercontent.com/u/97150553?s=400&u=5a55ef9daf011a620c198cbee871d6d7958098c0&v=4"

// export const Logo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const Logo = logo

export const Background_url = "https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const API_Options ={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDNhZWQxMzFhODk4ZjkwZmMxNTdkOTk5YzQwZWM0NiIsInN1YiI6IjY0NjkxYTQxMzNhMzc2MDE3NWQyZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oLDPvey0cMymFtOvRINtJHvy2fSP46JSj2Ky6gCVJog'
    }
  };
  

export const IMG_CDN = `https://image.tmdb.org/t/p/w780/`

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_API_KEY