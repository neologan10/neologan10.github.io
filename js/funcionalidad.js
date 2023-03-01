document.getElementById('bt1').addEventListener('click', function(){
    document.getElementById('bt1').style.backgroundColor = 'brown';
    document.getElementById('bt2').style.backgroundColor = 'darkgrey';
    document.getElementById('bt3').style.backgroundColor = 'darkgrey';
    document.getElementById('inf_personal_1').style.display = 'block';
    document.getElementById('inf_personal_2').style.display = 'none';
    document.getElementById('inf_personal_3').style.display = 'none';
});

document.getElementById('bt2').addEventListener('click', function(){
    document.getElementById('bt1').style.backgroundColor = 'darkgrey';
    document.getElementById('bt2').style.backgroundColor = 'brown';
    document.getElementById('bt3').style.backgroundColor = 'darkgrey';
    document.getElementById('inf_personal_1').style.display = 'none';
    document.getElementById('inf_personal_2').style.display = 'block';
    document.getElementById('inf_personal_3').style.display = 'none';
});
 
document.getElementById('bt3').addEventListener('click', function(){
    document.getElementById('bt1').style.backgroundColor = 'darkgrey';
    document.getElementById('bt2').style.backgroundColor = 'darkgrey';
    document.getElementById('bt3').style.backgroundColor = 'brown';
    document.getElementById('inf_personal_1').style.display = 'none';
    document.getElementById('inf_personal_2').style.display = 'none';
    document.getElementById('inf_personal_3').style.display = 'block';
});