const modal = document.getElementById("modal")
const modalBody = document.getElementById("modal-body")

const projects = document.querySelectorAll(".project-card")

projects.forEach(card => {

card.addEventListener("mouseenter", () => {

const project = card.getAttribute("data-project")

modal.style.display = "flex"

if(project==="gl"){

modalBody.innerHTML=`

<h2>Gold Loan Calculator</h2>

<p>Developed a responsive calculator computing loan eligibility using live gold prices.</p>

<ul>
<li>SSO Integration</li>
<li>AEM components</li>
<li>20-25% increase in qualified applications</li>
</ul>

<a href="https://uat-aem.bajajfinserv.in/gold-rate-in-pune" target="_blank">
View Live Project
</a>

`

}

else if(project==="live"){

modalBody.innerHTML=`

<h2>Live Commerce Platform</h2>

<p>Built live streaming commerce platform with loan conversion journey.</p>

<ul>
<li>Reusable responsive components</li>
<li>4 successful live streaming events</li>
<li>15% conversion rate</li>
</ul>

<a href="https://www.bajajfinserv.in/live" target="_blank">
View Live Project
</a>

`

}

else if(project==="vernacular"){

modalBody.innerHTML=`

<h2>Vernacular Platform</h2>

<ul>
<li>10,000+ translated pages</li>
<li>22% traffic increase</li>
<li>28% lower exit rate</li>
<li>18% higher loan applications</li>
</ul>

<a href="https://www.bajajfinserv.in/hindi" target="_blank">
View Live Project
</a>

`

}

else if(project==="spdp"){

modalBody.innerHTML=`

<h2>GL SPDP Architecture</h2>

<p>Designed scalable AEM architecture deployed across 1200+ URLs.</p>

`

}

else if(project==="loans"){

modalBody.innerHTML=`

<h2>Loan Modules</h2>

<p>Developed modules including LAP, LAS, Flexi Loans and CD.</p>

<ul>
<li>Reusable UI components</li>
<li>Calculator implementations</li>
<li>React → SolidJS migration</li>
</ul>

`

}

else if(project==="performance"){

modalBody.innerHTML=`

<h2>Performance Optimization</h2>

<ul>
<li>Resolved 40+ production bugs</li>
<li>Improved Core Web Vitals</li>
<li>Optimized rendering logic</li>
</ul>

`

}

})

})

function closeModal(){
modal.style.display="none"
}
