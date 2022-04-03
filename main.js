function startClassification(){
navigator.mediaDevices.getUserMedia({audio: true});
ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/l5ZMrBnTg/model.json',modelReady);
}

function modelReady(){
    classfier.classify(gotResults);
}

function gotResults(error,result){
    if(error){
    console.error(error)
}
else{
    console.log(result)
}
}