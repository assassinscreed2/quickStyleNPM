// Image Style
function quickImage(params){
    let images = document.querySelectorAll('.quickImage');

    images.forEach((image)=>{
        image.style.border = `3px solid ${params && params.color ? params.color:'grey'}`
        image.style.borderRadius = '4px'
        image.style.padding = '10px'
        image.style.width = `${params && params.width ? params.width:"150px"}`
        image.style.boxShadow = '10px 10px 5px grey'
        image.style.transition = '.8s ease'
        image.style.margin = '8px'
        image.style.filter = 'contrast(130%)'
        image.addEventListener('mouseover',func1);
        image.addEventListener('mouseout',func2);
        image.style.cursor = ''
        function func1(){
            image.style.opacity = '0.7'
        }
        function func2(){
            image.style.opacity = '1'
        }
    })
}

//Text Style
function quickText(params){
    let texts = document.querySelectorAll('.quickText');

    texts.forEach((text)=>{
        text.style.fontFamily = `${params && params.family ? params.family:'Arial'}`
    })
}

//Button Style
function quickButton(params){
    let buttons = document.querySelectorAll('.quickButton')

    buttons.forEach((button) => {
        button.style.backgroundColor = `${params && params.color?params.color:"#4CAF50"}`; /* Green */
        button.style.border = 'none';
        button.style.color = 'white';
        button.style.padding = '10px 20px';
        button.style.textAlign = 'center';
        button.style.textDecoration = 'none';
        button.style.display = 'inline-block';
        button.style.fontSize = '16px';
        button.style.margin = '4px 2px';
        button.style.transitionDuration = '0.4s';
        button.style.cursor = 'pointer';
        button.style.borderRadius = '10%'

        button.addEventListener('mouseover',func1)
        button.addEventListener('mouseout',func2)

        function func1(){
            button.style.backgroundColor = 'white';
            button.style.color=`${params && params.color?params.color:"#4CAF50"}`;
            button.style.border = `2px solid ${params && params.color?params.color:"#4CAF50"}`
        }
        function func2(){
            button.style.backgroundColor = `${params && params.color?params.color:"#4CAF50"}`;
            button.style.color = 'white';
            button.style.border = 'none';
        }
    })

}

module.exports = {
    quickButton,
    quickImage,
    quickText
}