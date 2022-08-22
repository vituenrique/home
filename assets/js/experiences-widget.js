import experiences_json from './experiences.json' assert {type: 'json'};

const EXPERIENCES = ['/', '/home/'].includes(window.location.pathname) ? experiences_json['experiences']['en-US'] : experiences_json['experiences']['pt-BR']
const NOT_AVAILABLE_ERROR =  ['/', '/home/'].includes(window.location.pathname) ? "Not available right now..." : "Indisponível no momento...." 

function displayExperiences(experience) {
    // TODO: show the total time in each experience.
    // Ex: 03/2019 - 06/2021 (2 yrs and 4 mos)
    let new_row = "<li>\
                    <div class='title'>" + experience.period + "</div>\
                    <div class='details'>\
                        <h5>" + experience.title + "</h5>\
                        <small class='fg-theme'>" + experience.company + "</small>\
                        <p>" + experience.job_description + "</p>\
                    </div>\
                <li>";

    $('#experiences-widget').append(new_row);
}

$(document).ready( () => {
    if (EXPERIENCES.length > 0) {
        EXPERIENCES.forEach((paper) => displayExperiences(paper));
    } else {
        $('#experiences-widget').css("display", "none")
        $('#experiences-widget').append("<h3 class='text-center wow fadeInUp'>" + NOT_AVAILABLE_ERROR + "</h3>")
    }
});