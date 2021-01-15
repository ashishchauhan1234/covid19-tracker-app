const api_url = "https://disease.sh/v3/covid-19/countries/india";

async function get_records(url) {
    const response = await fetch(url);
    const response_data = await response.json();
    show_records(response_data)
}

get_records(api_url);

function show_records(data) {
    console.log(data);
    document.getElementById("main").innerHTML = `    
        <header class="header">COVID 19 TRACKER</header>

        <div class="country"><u>
            ${
                data.country
            }</u>
        </div>

        <div>
            <table class="table1">
                <tr>
                    <th>population</th>
                    <th>tests</th>
                    <th>updated</th>
                </tr>
                <tr >    
                    <td>${data.population}</td>
                    <td>${data.tests}</td>
                    <td>${data.updated}</td>
                </tr>
            </table>
        </div>        
      
        <h1 class="heading1">current details:-</h1>
        <table class="table2">
            <tr>
                <th>total cases</th>
                <th>active cases</th>
                <th>recovered cases</th>
                <th>death cases</th>
            </tr>
            <tr>
                <td>${data.cases}</td>
                <td>${data.active}</td>
                <td>${data.recovered}</td>
                <td>${data.deaths}</td>
            </tr>
        </table> 
        
        <h1 class="heading2">today's cases:-</h1>
        <table class="table3">
            <tr>
                <th> cases</th>
                <th>recovered cases</th>
                <th>death cases</th>
            </tr>
            <tr>
                <td>${data.todayCases}</td>
                <td>${data.todayRecovered}</td>
                <td>${data.todayDeaths}</td>
            </tr>
        </table>                            
    `;
    document.getElementById("time").innerHTML = Date();
}
