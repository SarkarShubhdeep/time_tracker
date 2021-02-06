$(document).ready(function(){

    $(document).ready(function(){
        $("#hide").click(function(){
            $("p").hide();
        });
        $("#show").click(function(){
            $("p").show();
        });
    });

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
    
});