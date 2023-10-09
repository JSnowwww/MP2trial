// ---------------------------- COMPUTER CASES
function ComputerCasesApi(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "api/computer_cases.json", true);
    xhttp.send();
    xhttp.onload = function() {
        // Json Parse 
        const api = JSON.parse(xhttp.responseText);
        const json = api.data;
        // console.log(json);

        let html = "";
        html += "<div class='row'>";
        // Json For Each
        json.forEach((item) => {
            // CONSTRUCT MODAL FOR EACH CATEGORIES
            html += "<div class='col-md-4'>";
                html += "<div class='col-md-6'>";
                    html += "<div class='photo'><img scr='resources/item/"+ item.photo +"' alt='' /></div>";
                html += "</div>";
                html += "<div class='col-md-6'>";
                    html += "<div class='header'>"+ item.title +"</div>";
                    html += "<div class='price'>"+ item.sellingprice +"</div>";
                html += "</div>";
            html += "</div>";

            // ORDER (BUY NOW || ADD TO CART)
            
        });

        html += "</div>";
        document.getElementById("ccplatform").innerHTML = html;
    }
}

// ---------------------------- CPU / PROCESSOR
function CpuProcessorApi(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "api/cpu_processor.json", true);
    xhttp.send();
    xhttp.onload = function() {
        // Json Parse 
        const api = JSON.parse(xhttp.responseText);
        const json = api.data;
        // console.log(json);
        
        let html = "";
        html += "<div class='row'>";
        // Json For Each
        json.forEach((item) => {
            // CONSTRUCT MODAL FOR EACH CATEGORIES
            html += "<div class='col-md-4'>";
                html += "<div class='col-md-6'>";
                    html += "<div class='photo'><img scr='resources/item/"+ item.photo +"' alt='' /></div>";
                html += "</div>";
                html += "<div class='col-md-6'>";
                    html += "<div class='header'>"+ item.title +"</div>";
                    html += "<div class='price'>"+ item.sellingprice +"</div>";
                html += "</div>";
            html += "</div>";
        });

        html += "</div>";
        document.getElementById("cpuplatform").innerHTML = html;
    }
}

// ---------------------------- HARD DRIVE
function HardDriveApi(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "api/hard_drive.json", true);
    xhttp.send();
    xhttp.onload = function() {
        // Json Parse 
        const api = JSON.parse(xhttp.responseText);
        const json = api.data;
        // console.log(json);
        
        let html = "";
        html += "<div class='row'>";
        // Json For Each
        json.forEach((item) => {
            // CONSTRUCT MODAL FOR EACH CATEGORIES
            html += "<div class='col-md-4'>";
                html += "<div class='col-md-6'>";
                    html += "<div class='photo'><img scr='resources/item/"+ item.photo +"' alt='' /></div>";
                html += "</div>";
                html += "<div class='col-md-6'>";
                    html += "<div class='header'>"+ item.title +"</div>";
                    html += "<div class='price'>"+ item.sellingprice +"</div>";
                html += "</div>";
            html += "</div>";
        });

        html += "</div>";
        document.getElementById("hdplatform").innerHTML = html;
    }
}

// ---------------------------- MEMORY
function MemoryApi(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "api/memory.json", true);
    xhttp.send();
    xhttp.onload = function() {
        // Json Parse 
        const api = JSON.parse(xhttp.responseText);
        const json = api.data;
        // console.log(json);
        
        let html = "";
        html += "<div class='row'>";
        // Json For Each
        json.forEach((item) => {
            // CONSTRUCT MODAL FOR EACH CATEGORIES
            html += "<div class='col-md-4'>";
                html += "<div class='col-md-6'>";
                    html += "<div class='photo'><img scr='resources/item/"+ item.photo +"' alt='' /></div>";
                html += "</div>";
                html += "<div class='col-md-6'>";
                    html += "<div class='header'>"+ item.title +"</div>";
                    html += "<div class='price'>"+ item.sellingprice +"</div>";
                html += "</div>";
            html += "</div>";
        });

        html += "</div>";
        document.getElementById("memoryplatform").innerHTML = html;
    }
}

// ---------------------------- MOTHERBOADS
function MoboApi(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "api/mobo.json", true);
    xhttp.send();
    xhttp.onload = function() {
        // Json Parse 
        const api = JSON.parse(xhttp.responseText);
        const json = api.data;
        // console.log(json);
        
        let html = "";
        html += "<div class='row'>";
        // Json For Each
        json.forEach((item) => {
            // CONSTRUCT MODAL FOR EACH CATEGORIES
            html += "<div class='col-md-4'>";
                html += "<div class='col-md-6'>";
                    html += "<div class='photo'><img scr='resources/item/"+ item.photo +"' alt='' /></div>";
                html += "</div>";
                html += "<div class='col-md-6'>";
                    html += "<div class='header'>"+ item.title +"</div>";
                    html += "<div class='price'>"+ item.sellingprice +"</div>";
                html += "</div>";
            html += "</div>";
        });

        html += "</div>";
        document.getElementById("moboplatform").innerHTML = html;
    }
}

