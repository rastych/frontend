( () => {
    const ajaxApi = new AjaxAPI('');
    const app = new Comments({
        rootEl: ".container",
        ajaxApi
        // placeholderText: "Some cool todo list"
    });

})();