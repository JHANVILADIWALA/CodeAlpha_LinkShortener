let btn = document.getElementById("shorten");
btn.addEventListener('click',short);
async function short(){
    let longurl=document.getElementById("longurl").value;
     const result=await fetch(`https://api.shrtco.de/v2/shorten?url=${longurl}`)
     const data=await result.json();
     console.log(data.result.short_link);

     let shorturl=document.getElementById("shorturl");
     shorturl.value=data.result.short_link;
    }
    let newurl=document.getElementById("shorturl");
    let copybtn=document.getElementById("copy");
    copybtn.onclick=()=>{
      //select the text
      newurl.select();
      //copy to clipboard
      window.navigator.clipboard.writeText(newurl.value);
    }