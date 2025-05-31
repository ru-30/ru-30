document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const fname = document.getElementById('Fname').value.trim();
  const lname = document.getElementById('Lname').value.trim();
  const country = document.getElementById('Country').value.trim();
  const phone = document.getElementById('Phone').value.trim();
  const departmentDropdown = document.getElementById('dropdown').value;

  const checkboxes = document.querySelectorAll('input[name="Department"]:checked');
  const departments = Array.from(checkboxes).map(cb => cb.value);

 
  if (!fname || !lname || !country || !phone) {
    alert("Please fill out all required fields.");
    return;
  }

  const resultDiv = document.getElementById('result');
  resultDiv.style.display = 'block';
  resultDiv.innerHTML = `
    <strong>Submitted Information:</strong><br/>
    First Name: ${fname}<br/>
    Last Name: ${lname}<br/>
    Nationality: ${country}<br/>
    Phone: ${phone}<br/>
    Selected Departments: ${departments.join(', ') || 'None'}<br/>
    Department (Dropdown): ${departmentDropdown}
  `;
});
