const buyTicket = document.getElementById('buyTicket');
const ticketBooking = document.getElementById('ticketBooking');
buyTicket.addEventListener('click', function () {
    ticketBooking.scrollIntoView({ behavior: 'smooth', block: 'start' });
})


// Seat selection
let selectedSeat = document.getElementById('selectedSeat');
let totalSelectedSeat = 0;

let seatLeft = document.getElementById('seatLeft');
let availableSeat = 40;

let totalPrice = document.getElementById('totalPrice');
let price = 0;

let grandPrice = document.getElementById('grandPrice');
let finalPrice = 0;

const apply = document.getElementById('apply');

const coupon = document.getElementById('coupon');

const off15 = document.getElementById('off15');

const off20 = document.getElementById('off20');



const seats = document.getElementsByClassName('seats');



for (let seat of seats) {
    seat.addEventListener('click', function () {
        totalSelectedSeat += 1;
        if (totalSelectedSeat > 4) {
            return alert('Only 4 seats can be selected at once!')
        }
        if (totalSelectedSeat == 4) {
            apply.removeAttribute('disabled', 'disabled')
        }
        const seatList = document.getElementById('seatList');
        let li = document.createElement('li');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        li.classList.add('flex', 'justify-between', 'btxt');

        seatList.appendChild(li);
        p1.innerText = seat.innerText;
        p2.innerText = 'Economy';
        p3.innerText = '550';

        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);

        seat.classList.remove('btn');
        seat.classList.add('bg', 'rounded-lg', 'h-12');
        seat.setAttribute('disabled', 'disabled');
        availableSeat -= 1;
        price += 550;
        finalPrice += 550;
        seatLeft.innerText = availableSeat;
        selectedSeat.innerText = totalSelectedSeat;
        totalPrice.innerText = price;
        grandPrice.innerText = finalPrice;
    })
}



apply.addEventListener('click', function () {
    if (coupon.value == off15.innerText) {
        finalPrice = finalPrice - (finalPrice * 15 / 100);
        grandPrice.innerText = finalPrice;
        apply.setAttribute('disabled', 'disabled');
        coupon.setAttribute('placeholder', 'NWE15');
        coupon.setAttribute('disabled', 'disabled');
    }
    else if (coupon.value == off20.innerText) {
        finalPrice = finalPrice - (finalPrice * 20 / 100);
        grandPrice.innerText = finalPrice;
        apply.setAttribute('disabled', 'disabled');
        coupon.setAttribute('placeholder', 'Couple 20');
        coupon.setAttribute('disabled', 'disabled');
    }

    else {
        return alert("Coupon doesn't exist!")
    }
})

const pName = document.getElementById('pName');
const pNumber = document.getElementById('pNumber');
const nextBtn = document.getElementById('nextBtn');
const bookingForm = document.getElementById('bookingForm');


// if(pName == '' || pNumber != '' || pNumber.innerText.length >0 ||){

// }
const main = document.getElementById('main');
const ticketBooked = document.getElementById('ticketBooked');

bookingForm.addEventListener('input', function () {
    if (pName.value !== '' && pNumber.value !== '') {


        nextBtn.removeAttribute('disabled', 'disabled');
        
    }

})
nextBtn.addEventListener('click', function () {
    if ((pNumber.value).length < 2 || isNaN(pNumber.value)) {
        return alert('Please enter the correct phone number.')
    };

       if (finalPrice <= 0) {
        return alert('You did not select any seat.')
       };
        
       main.classList.add('hidden');
       ticketBooked.classList.remove('hidden');
})

const continueBtn = document.getElementById('continueBtn');

continueBtn.addEventListener('click', function () {
    location.reload();
})



