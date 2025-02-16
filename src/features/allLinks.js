import { createSlice, nanoid } from "@reduxjs/toolkit";

const savedLinks = localStorage.getItem('allLinks');
const initialLinks = savedLinks ? JSON.parse(savedLinks) : [];

const initialState = {
    links: initialLinks,
    bgImages: [
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_USER_NAME}/image/upload/v1739715641/1one-blue-lock_ffymll.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_USER_NAME}/image/upload/v1739715641/2two-solo-leveling_hy7hsh.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_USER_NAME}/image/upload/v1739715641/3three-demon-slayer_lv15mx.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_USER_NAME}/image/upload/v1739715641/4four-solo-leveling_vyurob.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_USER_NAME}/image/upload/v1739715642/5five-blue-lock_h4qj46.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_USER_NAME}/image/upload/v1739715642/6six-solo-leveling_uu6pt8.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_USER_NAME}/image/upload/v1739715641/7seven-demon-slayer_rcfikw.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_USER_NAME}/image/upload/v1739715641/8eight-solo-leveling_ydsniq.png`,
    ]
}

export const allLinksSlice = createSlice({
    name: "linksCollection",
    initialState,
    reducers: {
        addLink: (state, action) => {
            const newLink = {
                id: nanoid(),
                name: action.payload.name,
                link: action.payload.link,
                logo: action.payload.logo
            };
            state.links.push(newLink);
            localStorage.setItem('allLinks', JSON.stringify(state.links));
        },
        removeLink: (state, action) => {
            state.links = state.links.filter(link => link.id !== action.payload.id);
            localStorage.setItem('allLinks', JSON.stringify(state.links));
        }
    }
});

export const { addLink, removeLink } = allLinksSlice.actions;

export default allLinksSlice.reducer;
