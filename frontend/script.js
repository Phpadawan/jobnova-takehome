const jobs = [
  {
    title: "Web Application Developer",
    company: "Startup Inc",
    location: "Austin, TX"
  },
  {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "Remote"
  },
  {
    title: "Full Stack Engineer",
    company: "Cool Company",
    location: "New York"
  }
];

const jobsDiv = document.getElementById("jobs");

jobs.forEach(job => {
  const div = document.createElement("div");
  div.className = "job-card";
  div.innerHTML = `
    <h3>${job.title}</h3>
    <p>${job.company} - ${job.location}</p>
    <button>Apply</button>
  `;
  jobsDiv.appendChild(div);
});