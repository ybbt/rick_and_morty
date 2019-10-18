export const setCharacters = (state, characters) => {
    state.characters = characters;
};

export const setPages = (state, pages) => {
    state.pages = pages;
};

export const setActualPage = (state, actualPage) => {
    state.actualPage = actualPage;
};

export const setCharacter = (state, character) => {
    state.characters.push(character);
};