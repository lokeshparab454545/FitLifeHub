export const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Key': '4ff7c988f9mshbe46b744dff95eep1769d4jsn2e6429de8f6b',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}