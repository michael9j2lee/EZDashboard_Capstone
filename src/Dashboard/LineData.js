
class LineData {
    query1() {
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

const lineData = new LineData();
export default lineData;