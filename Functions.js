// Once an image button is selected, its associated URL is sent to the query textbox.
$('#gw').click(function () {
    $('#input').val('http://www.nature.com/nature/journal/v412/n6843/full/412139a0.html');
});

$('#hh').click(function () {
    $('#input').val('http://onlinelibrary.wiley.com/doi/10.1111/j.1095-8649.1988.tb05520.x/abstract');
});

$('#ws').click(function () {
    $('#input').val('http://www.springerlink.com/index/M21R2608U3PV5451.pdf');
});

$('#gs').click(function () {
    $('#input').val('http://www.bioone.org/doi/abs/10.1656/1528-7092(2002)001[0189:FROTGS]2.0.CO;2');
});

// Once the "Clear" button is selected, the value of the query textbox is set to null
$('#clear').click(function () {
    $('#input').val('');
});

// Organizes the citation of the article. Retrieves the best-matched result using Google Scholar, displays the title as a link to the URL and appends it to the "citation" div, displays the citation details underneath and appends it to the "citation" div, and calls to the orgDetails() function. If no match is found, an error is returned.
var orgCitation = function (x) {
    if ($('#input').val() === '') {
        return;
    } else {
        try {
            var article = x.data[0].scholar[0];
            $("<a/>", {
                href: article.url,
                target: "_blank"
            })
                .html(article.title)
                .appendTo("#citation")
                .wrap("<div/>");

            var cite = article.citedSources.citations[0].bibliographyText;
            $("<div/>").html(cite).appendTo("#citation");
            $("<div/>").html(article.snippet).appendTo("#citation");
            $("<a/>", {
                href: article.citedByUrl,
                target: "_blank"
            })
                .appendTo("#citation")
                .wrap("<div/>");
            article.facts.forEach(orgDetails); // for each detail of the article, call to orgDetails()
        } catch (error) {
            $("#error").text("Error: " + error.code + ". " + error.message + ". Please select an image or enter a valid query.");
        }
    }
};

// Displays the details of the article in lists. For each item, the value is displayed and appended to the list for that given detail category. The list is then appended to the "details" div.
var orgDetails = function (detail) {
    $("<dt/>").html(detail.displayAttribute).appendTo("#details");
    var list = $("<ol/>");
    detail.values.forEach(function (value) {
        $("<li/>").html(value.displayValue).appendTo(list);
    });
    $("<dd/>").append(list).appendTo("#details");
};

$("#api").on("submit", function (event) {
    event.preventDefault();
    var form = $(this);
    $("#details, #citation, #error").empty();
    $.getJSON(form.attr("action") + "?callback=?", form.serializeArray(), orgCitation);
});
