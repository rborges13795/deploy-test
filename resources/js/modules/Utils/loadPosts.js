import AjaxClass from "../Forms/Validation/ajaxClass";

export default function loadPosts() {
    $("[search]").on('submit', function(e) {
        e.preventDefault();
        class LoadCards extends AjaxClass {
            successFunction(html) {
                if (html) {
                    $("#cardsDiv").html(html);
                    if($(".posts_card").get().length == 0) {
                        $("#load-more").remove();
                    }
                }
                if (!html || parseInt($("#load-more").attr('maxPages')) < parseInt($("#load-more").attr('page'))) {
                    $("#cardsDiv").children().remove();
                    $("#load-more").remove();
                }
            }

            errorFunction() {
            }
        }
        let url = '';
        let search = $(this).find('input').val();
        $(".search_lupa").removeClass('show--error');
        if (search) {
            let loadPosts = new LoadCards(null, 'get', url, 'html', null);
            loadPosts.dataString = 'search=' + search;
            loadPosts.sendNoRecaptcha();
        } else {
            $(".search_lupa").addClass('show--error');
        }
    });

    $("#load-more").on('click', function(e) {
        e.preventDefault();
        class LoadCards extends AjaxClass {
            successFunction(html) {
                if (html) {
                    $("#cardsDiv").append(html);
                }
                if (!html || parseInt($("#load-more").attr('maxPages')) < parseInt($("#load-more").attr('page'))) {
                    $("#load-more").remove();
                }
            }

            errorFunction() {
            }
        }
        let url = '';
        let page = parseInt($("#load-more").attr('page'));
        let search = $("#load-more").attr('search');
        let tag = $("#load-more").attr('tag');
        $("#load-more").attr('page', page+1);

        let loadPosts = new LoadCards(null, 'get', url, 'html', null);
        loadPosts.dataString = 'page=' + page;
        if (search) {
            loadPosts.dataString += '&search=' + search;
        }
        if (tag) {
            loadPosts.dataString += '&tag=' + tag;
        }
        loadPosts.sendNoRecaptcha();
    });
}