function handleDark(stop){
    document.querySelector('#body').classList.remove('dark');
    document.querySelector('#body').classList.add('light');
    document.querySelector('#body').style.transition = 'all 1s';
    document.querySelector('#black').style.display = 'none';
    document.querySelector('#white').style.display = 'block';
    document.querySelector('.container p').style.color = '#000000';
    document.querySelector('.section-button').style.color = '#000000';
}
function handleLight(stop){
    document.querySelector('#body').classList.remove('light');
    document.querySelector('#body').classList.add('dark');
    document.querySelector('#body').style.transition = 'all 1s';
    document.querySelector('#black').style.display = 'block';
    document.querySelector('#white').style.display = 'none';
    document.querySelector('.container p').style.color = '#ffffff';
    document.querySelector('.section-button').style.color = '#ffffff';
    
}