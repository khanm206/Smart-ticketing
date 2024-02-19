const buyTicket = document.getElementById('buyTicket');
const ticketBooking = document.getElementById('ticketBooking');
buyTicket.addEventListener('click', function(){
    ticketBooking.scrollIntoView({behavior: 'smooth', block: 'start'});
})


// ticketBooking