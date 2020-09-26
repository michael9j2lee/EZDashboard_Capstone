class CountsByDayQuery{
    static record;

    async loader() {
        var data = await json.parse(this.query1());
        console.log(data);
    }

    q1() {
        fetch('http://localhost:5000')
        .then(res => {
            console.log('Data fetched for Query1');
            return res.json();
            
            })
        .catch( err => {
            console.log("Error: Data Fetch for Query1" );
            return err;
        })
    }

}

const query1 = CountsByDayQuery();
export default query1;