// 947c6b8d5bc34a23bf8e0b5b3d261e20
console.log("rahul");
let collaps = document.getElementById('call');
const xhr = new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/everything?sources=bbc-news&apikey=947c6b8d5bc34a23bf8e0b5b3d261e20',true);
xhr.onload = function(){
    if(this.status == 200){
        let json = JSON.parse(this.responseText);
        // let art = JSON.articles;
        let news = "Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.";

        // console.log(json);
        
    }
    else{
        console.log("some error occoured");
    }
}
xhr.send()








