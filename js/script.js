$(document).ready(function(){



    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [12, 19, 3, 5, 2,4, 10],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(173, 173, 173, 0.1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            animation: {
                animationScale: true,
                animationRotate: true
            }
        }
    });

    let pastDates = true, availableDates = false, availableWeekDays = false
            
    let calendar = new VanillaCalendar({
        selector: "#myCalendar",
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortWeekday: ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'],
        onSelect: (data, elem) => {
            console.log(data, elem)
        }
    })
    
    let btnPastDates = document.querySelector('[name=pastDates]')
    btnPastDates.addEventListener('click', () => {
        pastDates = !pastDates
        calendar.set({pastDates: pastDates})
        btnPastDates.innerText = `${(pastDates ? 'Disable' : 'Enable')} past dates`
    })
    
    let btnAvailableDates = document.querySelector('[name=availableDates]')
    btnAvailableDates.addEventListener('click', () => {
        availableDates = !availableDates
        btnAvailableDates.innerText = `${(availableDates ? 'Clear available dates' : 'Set available dates')}`
        if (!availableDates) {
            calendar.set({availableDates: [], datesFilter: false})
            return
        }
        let dates = () => {
            let result = []
            for (let i = 1; i < 15; ++i) {
                if (i % 2) continue
                let date = new Date(new Date().getTime() + (60 * 60 * 24 * 1000) * i)
                result.push({date: `${String(date.getFullYear())}-${String(date.getMonth() + 1).padStart(2, 0)}-${String(date.getDate()).padStart(2, 0)}`})
            }
            return result
        }
        calendar.set({availableDates: dates(), availableWeekDays: [], datesFilter: true})
    })
    
    let btnAvailableWeekDays = document.querySelector('[name=availableWeekDays]')
    btnAvailableWeekDays.addEventListener('click', () => {
        availableWeekDays = !availableWeekDays
        btnAvailableWeekDays.innerText = `${(availableWeekDays ? 'Clear available weekdays' : 'Set available weekdays')}`
        if (!availableWeekDays) {
            calendar.set({availableWeekDays: [], datesFilter: false})
            return
        }
        let days = [{
            day: 'monday'
        }, {
            day: 'tuesday'
        }, {
            day: 'wednesday'
        }, {
            day: 'friday'
        }]
        calendar.set({availableWeekDays: days, availableDates: [], datesFilter: true})
    })
    
});