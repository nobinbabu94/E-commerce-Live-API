export const filterAll = (data, restaurantData) => {
    const filterlist = restaurantData.filter((item) => {
        return item?.data?.name?.toLowerCase()?.includes(data?.toLowerCase())
    })
    return filterlist;
}
