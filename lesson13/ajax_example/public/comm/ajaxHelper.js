/**
 * Created by IlyaLitvinov on 18.10.16.
 */

class AjaxAPI {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    fetchData(callback, uri) {
        $.ajax({
            method: "GET",
            url: this.baseUrl + uri
        }).done(callback);
    }

    /**
     * @param {Function} callback
     * @param {String} uri
     * @param {Object} newItem
     * @param {String} newItem.title
     * @param {Boolean} newItem.completed
     * */
    sendData(callback, uri, newItem) {
       $.ajax({
           method: "POST",
           url: this.baseUrl + uri,
           data: newItem
       }).done(callback)
    }
    deleteItem(callback, uri, id) {
        $.ajax({
            method: "DELETE",
            url: this.baseUrl + uri + '/' + id,
        }).done(callback);
    }
    updateItem(callback, uri, id, item) {
        $.ajax({
            method: "PUT",
            url: this.baseUrl + uri + '/' + id,
            data: item
        }).done(callback);
        console.log(id, item);
    }
}