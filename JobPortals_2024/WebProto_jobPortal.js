/*console.log('Hello');
console.log('I like pizza!');

window.alert('This is an alert!');
window.alert('I like pizza!'); */

document.addEventListener("DOMContentLoaded", function () {
    fetchJobs();
});

function fetchJobs() {
    fetch('/api/jobs')
        .then(response => response.json())
        .then(jobs => {
            const jobListingsSection = document.querySelector("#JobListings");
            let jobHtml = '';
            jobs.forEach(job => {
                jobHtml += `
                    <article class="JobListing">
                        <h3>${job.title}</h3>
                        <p><strong>Company:</strong> ${job.company}</p>
                        <p><strong>Location:</strong> ${job.location}</p>
                        <p><strong>Job Type:</strong> ${job.job_type}</p>
                        <p><strong>Description:</strong> ${job.description}</p>
                        <a href="${job.apply_link}" class="ApplyButton">Enroll!</a>
                    </article>`;
            });
            jobListingsSection.innerHTML = jobHtml;

        })

        .catch(error => console.error('Cannot fetch jobs:', error));


    $(document).ready(function(){
        $('.JobListings').slick({
            infinite: true,
            slidesToShow: 3, // Number of visible slides
            slidesToScroll: 1,
            dots: true,
            arrows: true
        });
    });
}
