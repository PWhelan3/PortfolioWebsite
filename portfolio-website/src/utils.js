export const getImageUrl = (path) => {
    return new Url(`/assets/${path}`, import.meta.url).href;
}