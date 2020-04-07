var data = [
    { 'principal': 2500, 
    'time': 1.8
    },

    { 'principal': 1000,
     'time': 5
    },

    { 'principal': 3000,
     'time': 1
    },
     
    { 'principal': 2000,
     'time': 3}
];


function interestCalculator(data){
    let interestData = [];
    for (let i=0; i<data.length;i++){
        let interest = "";
        let rate = 0;
        let myData = {};
        let principle = data[i].principal;
        let time = data[i].time;
        if (principle >= 2500 && time>1 && time<3){
            rate = 3
            interest = (principle*rate*time)/100;
            myData = {
                principal:principle,
                rate:rate,
                time:time,
                interest:interest
            };
            interestData.push(myData);
        }
        else if(principle >= 2500 && time>=3){
            rate = 4
            interest = (principle*rate*time)/100;
            myData = {
                principal:principle,
                rate:rate,
                time:time,
                interest:interest
            };
            interestData.push(myData);
        }
        else if (principle < 2500 || time <= 1){
            rate = 2
            interest = (principle*rate*time)/100;
            myData = {
                principal:principle,
                rate:rate,
                time:time,
                interest:interest
            };
            interestData.push(myData)
        }
        
        else{
            rate = 1
            interest = (principle*rate*time)/100;
            myData = {
                principal:principle,
                rate:rate,
                time:time,
                interest:interest
            };
            interestData.push(myData);
        }
    }
    console.log(interestData);
    return interestData;
}
interestCalculator(data);