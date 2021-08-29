const bookings = [
    {
        roomType: "standard",
        breakfast: false,
        pax: 1,
        nightStay: 3
    },
    {
        roomType: "standard",
        breakfast: false,
        pax: 1,
        nightStay: 4
    },
    {
        roomType: "suite",
        breakfast: true,
        pax: 2,
        nightStay: 1
    }
];

class Booking {
    constructor() {
        this._bookings = [];
        this._subtotal = 0;
        this._total = 0;
    }

    roomPrice(roomType) {
        switch(roomType) {
            case 'standard':
                return 100;
            case 'suite':
                return 150;
        }
        return 0;
    }

    includeBreakfast = breakfast => breakfast ? 15 : 0 

    aditionalPax = pax => pax > 1 ? (pax - 1) * 40 : 0

    calculateSubtotal() {
        this._subtotal = bookings.map(booking =>
            booking.nightStay * (
            this.roomPrice(booking.roomType) + 
            this.aditionalPax(booking.pax) + 
            this.includeBreakfast(booking.breakfast) *
            booking.pax
            )
        );
    }

    calculateTotal() {
        this._total = bookings.map(booking =>
            booking.nightStay * (
            this.roomPrice(booking.roomType) + 
            this.aditionalPax(booking.pax) + 
            this.includeBreakfast(booking.breakfast) *
            booking.pax
            ) * 1.21 
            //como puedo escribir este código sin repetir toto lo de subtotal?
        );
    }

    get subtotal() {
        return this._subtotal;
    }

    get total() {
        return this._total;
    }

    set bookings (finalBooking) {
        this._bookings = finalBooking;
        this.calculateSubtotal();
        this.calculateTotal();
    }
}

class TourOperator extends Booking {
    // constructor(dis) {
    //     super();
    //     this._discount = dis;
    // }
    //en vez del 0.85 del discount (15% escrito a fuego), me gustaría escribir (1 - dis),
    //y escribir, dado el caso, el % que se desea, new TourOperator(0.15)
    roomPrice(roomType) { return roomType = 100 }

    includeBreakfast = breakfast => breakfast ? 15 * 0.85 : 0 

    aditionalPax = pax => pax > 1 ? (pax - 1) * (40 * 0.85) : 0
}

const myReservation = new Booking();
myReservation.bookings = bookings;
console.log("Subtotal Private Customer: ", myReservation.subtotal);
console.log("Total Private Customer: ", myReservation.total);

const bookingOperator = new TourOperator(0.15);
bookingOperator.bookings = bookings;
console.log("Subtotal Tour Operator: ", bookingOperator.subtotal);
console.log("Total Tour Operator: ", bookingOperator.total);