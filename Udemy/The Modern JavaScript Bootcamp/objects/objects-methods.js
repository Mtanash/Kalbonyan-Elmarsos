let restaurant = {
    name: "ASB",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        return partySize + this.guestCount <= this.guestCapacity
    },
    seatParty: function (amount) {
        this.guestCount += amount
    },
    removeParty: function (amount) {
        this.guestCount -= amount
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(6))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(6))
