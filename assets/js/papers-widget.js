import papers_json from './papers.json' assert {type: 'json'};

const papers = papers_json['papers']
const NOT_AVAILABLE_ERROR =  ['/', '/home/'].includes(window.location.pathname) ? "Not available right now..." : "Indisponível no momento...." 


function displayPaper(paper, index) {
    let new_row = "<tr>\
                    <td>" + paper.title + "</td>\
                    <td>" + paper.publisher + "</td>\
                    <td>" + paper.year + "</td>\
                    <td>\
                        <a href='" + paper.link + "' target='_blank' class='btn btn-secondary btn-sm " + (paper.link == "#" ? "disabled" : "") + "' tabindex='-1' role='button' aria-disabled='true'>\
                            <span class='icon ti-link'></span> View\
                        </a>\
                    </td>\
                <tr>";

    $('#papers-widget').append(new_row);
}

$(document).ready( () => {
    if (papers.length > 0) {
        papers.forEach((paper, index) => displayPaper(paper, index));
    } else {
        $('#papers-table').css("display", "none")
        $('#papers-error').append("<h3 class='text-center wow fadeInUp'>" + NOT_AVAILABLE_ERROR + "</h3>")
    }
});