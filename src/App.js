import React from 'react';
import './App.css';
import ImageSRC from './afficheSRC.jpg';
import ReactPlayer from 'react-player';



function App() {
  return (
    <div className="App" style={{maxWidth:"100vw"}}>      
      <div className="title">
        <h1 style={{color:'rgb(222, 24, 49)'}}>مجموعة من ايدي لايدك</h1>      
        <h2 style={{color:'#2ca591'}}>تحت اشراف جمعية أكودة زمان</h2>              
      </div>
      <br/>
      <div className="poster1">
        <img
            style={{ width: '50%', height: '45%' }}
            src={ImageSRC} 
            alt="imagefromsrc" />
            <div className='poster1para'style={{top: "300px", right: "10px"}}>
            <p>
        ثبت عن النبيّ -صلّى الله عليه وسلّم- أنّه قال:<br/>
        (مَن نَفَّسَ عن مُؤْمِنٍ كُرْبَةً مِن كُرَبِ الدُّنْيَا، نَفَّسَ اللَّهُ عنْه كُرْبَةً مِن كُرَبِ يَومِ القِيَامَةِ،<br/>
          وَمَن يَسَّرَ علَى مُعْسِرٍ، يَسَّرَ اللَّهُ عليه في الدُّنْيَا وَالآخِرَةِ،<br/>
          وَمَن سَتَرَ مُسْلِمًا، سَتَرَهُ اللَّهُ في الدُّنْيَا وَالآخِرَةِ،<br/>
            وَاللَّهُ في عَوْنِ العَبْدِ ما كانَ العَبْدُ في عَوْنِ أَخِيهِ).<br/>
        </p>
        </div>
       
      </div>
      <br/>
      <div className="poster2">
        <p className='poster2para'>
        السلام عليكم و رحمة الله و بركاته،
        هذه مساهماتكم لقفة رمضان 1443 الموافق لأفريل 2022
        ربي يبارك لكل من ساهم حتى لو بالكلمة الطيبة و جعله الله في ميزان حسناتك
        رمضان مبارك و كل عام و انتم بخير
        </p>
       <div className='imgKofin'>
         <img src='/kofinPblc.jpg' alt='kofin-Ramadan'/>
       </div>
      </div>
      <br/>
      <div
          style={{ display: "flex", justifyContent: "center", marginTop: 100 }}
        >
          
          
        <ReactPlayer url='https://www.youtube.com/watch?v=5Qb_7wUVrkY' />
        
      </div> 
      <p>نتمنى لكم رمضان مبارك</p>
    </div>
  );
}

export default App;
