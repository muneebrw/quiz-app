var score = 0
function check()
{
    var correct = document.getElementsByClassName('correct')
    for(i = 0; i < correct.length; i++)
    {
        if(correct[i].checked === true)
        {
            score++
        }   
    }
    alert(score + ' answers are correct out of ' + correct.length)

    // var a1 = document.getElementsByClassName('a1')
    // for(i = 0; i < a1.length; i++)
    // {
    //     if(a1[i].checked === true)
    //     {
    //         a1[i].innerHTML = 
            
    //     }
    // }
    score = 0
}