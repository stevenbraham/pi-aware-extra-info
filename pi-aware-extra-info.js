/**
 * Created by stevenbraham on 08-11-16.
 */
$(function () {
    $('#selected_infoblock tbody').append('<tr class="infoblock_body" id="pi-awere-extra-info-block"><td colspan="2">Loading extra info</td> </tr>');
    console.log("Pi aware extra info injected");
    $("#sidebar_container").on('click', '#plane_row_template', function () {
        //extracting redirect url
        var redirectUrl = $(this).find('a[target="_blank"]').not('a#dump1090_version').attr("href");
        //I need to use this weird method to bypass corrs
        $("#pi-awere-extra-info-block").text("Loading extra info");
        $.get('proxy.php', {url: redirectUrl}, function (html) {
            var parsed = $(html);
            var imageUrl = parsed.find('img.thumbnail_nav').attr('src');
            $("#pi-awere-extra-info-block").html('<img src="' + imageUrl + '" alt="No image found"/>' + '<p>' + parsed.find('.track-panel-course').text().trim() + '</p>')
        });
    });
});

