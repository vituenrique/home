import papers_json from './papers.json' assert {type: 'json'};

const PAPERS = papers_json['papers']
const NOT_AVAILABLE_ERROR =  ['/', '/home/'].includes(window.location.pathname) ? "Not available right now..." : "Indisponível no momento...." 
const VIEW_BTN_LABEL =  ['/', '/home/'].includes(window.location.pathname) ? "View" : "Ver" 

function displayPaper(paper) {
    let new_row = "<tr>\
                    <td>" + paper.title + "</td>\
                    <td>" + paper.publisher + "</td>\
                    <td>" + paper.year + "</td>\
                    <td>\
                        <a href='" + paper.link + "' target='_blank' class='btn btn-secondary btn-sm " + (paper.link == "#" ? "disabled" : "") + "' tabindex='-1' role='button' aria-disabled='true'>\
                            <span class='icon ti-link'></span>" + VIEW_BTN_LABEL
                        "</a>\
                    </td>\
                <tr>";

    $('#papers-widget').append(new_row);
}

$(document).ready( () => {
    if (PAPERS.length > 0) {
        PAPERS.forEach((paper) => displayPaper(paper));
    } else {
        $('#papers-table').css("display", "none")
        $('#papers-error').append("<h3 class='text-center wow fadeInUp'>" + NOT_AVAILABLE_ERROR + "</h3>")
    }
});