//https://teachablemachine.withgoogle.com/models/h42lRZwlB/

function startClassification(){
     navigator.mediaDevices.getUserMedia({audio:true});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/h42lRZwlB/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - "+ results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - "+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb(" +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img = document.getElementById('dogz');
        img1 = document.getElementById('catz');
        img2 = document.getElementById('calvez');
        img3 = document.getElementById("cubz");

        if (results[0].label == "Clapping") {
            img.src = 'dog.gif';
            img1.src = 'catz.jpg';
            img2.src = 'calvez.jpg';
            img3.src = 'lion-cubs-4.jpg';
        } else if (results[0].label == "Hello") {
            img.src = 'Dog_Puppy_Sleeping_Cute_Face_Image.jpg';
            img1.src = 'cat.gif';
            img2.src = 'calvez.jpg';
            img3.src = 'lion-cubs-4.jpg';
        } else if (results[0].label == "Goodbye") {
            img.src = 'Dog_Puppy_Sleeping_Cute_Face_Image.jpg';
            img1.src = 'catz.jpg';
            img2.src = 'cow.gif';
            img3.src = 'lion-cubs-4.jpg';
        }else{
            img.src = 'Dog_Puppy_Sleeping_Cute_Face_Image.jpg';
            img1.src = 'catz.jpg';
            img2.src = 'calvez.jpg';
            img3.src = 'lion-gif.gif';
        }
    }
}