document.addEventListener('DOMContentLoaded', function () {
    const product = localStorage.getItem('product');
    const quantity = localStorage.getItem('quantity');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const address = localStorage.getItem('address');
    const payment = localStorage.getItem('payment');
    const total = localStorage.getItem('total');

    const bill = `
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Payment Method:</strong> ${payment}</p>
        <p><strong>Total Amount:</strong> ${total}</p>
    `;

    document.getElementById('billOutput').innerHTML = bill;
});

function goBack() {
    window.location.href = 'checkout.html';
}
