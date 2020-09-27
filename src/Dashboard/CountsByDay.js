class CountsByDayQuery{    
    
    constructor(props) {
        // this.state = {
        //     items: [],
        //     error:null,
        //     isLoaded:false
        // };

    }


    async q1(queryNum) {

        let headers = new Headers();
        headers.append('Accept', 'application/json, text/plain, */*');
        headers.append('Content-Type','application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        
        await fetch('http://localhost:5000/query', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({query:queryNum})
            }
        )
        .then(res=>res.json())
        .then()

        // .then(response => response.json().then(json=>data))
        // // .then( res => {
        // //     return res;
        // // })
        // .catch(err => {console.log(err); })
        
    }
    

    loader(queryNum) {
        
        this.q1(queryNum);
        console.log("OUTSIDE IN LOADER", JSON.stringify(this.data));
        console.log("DATA TYPE: ",typeof(response));
        // const json = JSON.parse(this.q1(1));

        // var records = JSON.parse(response).recordset;

        // for (var i = 0; i < records.length; i ++){
        //     var obj = response[i];
        //     this.data.push();
        // }
        // console.log(this.data);
        // response.foreach(async function(record){
        //     this.data.push(record);
        // })
    }
}

const query1 = new CountsByDayQuery();
export default query1;