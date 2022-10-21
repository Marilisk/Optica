import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [
            {
                "model": "shop.category",
                "pk": 8,
                "fields": {
                    "name": "root",
                    "parent": null,
                    "slug": "root",
                    "photo": "noimage.png",
                    "lft": 1,
                    "rght": 16,
                    "tree_id": 1,
                    "level": 0
                }
            },
            {
                "model": "shop.category",
                "pk": 3,
                "fields": {
                    "name": "Аксессуары",
                    "parent": 8,
                    "slug": "aksessuary",
                    "photo": "noimage.png",
                    "lft": 2,
                    "rght": 5,
                    "tree_id": 1,
                    "level": 1
                }
            },
            {
                "model": "shop.category",
                "pk": 4,
                "fields": {
                    "name": "Чехлы",
                    "parent": 3,
                    "slug": "chehly",
                    "photo": "noimage.png",
                    "lft": 3,
                    "rght": 4,
                    "tree_id": 1,
                    "level": 2
                }
            },
            {
                "model": "shop.category",
                "pk": 7,
                "fields": {
                    "name": "Контактные линзы",
                    "parent": 8,
                    "slug": "kontaktnye-linzy",
                    "photo": "noimage.png",
                    "lft": 6,
                    "rght": 7,
                    "tree_id": 1,
                    "level": 1
                }
            },
            {
                "model": "shop.category",
                "pk": 1,
                "fields": {
                    "name": "Оправы",
                    "parent": 8,
                    "slug": "opravy",
                    "photo": "noimage.png",
                    "lft": 8,
                    "rght": 15,
                    "tree_id": 1,
                    "level": 1
                }
            },
            {
                "model": "shop.category",
                "pk": 2,
                "fields": {
                    "name": "Оправы женские",
                    "parent": 1,
                    "slug": "opravy-zhenskie",
                    "photo": "noimage.png",
                    "lft": 9,
                    "rght": 10,
                    "tree_id": 1,
                    "level": 2
                }
            },
            {
                "model": "shop.category",
                "pk": 6,
                "fields": {
                    "name": "Оправы детские",
                    "parent": 1,
                    "slug": "opravy-detskie",
                    "photo": "noimage.png",
                    "lft": 11,
                    "rght": 12,
                    "tree_id": 1,
                    "level": 2
                }
            },
            {
                "model": "shop.category",
                "pk": 5,
                "fields": {
                    "name": "Оправы мужские",
                    "parent": 1,
                    "slug": "opravy-muzhskie",
                    "photo": "noimage.png",
                    "lft": 13,
                    "rght": 14,
                    "tree_id": 1,
                    "level": 2
                }
            }
        ]

    },
    reducers: {
        onSelectCategory(state, action) {


        },

    }
})

export const { onSelectCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;