// ---------------------------- COOLING
function CoolingApi(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "api/cooling.json", true);
    xhttp.send();
    xhttp.onload = function() {
        // Json Parse 
        const api = JSON.parse(xhttp.responseText);
        const json = api.data;
        // console.log(json);
        
        let html = "";
        html += "<div class='row'>";
        // Json For Each
        json.forEach((item) => {
            // CONSTRUCT MODAL FOR EACH CATEGORIES
            html += "<div class='col-md-4'>";
                html += "<div class='col-md-6'>";
                    html += "<div class='photo'><img scr='resources/item/"+ item.photo +"' alt='' /></div>";
                html += "</div>";
                html += "<div class='col-md-6'>";
                    html += "<div class='header'>"+ item.title +"</div>";
                    html += "<div class='price'>"+ item.sellingprice +"</div>";
                html += "</div>";
            html += "</div>";
        });

        html += "</div>";
        document.getElementById("coolingplatform").innerHTML = html;
    }
}
// ---------------------------- PSU
function PsuApi(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "api/psu.json", true);
    xhttp.send();
    xhttp.onload = function() {
        // Json Parse 
        const api = JSON.parse(xhttp.responseText);
        const json = api.data;
        // console.log(json);
        
        let html = "";
        html += "<div class='row'>";
        // Json For Each
        json.forEach((item) => {
            // CONSTRUCT MODAL FOR EACH CATEGORIES
            html += "<div class='col-md-4'>";
                html += "<div class='col-md-6'>";
                    html += "<div class='photo'><img scr='resources/item/"+ item.photo +"' alt='' /></div>";
                html += "</div>";
                html += "<div class='col-md-6'>";
                    html += "<div class='header'>"+ item.title +"</div>";
                    html += "<div class='price'>"+ item.sellingprice +"</div>";
                html += "</div>";
            html += "</div>";
        });

        html += "</div>";
        document.getElementById("psuplatform").innerHTML = html;
    }
}
// ---------------------------- SSD
function SsdApi(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "api/ssd.json", true);
    xhttp.send();
    xhttp.onload = function() {
        // Json Parse 
        const api = JSON.parse(xhttp.responseText);
        const json = api.data;
        // console.log(json);
        
        let html = "";
        html += "<div class='row'>";
        // Json For Each
        json.forEach((item) => {
            // CONSTRUCT MODAL FOR EACH CATEGORIES
            html += "<div class='col-md-4'>";
                html += "<div class='col-md-6'>";
                    html += "<div class='photo'><img scr='resources/item/"+ item.photo +"' alt='' /></div>";
                html += "</div>";
                html += "<div class='col-md-6'>";
                    html += "<div class='header'>"+ item.title +"</div>";
                    html += "<div class='price'>"+ item.sellingprice +"</div>";
                html += "</div>";
            html += "</div>";
        });

        html += "</div>";
        document.getElementById("ssdplatform").innerHTML = html;
    }
}
// ---------------------------- GPU
function GpuApi(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "api/gpu.json", true);
    xhttp.send();
    xhttp.onload = function() {
        // Json Parse 
        const api = JSON.parse(xhttp.responseText);
        const json = api.data;
        // console.log(json);
        
        let html = "";
        html += "<div class='row'>";
        // Json For Each
        json.forEach((item) => {
            // CONSTRUCT MODAL FOR EACH CATEGORIES
            html += "<div class='col-md-4'>";
                html += "<div class='col-md-6'>";
                    html += "<div class='photo'><img scr='resources/item/"+ item.photo +"' alt='' /></div>";
                html += "</div>";
                html += "<div class='col-md-6'>";
                    html += "<div class='header'>"+ item.title +"</div>";
                    html += "<div class='price'>"+ item.sellingprice +"</div>";
                html += "</div>";
            html += "</div>";
        });

        html += "</div>";
        document.getElementById("gpuplatform").innerHTML = html;
    }
}




function retriveAPI(item) {
    // CONSTRUCT MODAL FOR EACH CATEGORIES
    html += "<div class='col-md-4'>";
        html += "<div class='col-md-6'>";
            html += "<div class='photo'><img scr='resources/item/"+ item.photo +"' alt='' /></div>";
        html += "</div>";
        html += "<div class='col-md-6'>";
            html += "<div class='header'>"+ item.title +"</div>";
            html += "<div class='price'>"+ item.sellingprice +"</div>";
        html += "</div>";
    html += "</div>";
    
}

window.onload = function(){
    ComputerCasesApi();
    CpuProcessorApi();
    HardDriveApi();
    MemoryApi()
    MoboApi ()
    CoolingApi()
    PsuApi()
    SsdApi()
    GpuApi()
};