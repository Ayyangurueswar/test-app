let initialState={
    content: "",
    editorAlone: false,
    previewerAlone: false
};
export const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'EDIT':
            return {
                content: action.value
            };
        case 'EDITOR_ONLY':
            return {
                ...state,
                previewerAlone: false,
                editorAlone: !state.editorAlone
            }
        case 'PREVIEWER_ONLY':
            return {
                ...state,
                previewerAlone: !state.previewerAlone,
                editorAlone: false
            }
        default:
            return state
    }
}