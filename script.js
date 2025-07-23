const jobList = document.getElementById('job-list');
const searchInput = document.getElementById('search');

const jobs = [
  { title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote' },
  { title: 'Backend Engineer', company: 'Dev Solutions', location: 'New York' },
  { title: 'UI/UX Designer', company: 'Pixel Studio', location: 'San Francisco' },
  { title: 'Data Scientist', company: 'AI Labs', location: 'Bangalore' },
  { title: 'System Administrator', company: 'NetSecure', location: 'Chennai' },
  { title: 'Mobile App Developer', company: 'AppHive', location: 'Remote' },
  { title: 'Technical Writer', company: 'DocsPro', location: 'Hyderabad' }
];

function renderJobs(filter = '') {
  jobList.innerHTML = '';
  jobs
    .filter(job => job.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach(job => {
      const div = document.createElement('div');
      div.classList.add('job');
      div.innerHTML = `<h3>${job.title}</h3><p>${job.company} - ${job.location}</p>`;
      jobList.appendChild(div);
    });
}

searchInput.addEventListener('input', (e) => {
  renderJobs(e.target.value);
});

renderJobs();

document.getElementById('applyForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Application submitted! (Feature not connected to backend)');
});