const axios = require("axios");
require("dotenv").config();
const url = `https://api.github.com/users/${process.env.USER}/followers`
const fs = require("fs");



function save_for_next_monitoring(args){
    fs.writeFile('./src/data/users.json', JSON.stringify(args), 'utf-8', (err, result) => {
        
        if(err){console.log(err); return}

        console.log(result);


    })
}




function main() {
    return axios.get(url)
        .then(response => {
            const data = response.data;
            list_data = []
            data.forEach(i => {
                list_data.push(i['login'])
            });
            save_for_next_monitoring(data);
        })
        .catch(err => console.log(err))
}

main()