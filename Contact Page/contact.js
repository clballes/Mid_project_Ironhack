const submit = document.getElementById('submit-bt');
submit.addEventListener("click", (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => alert(JSON.stringify(
            `Full Name: ${fullName.value}  Email: ${email.value} Phone number: ${phone.value} Message: ${message.value}`
        )))
        .catch((error) => console.log(error));
})