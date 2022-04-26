const axios = require("axios");
require("dotenv").config();
const url = `https://api.github.com/users/${process.env.USER}/followers`

const fs = require("fs");


function check(args){

    fs.readFile('./src/data/users.json', (err, data_from_file) => {
    
        if(err){console.log(err); return}

        try {
            const users = JSON.parse(data_from_file)

            let list_users = []
            users.forEach(i => {
                list_users.push(i['login']);   
            });

            // Intersection algorithm
            function arrayIntersection(input1, input2) {
                var input2NotInInput1 = input2.filter(function(values1) {
                    return input1.map(function(val) { return JSON.stringify(val); }).indexOf(JSON.stringify(values1)) === -1;
                });
                var input1NotInInput2 = input1.filter(function(values1) {
                    return input2.map(function(val) { return JSON.stringify(val); }).indexOf(JSON.stringify(values1)) === -1;
                });
                return input1NotInInput2 .concat( input2NotInInput1 );
            };
        
            console.log(arrayIntersection(list_users, args));
        }
        catch (err){console.log(err)}
    });   
}

function main() {
    return axios.get(url)
        .then(response => {
            const data = response.data;
            list_data = []
            data.forEach(i => {
                list_data.push(i['login'])
            });
            check(list_data)
        })
        .catch(err => console.log(err))
}

main()
