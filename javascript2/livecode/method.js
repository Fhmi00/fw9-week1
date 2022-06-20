const talent = {
    firstName: "Fazz",
    lastName: "Track",
    fullName: function() {
        return this.firstName + this.lastName
    }
}

console.log(talent.fullName());