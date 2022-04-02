canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");

background_x = 0;
background_y = 0;
background_image_path = "parkingLot.jpg";

car_x = 590;
car_y = 100;
car_width = 110;
car_height = 120;
car_image_path = "car2.png";

function add(){
    background_declare = new Image;
    background_declare.src = background_image_path;
    background_declare.onload = upload_background;

    car_declare = new Image;
    car_declare.src = car_image_path;
    car_declare.onload = upload_car;
}

function upload_background(){
    ctx.drawImage(background_declare, background_x, background_y, canvas.width, canvas.height);
}

function upload_car(){
    ctx.drawImage(car_declare, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown)
function my_keydown(i){
    console.log("test");
    keypressed = i.keyCode;
    console.log(keypressed);
    if(keypressed == "37"){
        left();
    }
    else if(keypressed == "38"){
        up();
    }
    else if(keypressed == "39"){
        right();
    }
    else if(keypressed == "40"){
        down();
    }
}

function left(){
    if(car_x >= 0){
        car_x = car_x - 10;
        upload_background();
        upload_car();
    }
}