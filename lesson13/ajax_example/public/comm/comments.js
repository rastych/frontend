class Comments {

    constructor(options) {
        this.ajaxApi = options.ajaxApi;
        this.rootElement = $(options.rootEl);
        this.templateStatic = `<div class="comments">
            <div class="comments__head">
                <div class="comments__head_input">
                    <input class="comments__head_input__field" placeholder="Enter your name" type="text">
                </div>
                <div class="comments__head_input input-field">
                    <textarea class="comment-textarea" placeholder="Your comment" type="text"></textarea>
                </div>
            </div>
            <div class="submit">Submit</div>

            <ul class="comments__section">
            </ul>
        </div>`;
        this.templateItem = `<li class="card-panel comments__todo_item row" id="{{_id}}">
                    <div class="comment_field">
                   <div class="comment_author" id="{{_id}}">{{author}}</div>
                   <div class="comment_text" id="{{_id}}">{{text}}</div>
                   <div class="comment_date">{{date}}</div>
                   <div class="editor_tools" id="{{_id}}">
                       <div class="tools_btn edit">edit</div>
                       <div class="tools_btn delete">delete</div>
                   </div>
                   </div>
               </li>`;

        this.renderView();

        this.nameInput = $(this.rootElement).find('.comments__head_input__field');
        this.commentInput = $(this.rootElement).find('.comment-textarea');
        this.submit = $(this.rootElement).find('.submit');
        this.ul = $(this.rootElement).find('.comments__section');
        this.ajaxApi.fetchData(this.renderList.bind(this), '/comments');
        this.handleEvents();
    }

    renderView () {
        let appView = this.templateStatic;
        $(this.rootElement).html(appView);
    }


    renderList(list) {
        let output = '';
        list.forEach((item) => {
            output += this.renderOne(item);
        });
        $(this.ul).html(output);
    }

    renderOne (item) {
        //parsing date
        var date = new Date(item.date);
        var month = date.getMonth() + 1;
        date = (date.getDay() < 10 ? '0' + date.getDay() : date.getDay()) + '.' + month + '.' + date.getFullYear() + ' in ' + date.getHours() + ':' + date.getMinutes();
        //replacing placeholders in template
        let el = this.templateItem.replace('{{_id}}', item.id).replace('{{_id}}', item.id).replace('{{_id}}', item.id).replace('{{_id}}', item.id).replace('{{author}}', item.author).replace('{{text}}', item.text).replace('{{date}}', date);
        return el;
    }

    addItem (author, text) {
        let item = {
            author: author,
            text: text
        };
            this.ajaxApi.sendData((newItemObj) => {
                let el = $("<div>");
                el.html(this.renderOne(newItemObj));
            }, '/comments', item);
            this.ajaxApi.fetchData(this.renderList.bind(this), '/comments');
            $(this.nameInput).val('');
            $(this.commentInput).val('');
    }

    deleteItem (id) {
        this.ajaxApi.deleteItem((resp) => {
            let target = $(this.rootElement).find('#'+id);
            target.remove();
        },  '/comments', id);
    }

    editItem (id, item) {
       this.ajaxApi.updateItem(id,  '/comments', id, item);
    }

    handleEvents () {
        //submitting
        $(this.submit).on('click', () => {
            if (this.nameInput.val() !=='' && this.commentInput.val() !== '') {
                this.addItem(this.nameInput.val(), this.commentInput.val());
            }
        });
        //deleting and editing
        $(this.ul).on('click', (e) => {
            if($(e.target).hasClass('delete')) {
                this.deleteItem($(e.target).parent().attr('id'));
            } else if($(e.target).hasClass('edit')) {
                let id = e.target.parentElement.id;
                this.commentField = $(this.rootElement).find('#' + id + '.comment_text');
                this.commentAuthor = $(this.rootElement).find('#' + id + '.comment_author');
                $(this.commentField).attr('contenteditable', 'true').focus();
                $(this.commentField).on('keydown', (key) => {
                    if (key.keyCode === 13) {
                        $(this.commentField).attr('contenteditable', 'false');
                        var item = {
                            author: $(this.commentAuthor).html(),
                            text: $(this.commentField).html(),
                        };
                        this.editItem(id, item);
                    }
                });
            }
        });
    }

}

