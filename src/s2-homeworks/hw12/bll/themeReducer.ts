type ThemeState = {
    themeId: number
}

const initState: ThemeState = {
    themeId: 1,
}

type ChangeThemeIdAction = {
    type: 'SET_THEME_ID'
    id: number
}

export const themeReducer = (state = initState, action: ChangeThemeIdAction): ThemeState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdAction => ({ type: 'SET_THEME_ID', id }) // fix any
