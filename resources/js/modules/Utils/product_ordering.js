import AjaxClass from "../Forms/Validation/ajaxClass";

export default function productFilter(){

    $(document).on('click', "[name='paginate']", function (e) {
        e.preventDefault();
        let query = 'page=' + $(this).attr('page');

        sendRequest(query);
    });

    $(document).on('submit', "[search]", function (e) {
        e.preventDefault();
        let query = 'search=' + $("#search-value").val();

        sendRequest(query);
    });

    // $(document).on('change', "[filter]", function () {
    //     let filterQuery = 'filter[]=' + getFiltersQuery();
    //     let query = filterQuery;

    //     sendRequest(query);
    // });

    function sendRequest(query) {
        class FilterItems extends AjaxClass {
            successFunction(html) {
                $("#right-column").html(html);
            }
            beforeSendFunction() {
            };
        }
    
        let url = '';
        let setFilters = new FilterItems(null, 'GET', url, 'html', query);
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + query;
        window.history.pushState({path:newurl},'',newurl);
        setFilters.sendNoRecaptcha();
    }

    function getFiltersQuery() {
        let allFilters = $("[filter]").get();
        let allFiltersChecked = [];
        let query = '';
        allFilters.forEach((element) => {
            if ($(element).prop('checked')) {
                allFiltersChecked.push(element);
            }
        });

        allFiltersChecked.forEach((element, key) => {
            if ($(element).prop('checked')) {
                query += $(element).attr('filter').replace('filter_', '');
                if (allFiltersChecked.length - 1 != key) {
                    query = query + '&filter[]=';
                }
            }
        });

        return query;
    }

}
