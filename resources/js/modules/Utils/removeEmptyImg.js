export default function removeEmptyImg(){
    $("img").get().forEach((e) => { 
        if(!$(e).attr('src')) {
            $(e).attr('hidden', true);
            $(e).attr('noSource', true);
        } 
    });
}