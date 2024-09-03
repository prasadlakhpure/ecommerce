function submitForm(event) {
    event.preventDefault();


    const product = document.getElementById('product').value;
    const productName = document.getElementById('product').options[document.getElementById('product').selectedIndex].text;
    const quantity = document.getElementById('quantity').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;
    const total = product * quantity;

    localStorage.setItem('product', productName);
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('address', address);
    localStorage.setItem('payment', payment);
    localStorage.setItem('total', `₹${total} `);

    window.location.href = 'bill.html';
}
