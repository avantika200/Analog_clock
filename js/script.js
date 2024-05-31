function clock()
{
   // window.alert("Clock");
   const d=new Date();
   console.log(d);
   let h=d.getHours();
   console.log(h);
   let m=d.getMinutes();
   console.log(m);
   let s=d.getSeconds();
   console.log(s);
   s_rotation=s*6;
   m_rotation=m*6;
   h_rotation=30*h+parseInt(m/2)
   document.getElementById('h').style.transform=`rotate(${h_rotation}deg)`;
   document.getElementById('m').style.transform=`rotate(${m_rotation}deg)`;
   document.getElementById('s').style.transform=`rotate(${s_rotation}deg)`;
}
clock();
setInterval(clock,1000);
