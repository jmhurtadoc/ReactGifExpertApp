export const getGifs = async ( category ) => {
    const apiKey = "Z3uLD82ic3zFDUtmsm2rix6IQ5PmK4Q1";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${ encodeURI( category )}&limit=10&offset=0&lang:=es`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((i) => {
      return {
        id: i.id,
        title: i.title,
        url: i.images?.downsized_medium.url,
      };
    });
    return gifs;
}