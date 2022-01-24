Vue.createApp({
    data() {
        return {
            appName1: 'Ticket',
            appName2: 'Booking',
            appName3: 'System',
            seatStatus: {
                available: {
                    text: 'AvailAble',
                    color:'white'
                },
                sold: {
                    text: 'Sold',
                    color:'red'
                },
                booked: {
                    text: 'Booked',
                    color:'gray'
                },
                selected: {
                    text: 'Selected',
                    color:'blue'
                }
            },
            seats: [
                {
                    name: 'A1',
                    type:'booked',
                   price:350
                },
                {
                    name: 'A2',
                    type:'available',
                   price:350
                },
                {
                    name: 'A3',
                    type:'available',
                   price:350
                },
                {
                    name: 'A4',
                    type:'sold',
                   price:350
                },
                {
                    name: 'B1',
                    type:'available',
                   price:350
                },
                {
                    name: 'B2',
                    type:'sold',
                   price:350
                },
                {
                    name: 'B3',
                    type:'booked',
                   price:350
                },
                {
                    name: 'B4',
                    type:'available',
                   price:350
                },
                {
                    name: 'C1',
                    type:'available',
                   price:350
                },
                {
                    name: 'C2',
                    type:'available',
                   price:350
                },
                {
                    name: 'C3',
                    type:'available',
                   price:350
                },
                {
                    name: 'C4',
                    type:'sold',
                   price:350
                },
                {
                    name: 'D1',
                    type:'available',
                   price:350
                },
                {
                    name: 'D2',
                    type:'available',
                   price:350
                },
                {
                    name: 'D3',
                    type:'available',
                   price:350
                },
                {
                    name: 'D4',
                    type:'booked',
                   price:350
                },
                {
                    name: 'E1',
                    type:'available',
                   price:350
                },
                {
                    name: 'E2',
                    type:'available',
                   price:350
                },
                {
                    name: 'E3',
                    type:'sold',
                   price:350
                },
                {
                    name: 'E4',
                    type:'available',
                   price:350
                },
                {
                    name: 'F1',
                    type:'sold',
                   price:350
                },
                {
                    name: 'F2',
                    type:'available',
                   price:350
                },
                {
                    name: 'F3',
                    type:'available',
                   price:350
                },
                {
                    name: 'F4',
                    type:'available',
                   price:350
                },
                {
                    name: 'G1',
                    type:'booked',
                   price:350
                },
                {
                    name: 'G2',
                    type:'available',
                   price:350
                },
                {
                    name: 'G3',
                    type:'sold',
                   price:350
                },
                {
                    name: 'G4',
                    type:'available',
                   price:350
                },
                {
                    name: 'H1',
                    type:'sold',
                   price:350
                },
                {
                    name: 'H2',
                    type:'available',
                   price:350
                },
                {
                    name: 'H3',
                    type:'available',
                   price:350
                },
                {
                    name: 'H4',
                    type:'available',
                   price:350
                },
                {
                    name: 'I1',
                    type:'available',
                   price:350
                },
                {
                    name: 'I2',
                    type:'available',
                   price:350
                },
                {
                    name: 'I3',
                    type:'available',
                   price:350
                },
                {
                    name: 'I4',
                    type:'available',
                   price:350
                },
                {
                    name: 'J1',
                    type:'available',
                   price:350
                },
                {
                    name: 'J2',
                    type:'available',
                   price:350
                },
                {
                    name: 'J3',
                    type:'available',
                   price:350
                },{
                    name: 'J4',
                    type:'available',
                   price:350
                },
                

            ],
            appliedCoupon: null,
            couponCode: '',
           coupons: [
            {
              code: '100TAKAOFF',
              discount: 100
            },

             {
              code: '200TAKAOFF',
              discount: 200
            }
            ],
            name: '',
            phone: '',
           confirmed:false



        }
        
    },
    computed: {
    selectedSeats() {
      let selectedSeat = this.seats.filter((item) => item.type === 'selected');
      return selectedSeat;
    },
    totalCost() {
      let totalCost=0;
      this.selectedSeats.forEach((seat) => {
        totalCost += seat.price;
      });
    //   console.log (e);
        
      return totalCost;
        },
        subTotalCost() {
            if (this.appliedCoupon !== null) {
             subTotalCost = this.totalCost - this.appliedCoupon.discount;
            }
            return subTotalCost;
    }
    },
    methods: {
        selectSeat(i) {
            let selectedSeat = this.seats[i];
            if (selectedSeat.type === 'sold') {
                alert('This Seats Already Sold');
                return;
            }
             if (selectedSeat.type === 'booked') {
                 alert('This Seats Already Booked');
                 return
            }     

             if (selectedSeat.type === 'available' && this.selectedSeats.length > 2) {
                 alert('You Cant Select More Than 3 Seats');
                 return
            }
            
            selectedSeat.type = selectedSeat.type === 'selected' ? 'available' : 'selected';
            // console.log(selectedSeat);
        },
        confirm() {
            if (this.name === '' || this.phone === '') {
                alert('Required'); 
                return;
      }
      this.confirmed = true;
        },
        resetData() {
  this.confirmed = false;
  this.name = "";
  this.phone = "";
  this.appliedCoupon = null;

  this.seats.forEach((seat) => {
    if (seat.type === "selected") {
      seat.type = "sold";
    }
  });
}
    },
  watch: {
    couponCode(newValue) {
      if (newValue.length === 10) {
        let newCouponCode = this.coupons.filter((item) => item.code == newValue);
        if (newCouponCode.length === 1) { 
          this.appliedCoupon = newCouponCode[0];
            this.couponCode = '';
        }
        else {
          alert('This Coupon Code IsNot Valid');
        }
      }
      
    }
  }
}).mount('#app');