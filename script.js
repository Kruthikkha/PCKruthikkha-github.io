const cards = document.querySelectorAll(".project-card")
const popup = document.getElementById("project-popup")
const popupContent = document.getElementById("popup-content")
const closeBtn = document.getElementById("popup-close")

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

const project = card.dataset.project

popup.style.display = "block"

if(project==="gl"){
popupContent.innerHTML = `
<h3>Gold Loan Calculator</h3>
<p>Responsive calculator computing loan eligibility using live gold prices.</p>
<ul>
<li>SSO Integration</li>
<li>AEM Components</li>
<li>20-25% increase in applications</li>
</ul>
<a href="https://uat-aem.bajajfinserv.in/gold-rate-in-pune" target="_blank">View Live</a>
`
}

else if(project==="live"){
popupContent.innerHTML = `
<h3>Live Commerce Platform</h3>
<p>Live streaming commerce platform enabling real-time loan conversions.</p>
<ul>
<li>Reusable UI components</li>
<li>4 live events</li>
<li>15% conversion rate</li>
</ul>
<a href="https://www.bajajfinserv.in/live" target="_blank">View Live</a>
`
}

else if(project==="vernacular"){
popupContent.innerHTML = `
<h3>Vernacular Platform</h3>
<ul>
<li>10,000+ localized pages</li>
<li>22% traffic increase</li>
<li>18% more loan applications</li>
</ul>
<a href="https://www.bajajfinserv.in/hindi" target="_blank">View Live</a>
`
}

})

})

closeBtn.onclick = () => popup.style.display = "none"
