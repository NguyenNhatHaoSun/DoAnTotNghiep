import instance from "./customAxios"

export const getSubCategoryByCategory = (page,id) =>{
    return instance.get(`${process.env.REACT_APP_API_SERVER}/sub-category?page=${page}&id=${id}`);
}