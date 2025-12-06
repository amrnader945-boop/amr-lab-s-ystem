const patients = JSON.parse(localStorage.getItem("patients")) || [];
if (document.getElementById("addForm")) {
document.getElementById("addForm").addEventListener("submit", e => {e.preventDefault();
const data = {id: Date.now(),name: name.value,age: age.value,gender: gender.value,phone: phone.value,email: email.value,
ABS: ABS.value,CONC: CONC.value,TRANS: TRANS.value};
patients.push(data);localStorage.setItem("patients", JSON.stringify(patients));
window.location.href = "patients.html";});}
if (document.getElementById("patientsBox")) {
const box = document.getElementById("patientsBox");
patients.forEach(p => {box.innerHTML += `<div class='box'><h3>${p.name}</h3><p>Age: ${p.age}</p><p>Phone: ${p.phone}</p>
<a class='btn' href='report.html?id=${p.id}'>Open Report</a></div>`;});}
if (window.location.search.includes("id")) {
const id = window.location.search.split("=")[1];const p = patients.find(x => x.id == id);
document.getElementById("r-name").textContent = p.name;document.getElementById("r-age").textContent = p.age;
document.getElementById("r-gender").textContent = p.gender;document.getElementById("r-phone").textContent = p.phone;
document.getElementById("r-ABS").textContent = p.ABS;document.getElementById("r-CONC").textContent = p.CONC;document.getElementById("r-TRANS").textContent = p.TRANS;
document.getElementById("sendWA").onclick = ()=>{const msg = `AMR LAB REPORT\nName: ${p.name}\nAge: ${p.age}\nABS: ${p.ABS}`;
window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`);};}